import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const GroupCard = ({ group, groups, setGroups }) => {
  const { _id, imageUrl, groupName, category, description, maxMembers } = group;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://hobby-hub-server-rho.vercel.app/groups/${_id}`, { method: 'DELETE' })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your group has been deleted.",
                icon: "success"
              });
              const remainingGroups = groups.filter(grp => grp._id !== _id);
              setGroups(remainingGroups);
            }
          });
      }
    });
  };

  return (
    <div className="card bg-base-100 w-96 shadow-sm hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 transition-all duration-300">
      <figure>
        <img className="h-55 w-full object-cover" src={imageUrl} alt={groupName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{groupName}</h2>
        <h3><strong>Category:</strong> {category}</h3>
        <p><strong>Description:</strong> {description}</p>
        <p><strong>Max members:</strong> {maxMembers}</p>
        <div className="card-actions mx-auto pt-4">
  <div className="join gap-3">
    <Link to={`/group/${_id}`}>
      <button className="btn join-item bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 transition">
        View
      </button>
    </Link>
    <Link to={`/updateGroup/${_id}`}>
      <button className="btn join-item bg-green-400 text-white hover:bg-green-600 active:bg-green-700 transition">
        Edit
      </button>
    </Link>
    <button
      onClick={() => handleDelete(_id)}
      className="btn join-item bg-red-500 text-white hover:bg-red-600 active:bg-red-700 transition"
    >
      Delete
    </button>
  </div>
</div>

      </div>
    </div>
  );
};

export default GroupCard;
