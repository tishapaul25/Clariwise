import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Features from './pages/Features';
import About from './pages/About';
import signup from './pages/signup';
import login from './pages/login';



function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow px-6 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<login />} />
            <Route path="/signup" element={<signup />} />

          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
