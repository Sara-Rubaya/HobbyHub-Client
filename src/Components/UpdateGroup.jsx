import React, { useContext } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const UpdateGroup = () => {
    const { user } = useContext(AuthContext);
  const group = useLoaderData();
  const handleUpdateGroup = e =>{
    e.preventDefault();
    const groupName = e.target.groupName.value;
    const category = e.target.category.value;
    const description = e.target.description.value;
    const meetingLocation = e.target.meetingLocation.value;
    const maxMembers = e.target.maxMembers.value;
    const startDate= e.target.startDate.value;
    const imageUrl= e.target.imageUrl.value;
   
     const updatedGroup = {groupName, category, imageUrl,startDate, maxMembers, meetingLocation, description}
    console.log(updatedGroup);

    //update group info in the db
    fetch(`http://localhost:3000/groups/${group._id}`,{
      method: 'PUT',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(updatedGroup)
    })
    .then(res => res.json())
    .then(data => {
      console.log('after update', data)
    })
  }

  const categories = [
    'Drawing & Painting',
    'Photography',
    'Video Gaming',
    'Fishing',
    'Running',
    'Cooking',
    'Reading',
    'Writing',
  ];
  
  return (
    <div className="max-w-2xl mx-auto px-6 py-10 bg-white rounded shadow">
      <h2 className="text-3xl font-bold text-center mb-8">Update Group</h2>
      <form onSubmit={handleUpdateGroup} className="space-y-4">
        <input name="groupName" type="text" defaultValue={group.groupName} 
          placeholder="Group Name" className="input input-bordered w-full" required />

        <select name="category" defaultValue={group.category} 
          className="select select-bordered w-full" required>
          <option value="" disabled>Select Hobby Category</option>
          {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
        </select>

        <textarea name="description" defaultValue={group.description} 
          placeholder="Description" className="textarea textarea-bordered w-full" rows="3" required />

        <input name="meetingLocation" type="text" defaultValue={group.meetingLocation} 
          placeholder="Meeting Location" className="input input-bordered w-full" required />

        <input name="maxMembers" type="number" defaultValue={group.maxMembers} 
          placeholder="Max Members" className="input input-bordered w-full" required />

        <input name="startDate" type="date" defaultValue={group.startDate} 
        
          className="input input-bordered w-full" required />

        <input name="imageUrl" type="text" defaultValue={group.imageUrl} 
          placeholder="Image URL" className="input input-bordered w-full" required />

        <input type="text" value={user?.displayName || 'Anonymous'} readOnly className="input input-bordered w-full bg-gray-100" />
        <input type="email" value={user?.email} readOnly className="input input-bordered w-full bg-gray-100" />

        <button type="submit" className="btn btn-wide mx-auto bg-gray-700 text-white hover:bg-gray-800 ">
          Update Group
        </button>
      </form>
    </div>
  );
};
export default UpdateGroup;