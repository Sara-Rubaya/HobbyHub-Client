import React, { useEffect} from 'react';
import Banner from './Banner';
import WhyJoin from './WhyJoin/WhyJoin';
import { Link, useLoaderData, useLocation } from 'react-router';
import GroupCard from './GroupCard';
import MemberAchievements from './Achievements/ MemberAchievements';
import FAQ from './FAQ/FAQ';
import ContactUs from './ContactUs/ContactUs';

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
        <div data-aos="fade-up" className="mt-16">
  <h2
    id="groupsSection"
    data-aos="fade-up"
    className="text-3xl font-bold text-center mb-8"
  >
    Explore Our <span className="text-blue-500">Groups</span>
  </h2>

  <div
    data-aos="fade-up"
    data-aos-delay="100"
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
  >
    {displayedGroups.map((group, index) => (
      <div data-aos="zoom-in" data-aos-delay={index * 100} key={group._id}>
        <GroupCard group={group} />
      </div>
    ))}
  </div>
</div>


        {/* Show More / Show Less button */}
        
          <div className="text-center mt-8" >
  <Link to="/all-groups">
    <button
      className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold px-8 py-3 rounded-lg 
                 transition-all duration-300 transform hover:scale-110 hover:shadow-lg 
                 hover:from-blue-500 hover:to-cyan-500"
    >
      Show More
    </button>
  </Link>
</div>

        
      </div>


      {/* Achievements */}
      <div>
        <MemberAchievements></MemberAchievements>
      </div>

      <div>
        <WhyJoin />
      </div>
      <div>
        <FAQ></FAQ>
      </div>
      <div>
        <ContactUs></ContactUs>
      </div>

      
    </div>
  );
};

export default Home;
