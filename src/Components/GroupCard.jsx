import React  from 'react';
import { Link } from 'react-router';

const GroupCard = ({group}) => {

    const {imageUrl, groupName, category, description, maxMembers } = group;

    return (
       <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img className='h-55 w-full'
      src={imageUrl}
      alt="" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{groupName}</h2>
    <h3><strong>Category:</strong> {category}</h3>
    <p><strong>Description:</strong> {description}</p>
    <p><strong>Max members:</strong> {maxMembers}</p>
    <div className="card-actions justify-end">
      <Link  to={`/group/${group._id}`}><button className="btn btn-primary">Details</button></Link>
    </div>
  </div>

   
       
</div>
    );
};

export default GroupCard;