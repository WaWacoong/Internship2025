import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center text-gray-300">
          © {currentYear} Created by Montiwa Boonkum
        </div>
      </div>
    </footer>
  );
};

export default Footer;