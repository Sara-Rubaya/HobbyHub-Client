import React from 'react';

const AboutUs = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-4xl font-bold text-center mb-8 text-indigo-400">About Us</h1>

      <p className="text-lg mb-6 text-center">
        <strong>Welcome to <span className='text-2xl text-gray-600 underline'>HobbyHub</span></strong> — your community for curiosity, creativity, and connection.
      </p>

      <p className="mb-4">
        At <strong>HobbyHub</strong>, we believe that hobbies aren’t just pastimes — they’re passions that bring people together.
        Whether you're a book lover, a gamer, a painter, a plant parent, or a coding enthusiast, there's a group here for you.
      </p>

      <ul className="list-disc list-inside mb-6">
        <li><strong>Discover</strong> local and online hobby groups that match your interests</li>
        <li><strong>Join</strong> like-minded communities for fun events, meetups, and projects</li>
        <li><strong>Create</strong> your own group and build a space for your passion</li>
        <li><strong>Connect</strong> with people who inspire, challenge, and support you</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2 mt-8">💡 Why We Started</h2>
      <p className="mb-6">
        We noticed a gap between people’s interests and real-life connection. So we built a platform that turns shared interests into real communities — where everyone feels welcome, inspired, and included.
      </p>

      <h2 className="text-2xl font-semibold mb-2">👥 Join Us</h2>
      <p className="mb-4">
        Your next hobby, friend, or adventure is just a click away. Let’s make something awesome — together.
      </p>
    </div>
  );
};

export default AboutUs;
