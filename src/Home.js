import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-blue-600">Clariwise</h1>
        <ul className="flex space-x-4 font-medium">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">Features</li>
          <li className="hover:text-blue-600 cursor-pointer">About</li>
        </ul>
      </nav>

      {/* Main Section */}
      <main className="flex flex-col items-center justify-center text-center py-20 px-4">
        <h2 className="text-4xl font-bold mb-4">Welcome to Clariwise!</h2>
        <p className="text-lg text-gray-600 max-w-xl mb-8">
          A collaborative learning platform where students share notes, form study groups, and challenge each other with quizzes — all in one place.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </main>
    </div>
  );
};

export default Home;
