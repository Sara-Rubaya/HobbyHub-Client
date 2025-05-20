import React, { useEffect, useState } from 'react';

const AllGroups = () => {
  const [groups, setGroups] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch('/groups.json')
      .then((res) => res.json())
      .then((data) => setGroups(data))
      .catch((err) => console.error('Error fetching groups:', err));
  }, []);

  const displayedGroups = showAll ? groups : groups.slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">
        Explore Our <span className="text-gray-500">Groups</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedGroups.map((group, index) => (
          <div key={index} className="card bg-base-100 shadow-md hover:shadow-lg transition">
            <figure>
              <img src={group.imageUrl} alt={group.groupName} className="h-52 w-full object-cover" />
            </figure>
            <div className="card-body">
              <h3 className="text-xl font-semibold text-gray-800">{group.groupName}</h3>
              <p className="text-sm text-gray-600">{group.description}</p>
              <div className="mt-2 text-sm text-gray-500">
                <p><strong>Category:</strong> {group.category}</p>
                <p><strong>Location:</strong> {group.meetingLocation}</p>
                <p><strong>Start Date:</strong> {group.startDate}</p>
                <p><strong>Max Members:</strong> {group.maxMembers}</p>
              </div>
              <div className="card-actions justify-end mt-4">
                <button className="btn btn-sm bg-gray-700 text-white hover:bg-gray-800">
                  Join Group
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {groups.length > 3 && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="btn bg-gray-800 text-white hover:bg-gray-900 px-6">
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        </div>
      )}
    </div>
  );
};

export default AllGroups;
