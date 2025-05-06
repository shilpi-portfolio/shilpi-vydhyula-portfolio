
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-theme-dark-gray text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-semibold">Shilpi Vydhyula</h3>
            <p className="text-gray-300 mt-1">Senior Technical Specialist</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-300">© {currentYear} Shilpi Vydhyula. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
