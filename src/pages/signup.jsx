import React from 'react';

function Signup() {
  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">Create Your Account</h2>
      <form className="space-y-4">
        <div>
          <label className="block mb-1 text-sm">Name</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Email address"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm">Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Choose a password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
