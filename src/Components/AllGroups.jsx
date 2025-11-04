import React, { useState } from 'react';
import GroupCard from './GroupCard'; // Adjust path if needed
import { useLoaderData } from 'react-router';

const AllGroups = () => {
  const groups = useLoaderData(); // Assuming loader fetches all groups
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Get unique categories from groups
  const categories = ['All', ...new Set(groups.map(g => g.category))];

  // Filter groups based on selected category
  const filteredGroups = selectedCategory === 'All'
    ? groups
    : groups.filter(g => g.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-4xl font-bold text-center mb-6">
        All <span className="text-blue-500">Groups</span>
      </h2>

      {/* Horizontal Filter */}
      <div className="flex overflow-x-auto gap-3 mb-8 px-2 py-2">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`flex-shrink-0 px-4 py-2 rounded-full border transition ${
              selectedCategory === category
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-blue-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Group Cards */}
      {filteredGroups.length === 0 ? (
        <p className="text-center text-gray-600">No groups found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map(group => (
            <GroupCard key={group._id} group={group} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllGroups;
