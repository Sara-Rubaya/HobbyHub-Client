import React, { useState } from 'react';
import Banner from './Banner';
import WhyJoin from './WhyJoin/WhyJoin';
import { useLoaderData } from 'react-router';
import GroupCard from './GroupCard';

const Home = () => {
  const groups = useLoaderData();
  const [showAll, setShowAll] = useState(false);


  const displayedGroups = showAll ? groups : groups.slice(0, 3);

  return (
    <div className='mx-auto p-10'>
      <div>
        <Banner />
      </div>

      <div>
        <h2 className="text-3xl font-bold text-center mb-8">
          Explore Our <span className="text-gray-500">Groups</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedGroups.map(group => (
            <GroupCard key={group._id} group={group} />
          ))}
        </div>

        {/* Show More / Show Less button */}
        {groups.length > 3 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn bg-gray-800 text-white hover:bg-gray-900 px-6"
            >
              {showAll ? 'Show Less' : 'Show More'}
            </button>
          </div>
        )}
      </div>

      <div>
        <WhyJoin />
      </div>

      
    </div>
  );
};

export default Home;
