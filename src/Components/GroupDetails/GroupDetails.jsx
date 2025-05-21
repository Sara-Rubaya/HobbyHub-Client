import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import swal from "sweetalert";  // <-- import sweetalert

const GroupDetails = () => {
  const { id } = useParams(); // _id of the group
  const { user } = useContext(AuthContext);
  const [group, setGroup] = useState(null);
  const [loading, setLoading] = useState(true);
  const [joinStatus, setJoinStatus] = useState("");

  useEffect(() => {
    const fetchGroupFromJson = async () => {
      try {
        const res = await fetch("/groups.json");
        const data = await res.json();
        const found = data.find((group) => group._id === id);
        setGroup(found || null);
      } catch (error) {
        console.error("Failed to load groups JSON:", error);
        setGroup(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchGroupFromJson();
    } else {
      setLoading(false);
    }
  }, [id]);

  const handleJoinGroup = async () => {
    try {
      const res = await fetch(`http://localhost:3000/groups/${id}/join`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userEmail: user?.email }),
      });
      const data = await res.json();

      if (data.success) {
        setJoinStatus("You have joined the group!");
        swal("Success!", "You have joined the group!", "success");  // SweetAlert success

        const updated = await fetch(`http://localhost:3000/groups/${id}`);
        const updatedData = await updated.json();
        setGroup(updatedData);
      } else {
        setJoinStatus(data.message || "Failed to join group.");
        swal("Oops!", data.message || "Failed to join group.", "error");  // SweetAlert error
      }
    } catch {
      setJoinStatus("Something went wrong.");
      swal("Error", "Something went wrong.", "error");  // SweetAlert error
    }
  };

  if (loading) return <div className="text-center mt-12">Loading group details...</div>;
  if (!group) return <div className="text-center mt-12 text-red-600">Group not found.</div>;

  const alreadyJoined = group.members?.includes(user?.email);
  const isFull = group.members?.length >= group.maxMembers;

  return (
    <section className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-600">{group.groupName}</h1>

      {group.imageUrl ? (
        <img
          src={group.imageUrl}
          alt={group.groupName}
          className="w-full max-h-[300px] object-cover rounded mb-6"
        />
      ) : (
        <div className="w-full max-h-[300px] bg-gray-200 rounded mb-6 flex items-center justify-center text-gray-500">
          No image available
        </div>
      )}

      <div className="space-y-2 text-gray-700 text-base mb-6">
        <p><strong>Category:</strong> {group.category}</p>
        <p><strong>Description:</strong> {group.description}</p>
        <p><strong>Meeting Location:</strong> {group.meetingLocation}</p>
        <p><strong>Start Date:</strong> {group.startDate}</p>
        <p><strong>Max Members:</strong> {group.maxMembers}</p>
        <p><strong>Current Members:</strong> {group.members?.length || 0}</p>
      </div>

      {user && (
        <div className="mb-8">
          {alreadyJoined ? (
            <p className="text-gray-600 font-semibold mb-2">You have already joined this group.</p>
          ) : isFull ? (
            <p className="text-red-600 font-semibold mb-2">This group is full.</p>
          ) : (
            <button
              onClick={handleJoinGroup}
              className="btn btn-primary bg-gray-900 hover:bg-gray-700 text-white"
            >
              Join Group
            </button>
          )}
          {joinStatus && <p className="mt-2 text-blue-500">{joinStatus}</p>}
        </div>
      )}
    </section>
  );
};

export default GroupDetails;
