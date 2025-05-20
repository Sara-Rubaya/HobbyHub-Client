import React from 'react';
import { Link } from 'react-router';


const Banner = () => {
  return (
    <div className="hero min-h-[80vh] bg-base-200 rounded-lg shadow-md my-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://i.ibb.co/r2t95NLr/Banner.webp"
          className=" rounded-lg shadow-2xl"
          alt="Group Activities"
        />
        <div>
          <h1 className="text-5xl font-bold text-gray-700">Connect Through Hobbies!</h1>
          <p className="py-6 text-gray-600">
            Join like-minded people, explore your passions, and create meaningful connections. Discover hobby groups, share your experiences, and grow together!
          </p>
          <Link to="/allGroups">
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
