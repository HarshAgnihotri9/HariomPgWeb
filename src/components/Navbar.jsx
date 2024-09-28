import React, { useState } from 'react';
<<<<<<< HEAD
import logo from '/assets/images/logo.png';
=======
import logo from '/public/assets/images/logo.png';
>>>>>>> 82b3bfa
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Toggle mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false); // Close mobile menu
  };

  const handleLinkClick = () => {
    closeMenu(); // Close the mobile menu
    window.scrollTo(0, 0); // Directly scroll to the top
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-10 top-0 transition-transform duration-300 z-20">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
            <Link to="/" onClick={handleLinkClick}>
          <div className="flex items-center">
              <img src={logo} alt="Logo" className="h-10 w-10 mr-2" />
            <span className="text-2xl font-bold text-black-500 font-custom">
              HARIOM PG
            </span>
          </div>
            </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium" onClick={handleLinkClick}>
              Home
            </Link>
            <Link to="/About" className="text-gray-600 hover:text-blue-600 font-medium" onClick={handleLinkClick}>
              About
            </Link>
            <Link to="/Services" className="text-gray-600 hover:text-blue-600 font-medium" onClick={handleLinkClick}>
              Services
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600 font-medium" onClick={handleLinkClick}>
              Contact
            </Link>
          </div>

          {/* Hamburger Menu Icon for Mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="mt-3 space-y-2">
            <Link to="/" className="block text-gray-600 hover:text-blue-600 font-medium" onClick={handleLinkClick}>
              Home
            </Link>
            <Link to="/About" className="block text-gray-600 hover:text-blue-600 font-medium" onClick={handleLinkClick}>
              About
            </Link>
            <Link to="/Services" className="block text-gray-600 hover:text-blue-600 font-medium" onClick={handleLinkClick}>
              Services
            </Link>
            <Link to="/contact" className="block text-gray-600 hover:text-blue-600 font-medium" onClick={handleLinkClick}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
