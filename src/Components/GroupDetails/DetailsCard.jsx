import React from 'react';
import Swal from 'sweetalert2';

const DetailsCard = ({ group }) => {
  const { imageUrl, groupName, category, description, maxMembers, startDate, userName, userEmail } = group;

  const handleJoin = () => {
    Swal.fire({
      title: 'Success!',
      text: 'You have joined the group.',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  };

  return (
    <div >
        <h1 className='text-4xl text-gray-600 mt-5 text-center  font-bold '>Group Details</h1>
        <div className="card bg-base-100  w-1/3 my-10 mx-auto shadow-sm">
      <figure>
        <img className="h-55 w-full" src={imageUrl} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{groupName}</h2>
        <h3><strong>Category:</strong> {category}</h3>
        <p><strong>Description:</strong> {description}</p>
        <p><strong>Max members:</strong> {maxMembers}</p>
        <p><strong>Start Date:</strong> {startDate}</p>
        <p><strong>User Name:</strong> {userName}</p>
        <p><strong>user Email:</strong> {userEmail}</p>
        <div className="card-actions justify-center">
          <button onClick={handleJoin} className="btn w-full btn-primary">Join</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default DetailsCard;
