import React, { useState } from 'react';
import logo from '../assets/images/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10 top-0">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <img
              src= {logo} // Replace this with your logo URL
              alt="Logo"
              className="h-10 w-10 mr-2"
            />
            <span className="text-2xl font-bold text-black-500 font-custom">
              HARIOM PG
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-600 hover:text-blue-600 font-medium">
              Home
            </a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 font-medium">
              About
            </a>
            <a href="#services" className="text-gray-600 hover:text-blue-600 font-medium">
              Services
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 font-medium">
              Contact
            </a>
          </div>

          {/* Hamburger Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2">
            <a
              href="#home"
              className="block px-2 py-2 text-sm text-gray-600 hover:bg-gray-100"
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-2 py-2 text-sm text-gray-600 hover:bg-gray-100"
            >
              About
            </a>
            <a
              href="#services"
              className="block px-2 py-2 text-sm text-gray-600 hover:bg-gray-100"
            >
              Services
            </a>
            <a
              href="#contact"
              className="block px-2 py-2 text-sm text-gray-600 hover:bg-gray-100"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
