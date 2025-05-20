import React from 'react';

const WhyJoin = () => {
  const benefits = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12l2 2 4-4" />
        </svg>
      ),
      title: 'Connect with Like-Minded People',
      description: 'Join hobby groups that share your passion and make new friends.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.1 0-2 .9-2 2v6a2 2 0 004 0v-6c0-1.1-.9-2-2-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14" />
        </svg>
      ),
      title: 'Learn New Skills',
      description: 'Discover tips, tutorials, and group activities to improve your hobby.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14v7" />
        </svg>
      ),
      title: 'Have Fun & Stay Motivated',
      description: 'Participate in exciting group events and challenges to keep your passion alive.'
    }
  ];

  return (
    <section className="bg-gray-50 py-12 px-6 rounded-lg shadow-md my-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">
          Why Join <span className="text-gray-500">HobbyHub?</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map(({ icon, title, description }, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="mb-4 mx-auto w-12 h-12">{icon}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;
