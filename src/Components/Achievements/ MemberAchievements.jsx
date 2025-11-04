import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaMedal, FaStar, FaHeart } from "react-icons/fa";

const mockAchievements = [
  {
    name: "Ava Martinez",
    email: "ava@example.com",
    photo: "https://i.ibb.co/wZMXy6N0/150.jpg",
    group: "Lens Lovers",
    badge: "Top Contributor",
    icon: <FaStar className="text-yellow-400 text-xl" />,
    description: "Posted 30+ tips and guided 5 new members."
  },
  {
    name: "Liam Chen",
    email: "liam@example.com",
    photo: "https://i.ibb.co/LXwHPQKW/151.jpg",
    group: "Brush & Blend",
    badge: "Most Helpful",
    icon: <FaHeart className="text-pink-500 text-xl" />,
    description: "Helped resolve 20+ questions in discussions."
  },
  {
    name: "Noah Ahmed",
    email: "noah@example.com",
    photo: "https://i.ibb.co/Y7HgMRLn/avatar-placeholder-generator-500x500.webp",
    group: "Urban Striders",
    badge: "Group Veteran",
    icon: <FaMedal className="text-blue-400 text-xl" />,
    description: "Member since 2021, attended 50+ meetups."
  }
];

const MemberAchievements = () => {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 800, once: true });
    setAchievements(mockAchievements);
  }, []);

  return (
    <section className="max-w-5xl mx-auto py-10 px-4">
      <h2 className="text-5xl font-bold text-center text-blue-600 mb-12 my-20">🏆 Member Achievements</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {achievements.map((member, i) => (
          <div
            key={i}
            data-aos="fade-up"
            className="bg-blue-300 shadow-md rounded-2xl p-6 flex flex-col items-center text-center"
          >
            <img
              src={member.photo}
              alt={member.name}
              className="w-20 h-20 rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{member.group}</p>
            <div className="flex items-center gap-2 text-lg font-medium text-gray-700 mb-2">
              {member.icon} {member.badge}
            </div>
            <p className="text-sm text-gray-600">{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MemberAchievements;
