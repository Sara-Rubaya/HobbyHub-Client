import React, { useEffect, useState, useContext } from "react";

import swal from "sweetalert";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

const MyGroups = () => {
  const { user } = useContext(AuthContext);
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
    
      setLoading(false);
      return;
    }

    const fetchUserGroups = async () => {
      try {
        const res = await fetch(`http://localhost:3000/groups?creatorEmail=${user.email}`);
       
        const data = await res.json();
        setGroups(data);
      } catch (error) {
        console.error("Failed to fetch groups:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserGroups();
  }, [user]);

  const handleDelete = (groupId) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this group!",
      icon: "warning",
      buttons: ["Cancel", "Delete"],
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        try {
          const res = await fetch(`http://localhost:3000/groups/${groupId}`, {
            method: "DELETE",
          });
          const data = await res.json();
          if (data.success) {
            swal("Deleted!", "Your group has been deleted.", "success");
            // Remove deleted group from state
            setGroups((prev) => prev.filter((g) => g._id !== groupId));
          } else {
            swal("Oops!", data.message || "Failed to delete group.", "error");
          }
        } catch (error) {
          swal("Error", "Something went wrong during deletion.", error);
        }
      }
    });
  };

  const handleUpdate = (groupId) => {
    navigate(`/updateGroup/${groupId}`);
  };

  if (loading) return <div className="text-center mt-12">Loading your groups...</div>;
  if (!groups.length) return <div className="text-center mt-12">You have no groups created.</div>;

  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-700">My Groups</h1>

      <table className="min-w-full border border-gray-300 rounded overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2 text-left">Group Name</th>
            <th className="border px-4 py-2 text-left">Category</th>
            <th className="border px-4 py-2 text-left">Start Date</th>
            <th className="border px-4 py-2 text-left">Max Members</th>
            <th className="border px-4 py-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {groups.map((group) => (
            <tr key={group._id} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{group.groupName}</td>
              <td className="border px-4 py-2">{group.category}</td>
              <td className="border px-4 py-2">{group.startDate}</td>
              <td className="border px-4 py-2">{group.maxMembers}</td>
              <td className="border px-4 py-2 text-center space-x-2">
               <Link to="/updateGroup">
                <button
                  onClick={() => handleUpdate(group._id)}
                  className="btn btn-sm btn-primary bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
                >
                  Update
                </button>
               </Link>
                <button
                  onClick={() => handleDelete(group._id)}
                  className="btn btn-sm btn-danger bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default MyGroups;
