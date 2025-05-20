import React from 'react';
import { Link } from 'react-router';


const Banner = () => {
  return (
    <div className="hero min-h-[80vh] bg-base-200 rounded-lg shadow-md mt-5">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://img.freepik.com/free-vector/group-people-teamwork-concept_23-2148821805.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
          alt="Group Activities"
        />
        <div>
          <h1 className="text-5xl font-bold text-gray-700">Connect Through Hobbies!</h1>
          <p className="py-6 text-gray-600">
            Join like-minded people, explore your passions, and create meaningful connections. Discover hobby groups, share your experiences, and grow together!
          </p>
          <Link to="/groups">
            <button className="btn btn-primary bg-gray-700 hover:bg-gray-800 text-white">
              Explore Groups
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
