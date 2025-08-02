import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/">Clariwise</Link>
        </h1>

        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:underline">Home</Link>
          </li>
          <li>
            <Link to="/features" className="hover:underline">Features</Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline">About</Link>
          </li>
          <li>
            <Link to="/login" className="hover:underline">Login</Link>
          </li>
          <li>
            <Link to="/signup" className="hover:underline">Signup</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
