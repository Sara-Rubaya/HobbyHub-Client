import React, { useEffect, useState, useContext } from "react";



import { useNavigate, useParams } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";

const UpdateGroup = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [group, setGroup] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    groupName: "",
    category: "",
    description: "",
    imageUrl: "",
    meetingLocation: "",
    startDate: "",
    maxMembers: ""
  });

  useEffect(() => {
    const fetchGroup = async () => {
      try {
        const res = await fetch(`http://localhost:3000/groups/${id}`);
        const data = await res.json();
        setGroup(data);
        setFormData({
          groupName: data.groupName || "",
          category: data.category || "",
          description: data.description || "",
          imageUrl: data.imageUrl || "",
          meetingLocation: data.meetingLocation || "",
          startDate: data.startDate || "",
          maxMembers: data.maxMembers || ""
        });
      } catch (err) {
        console.error("Failed to load group", err);
      } finally {
        setLoading(false);
      }
    };

    fetchGroup();
  }, [id]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

const handleUpdate = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch(`http://localhost:3000/groups/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    const result = await res.json();
    if (result.success) {
      toast.success("Group updated successfully!");
      navigate("/myGroups");
    } else {
      toast.error(result.message || "Update failed");
    }
  } catch (err) {
    console.error(err);
    toast.error("Something went wrong.");
  }
};


  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (!group) return <div className="text-center mt-10 text-red-600">Group not found</div>;

  return (
    <section className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-700 mb-6">Update Group</h1>
      <form onSubmit={handleUpdate} className="space-y-5">
        <input type="text" name="groupName" value={formData.groupName} onChange={handleChange} placeholder="Group Name" className="input input-bordered w-full" required />
        <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="Category" className="input input-bordered w-full" required />
        <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="textarea textarea-bordered w-full" required />
        <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} placeholder="Image URL" className="input input-bordered w-full" />
        <input type="text" name="meetingLocation" value={formData.meetingLocation} onChange={handleChange} placeholder="Meeting Location" className="input input-bordered w-full" required />
        <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} className="input input-bordered w-full" required />
        <input type="number" name="maxMembers" value={formData.maxMembers} onChange={handleChange} placeholder="Max Members" className="input input-bordered w-full" required />

        <input type="text" value={user.displayName} readOnly className="input input-bordered w-full bg-gray-100" />
        <input type="email" value={user.email} readOnly className="input input-bordered w-full bg-gray-100" />

        <button type="submit" className="btn btn-primary bg-gray-800 hover:bg-gray-700 text-white w-full">
          Update Group
        </button>
      </form>
    </section>
  );
};

export default UpdateGroup;
