
import React from 'react';
import GroupCard from './GroupCard'; // Adjust path if needed
import { useLoaderData } from 'react-router';


const AllGroups = () => {
  const groups = useLoaderData(); // Assuming loader fetches all groups

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-4xl font-bold text-center mb-10">
        All <span className="text-gray-500">Groups</span>
      </h2>

      {groups.length === 0 ? (
        <p className="text-center text-gray-600">No groups found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map(group => (
            <GroupCard key={group._id} group={group} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllGroups;
