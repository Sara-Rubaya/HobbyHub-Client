import React, { useContext } from 'react';

import { AuthContext } from '../Context/AuthContext';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        alert('Sign Out Successfully.');
      })
      .catch(error => {
        console.error(error);
      });
  };

  const links = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/allGroups">All Groups</NavLink></li>
      {user && (
        <>
          <li><NavLink to="/createGroup">Create Group</NavLink></li>
          <li><NavLink to="/myGroups">My Groups</NavLink></li>
          <li><NavLink to="/profile">Profile</NavLink></li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar  bg-base-100 shadow-sm px-10">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round"
                strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-10">
            {links}
          </ul>
        </div>
        <h1 className='text-2xl text-gray-700 font-bold'>HobbyHub</h1>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end gap-5">
        {user ? (
          <>
            <span className="text-sm ">{user.email}</span>
            <div className="dropdown dropdown-end ">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar tooltip mr-4 " data-tip={user.displayName}>
                <div className="w-10 rounded-full ml-2">
                  <img alt="User" src={user.photoURL || "/default-avatar.png"} />
                </div>
              </div>

              <Link to="/login">
              <button onClick={handleSignOut} >
                <a href="#_" class="inline-flex items-center px-6 py-2 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600">
                  Log Out
                 </a>
              </button>
              </Link>
            </div>
          </>
        ) : (
          <Link to="/login">
            <a href="#_" class="inline-flex items-center px-6 py-2 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600">
    Login
</a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;


