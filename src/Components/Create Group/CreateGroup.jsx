import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';


const CreateGroup = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    groupName: '',
    category: '',
    description: '',
    meetingLocation: '',
    maxMembers: '',
    startDate: '',
    imageUrl: '',
  });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const groupData = {
      ...formData,
      userName: user?.displayName || 'Anonymous',
      userEmail: user?.email,
    };

    try {
      const res = await fetch('https://hobby-hub-server-rho.vercel.app/groups', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(groupData),
      });

      const result = await res.json();
      if (result.insertedId) {
        alert('Group created successfully!');
        setFormData({
          groupName: '',
          category: '',
          description: '',
          meetingLocation: '',
          maxMembers: '',
          startDate: '',
          imageUrl: '',
        });
      } else {
        alert('Failed to create group.');
      }
    } catch (error) {
      console.error('Error creating group:', error);
      alert('Something went wrong!');
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-6 my-10 py-10  rounded shadow">
      <h2 className="text-3xl font-bold text-center mb-8">Create a New Group</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="groupName" type="text" value={formData.groupName} onChange={handleChange}
          placeholder="Group Name" className="input input-bordered w-full" required />

        <select name="category" value={formData.category} onChange={handleChange}
          className="select select-bordered w-full" required>
          <option value="" disabled>Select Hobby Category</option>
          {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
        </select>

        <textarea name="description" value={formData.description} onChange={handleChange}
          placeholder="Description" className="textarea textarea-bordered w-full" rows="3" required />

        <input name="meetingLocation" type="text" value={formData.meetingLocation} onChange={handleChange}
          placeholder="Meeting Location" className="input input-bordered w-full" required />

        <input name="maxMembers" type="number" value={formData.maxMembers} onChange={handleChange}
          placeholder="Max Members" className="input input-bordered w-full" required />

        <input name="startDate" type="date" value={formData.startDate} onChange={handleChange}
          className="input input-bordered w-full" required />

        <input name="imageUrl" type="text" value={formData.imageUrl} onChange={handleChange}
          placeholder="Image URL" className="input input-bordered w-full" required />

        <input type="text" value={user?.displayName || 'Anonymous'} readOnly className="input input-bordered w-full bg-base-100" />
        <input type="email" value={user?.email} readOnly className="input input-bordered w-full bg-base-100" />

        <button type="submit" className="btn btn-wide ml-44 mx-auto bg-blue-700 text-white hover:bg-blue-900 ">
          Create Group
        </button>
      </form>
    </div>
  );
};

export default CreateGroup;
