import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import WhyJoin from './WhyJoin/WhyJoin';
import { Link, useLoaderData, useLocation } from 'react-router';
import GroupCard from './GroupCard';
import MemberAchievements from './Achievements/ MemberAchievements';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#groups') {
      const section = document.getElementById('groupsSection');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  const groups = useLoaderData();



  const displayedGroups = groups.slice(0, 6);

  return (
    <div className='mx-auto p-10'>
      <div>
        <Banner />
      </div>

       {/* GROUPS */}
      <div>
        <h2 id="groupsSection" className="text-3xl font-bold text-center mb-8">
          Explore Our <span className="text-gray-500">Groups</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedGroups.map(group => (
            <GroupCard key={group._id} group={group} />
          ))}
        </div>

        {/* Show More / Show Less button */}
        
          <div className="text-center mt-8">
            <Link to='/all-groups'><button
              
              className="btn bg-gray-800 text-white hover:bg-gray-900 px-6"
            >Show More</button></Link>
          </div>
        
      </div>


      {/* Achievements */}
      <div>
        <MemberAchievements></MemberAchievements>
      </div>

      <div>
        <WhyJoin />
      </div>

      
    </div>
  );
};

export default Home;
