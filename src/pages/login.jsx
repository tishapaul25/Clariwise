import React from 'react';

function Login() {
  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">Login to Clariwise</h2>
      <form className="space-y-4">
        <div>
          <label className="block mb-1 text-sm">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm">Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
