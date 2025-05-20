import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';


const GroupDetails = () => {
  const { id } = useParams();
  const [group, setGroup] = useState(null);
  const [loading, setLoading] = useState(true);
  const [joinStatus, setJoinStatus] = useState('');
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:3000/groups/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setGroup(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Failed to fetch group:', error);
        setLoading(false);
      });
  }, [id]);

  const handleJoinGroup = async () => {
    try {
      const res = await fetch(`http://localhost:3000/groups/${id}/join`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userEmail: user?.email }),
      });

      const data = await res.json();
      if (data.success) {
        setJoinStatus('You have joined the group!');
        // Re-fetch group data to update members
        const updatedGroup = await fetch(`http://localhost:3000/groups/${id}`).then((res) => res.json());
        setGroup(updatedGroup);
      } else {
        setJoinStatus(data.message);
      }
    } catch (error) {
      console.error('Error joining group:', error);
      setJoinStatus('Something went wrong.');
    }
  };

  if (loading) {
    return <div className="text-center text-xl py-10">Loading group details...</div>;
  }

  if (!group) {
    return <div className="text-center text-red-500 py-10">Group not found.</div>;
  }

  const alreadyJoined = group.members?.includes(user?.email);
  const isFull = group.members?.length >= group.maxMembers;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">{group.groupName}</h2>
      <img src={group.imageUrl} alt={group.groupName} className="w-full h-64 object-cover rounded-lg mb-6" />
      <div className="space-y-2 text-gray-700 text-base">
        <p><strong>Category:</strong> {group.category}</p>
        <p><strong>Description:</strong> {group.description}</p>
        <p><strong>Meeting Location:</strong> {group.meetingLocation}</p>
        <p><strong>Start Date:</strong> {group.startDate}</p>
        <p><strong>Max Members:</strong> {group.maxMembers}</p>
        <p><strong>Current Members:</strong> {group.members?.length || 0}</p>
      </div>

      {user && (
        <div className="mt-6">
          {alreadyJoined ? (
            <p className="text-green-600 font-semibold">You have already joined this group.</p>
          ) : isFull ? (
            <p className="text-red-500 font-semibold">This group is full.</p>
          ) : (
            <button onClick={handleJoinGroup} className="btn btn-primary">Join Group</button>
          )}
          {joinStatus && <p className="mt-2 text-sm text-blue-500">{joinStatus}</p>}
        </div>
      )}
    </div>
  );
};

export default GroupDetails;
