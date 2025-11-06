import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => alert('Sign Out Successfully.'))
      .catch(err => console.error(err));
  };

  const handleToggle = (e) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-blue-800 font-bold px-4 py-2 rounded-md transition duration-200 ${
              isActive ? "bg-blue-500 text-white" : "hover:bg-blue-500 hover:text-white"
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/aboutUs"
          className={({ isActive }) =>
            `text-blue-800 font-bold px-4 py-2 rounded-md transition duration-200 ${
              isActive ? "bg-blue-500 text-white" : "hover:bg-blue-500 hover:text-white"
            }`
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-groups"
          className={({ isActive }) =>
            `text-blue-800 font-bold px-4 py-2 rounded-md transition duration-200 ${
              isActive ? "bg-blue-500 text-white" : "hover:bg-blue-500 hover:text-white"
            }`
          }
        >
          All Groups
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/createGroup"
              className={({ isActive }) =>
                `text-blue-800 font-bold px-4 py-2 rounded-md transition duration-200 ${
                  isActive ? "bg-blue-500 text-white" : "hover:bg-blue-500 hover:text-white"
                }`
              }
            >
              Create Group
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myGroups"
              className={({ isActive }) =>
                `text-blue-800 font-bold px-4 py-2 rounded-md transition duration-200 ${
                  isActive ? "bg-blue-500 text-white" : "hover:bg-blue-500 hover:text-white"
                }`
              }
            >
              My Groups
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm px-6 fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-opacity-90">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-10"
          >
            {links}
          </ul>
        </div>
        <h1 className="text-3xl text-blue-700 font-bold">
          Hobby<span className="text-blue-400">Hub</span>
        </h1>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex items-center gap-3">
        {user ? (
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <div className="relative group">
              <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="User"
                    src={
                      user.photoURL ||
                      "https://i.ibb.co/QvYYmvrC/default-avatar-profile-icon-of-social-media-user-vector.jpg"
                    }
                  />
                </div>
              </div>
              {/* Name on hover */}
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-white shadow rounded-md text-blue-800 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                {user.displayName || user.email}
              </div>
            </div>

            <span className="text-base text-blue-800 hidden md:inline">{user.email}</span>

            <button
              onClick={handleSignOut}
              className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-400"
            >
              Log Out
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="inline-flex items-center px-5 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-400"
          >
            Login
          </Link>
        )}

        {/* Custom Theme toggle */}
        <label className="swap swap-rotate">
          <input
            type="checkbox"
            className="theme-controller"
            onChange={handleToggle}
            checked={theme === "dark"}
          />

          {/* Sun icon */}
          <svg
            className="swap-off h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
            />
          </svg>

          {/* Moon icon */}
          <svg
            className="swap-on h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
