import React, { useState, useEffect, useContext } from 'react';
import Swal from 'sweetalert2';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';

const MyGroups = () => {
  const { user } = useContext(AuthContext);
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://hobby-hub-server-rho.vercel.app/groups?creatorEmail=${user.email}`) 
        .then(res => res.json())
        .then(data => {
          setGroups(data || []);
          setLoading(false);
        })
        .catch(err => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won’t be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_API_URL}/groups/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              const remaining = groups.filter(group => group._id !== id);
              setGroups(remaining);
              Swal.fire("Deleted!", "Group has been deleted.", "success");
            }
          });
      }
    });
  };

  if (loading) return <div className="text-center py-10 text-lg">Loading your groups...</div>;

  return (
    <div className='m-10'>
      <h1 className='text-4xl font-bold text-center text-teal-700 mb-8'>My Created Groups</h1>

      {groups.length === 0 ? (
        <p className="text-center text-gray-600 text-lg mt-10">You haven't created any groups yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full border">
            <thead className="bg-gray-100 text-gray-800 font-semibold">
              <tr>
                <th className="px-4 py-2">Group Name</th>
                <th className="px-4 py-2">Category</th>
                <th className="px-4 py-2">Start Date</th>
                <th className="px-4 py-2">Max Members</th>
                <th className="px-4 py-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {groups.map(group => (
                <tr key={group._id} className="hover:bg-gray-50">
                  <td className="border px-4 py-2">{group.groupName}</td>
                  <td className="border px-4 py-2">{group.category}</td>
                  <td className="border px-4 py-2">{group.startDate}</td>
                  <td className="border px-4 py-2">{group.maxMembers}</td>
                  <td className="border px-4 py-2 text-center space-x-2">
                    <Link to={`/updateGroup/${group._id}`}>
                      <button className="btn btn-sm btn-outline text-blue-600">
                        <FaEdit /> Update
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(group._id)}
                      className="btn btn-sm btn-outline text-red-600"
                    >
                      <FaTrash /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyGroups;
