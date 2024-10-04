import React, { useState } from 'react';
import logo from '/assets/images/logo.png';
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
    <nav className="bg-white shadow-md fixed w-full z-20 top-0 transition-transform duration-300">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" onClick={handleLinkClick}>
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 w-10 mr-2" />
            <span className="text-2xl font-bold text-black-500 font-custom">HARIOM PG</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
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
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Sliding Half-Screen Menu */}
      {isOpen && (
        <>
          {/* Overlay Background */}
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-30" onClick={closeMenu}></div>

          {/* Menu Items */}
          <div
            className={`fixed right-0 top-0 h-full w-3/4 bg-white z-40 text-black flex flex-col p-6 space-y-6 transform transition-transform duration-1000 ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            {/* Close Button */}
            <button onClick={closeMenu} className="text-gray-600 focus:outline-none absolute top-4 right-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Menu Links */}
            <div className="flex flex-col items-center justify-center h-full space-y-6">
              <Link
                to="/"
                onClick={handleLinkClick}
                className="w-full text-2xl font-bold text-center border-b border-gray-300 py-4 hover:text-blue-500 transition-colors duration-300 font-montserrat"
              >
                Home
              </Link>
              <Link
                to="/About"
                onClick={handleLinkClick}
                className="w-full text-2xl font-bold text-center border-b border-gray-300 py-4 hover:text-blue-500 transition-colors duration-300 font-montserrat"
              >
                About
              </Link>
              <Link
                to="/Services"
                onClick={handleLinkClick}
                className="w-full text-2xl font-bold text-center border-b border-gray-300 py-4 hover:text-blue-500 transition-colors duration-300 font-montserrat"
              >
                Services
              </Link>
              <Link
                to="/contact"
                onClick={handleLinkClick}
                className="w-full text-2xl font-bold text-center border-b border-gray-300 py-4 hover:text-blue-500 transition-colors duration-300 font-montserrat"
              >
                Contact
              </Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
