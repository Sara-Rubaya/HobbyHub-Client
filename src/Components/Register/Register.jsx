import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import { updateProfile } from 'firebase/auth';

const Register = () => {
  const { createUser } = useContext(AuthContext); // ✅ useContext, not use()
  const navigate = useNavigate();

  const handleRegister = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photo.value;
    const password = e.target.password.value;

    // Password validation
    if (!/[A-Z]/.test(password)) return alert("Password must contain at least one uppercase letter.");
    if (!/[a-z]/.test(password)) return alert("Password must contain at least one lowercase letter.");
    if (password.length < 6) return alert("Password must be at least 6 characters long.");

    createUser(email, password)
      .then(result => {
        return updateProfile(result.user, {
          displayName: name,
          photoURL: photoURL || "https://i.ibb.co/QvYYmvrC/default-avatar-profile-icon-of-social-media-user-vector.jpg"
        });
      })
      .then(() => {
        alert("Profile registered successfully!");
        navigate('/');
      })
      .catch(error => {
        console.error(error);
        alert(error.message);
      });
  };

  return (
    <div className='bg-base-300 h-screen flex justify-center items-center overflow-hidden'>
      <div className="card bg-base-100 mx-auto w-full max-w-sm shadow-2xl">
        <h1 className="text-5xl mx-auto pt-5 font-bold">Register now!</h1>
        <div className="card-body">
          <form onSubmit={handleRegister} className="fieldset">
            <label className="label">Name</label>
            <input type="text" name='name' className="input" placeholder="Name" required />

            <label className="label">Photo URL</label>
            <input type="text" name='photo' className="input" placeholder="Photo URL (optional)" />

            <label className="label">Email</label>
            <input type="email" name='email' className="input" placeholder="Email" required />

            <label className="label">Password</label>
            <input type="password" name='password' className="input" placeholder="Password" required />

            <p>
              <input type="checkbox" defaultChecked className="checkbox checkbox-xs" /> Remember me.
            </p>

            <button className="btn btn-neutral mt-4">Register</button>
            <p>Already have an account? <Link className='text-green-600 underline' to="/login">Login</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
