import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center py-4 mt-10">
      <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Clariwise. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
