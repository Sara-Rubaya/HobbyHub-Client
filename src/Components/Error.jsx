import React from 'react';
import errorImg from '../assets/lottie/error.json'
import Lottie from 'lottie-react';
import { Link } from 'react-router';

const Error = ({ message = "An error occurred." }) => {
    return (
       <div className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-base-100">
         <Lottie animationData={errorImg} className='w-90  pb-5' loop={true}></Lottie>
        <div style={{ padding: 20, color: 'red', textAlign: 'center' }}>
      <h2>Error</h2>
      <p>{message}</p>
      <Link to="/" className="btn bg-red-600">
        Back to Home
      </Link>
      
    </div>
       </div>
    );
};

export default Error;