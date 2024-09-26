import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Us Section */}
        <div>
          {/* Uncomment this section if needed */}
          {/* <h2 className="text-2xl font-bold mb-4">About Hariom PG</h2>
          <p className="text-gray-300 leading-relaxed">
            Hariom PG offers comfortable and affordable living spaces with top-notch facilities to make you feel right at home. Our PGs are located in prime locations, providing easy access to transportation, schools, and offices.
          </p> */}
        </div>

        {/* Quick Links Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-green-400 transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/About" className="hover:text-green-400 transition-colors">About Us</Link>
            </li>
            <li>
              <Link to="/Services" className="hover:text-green-400 transition-colors">Facilities</Link>
            </li>
            <li>
              <Link to="/Pgs" className="hover:text-green-400 transition-colors">Rooms</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-green-400 transition-colors">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Contact Information Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-300 leading-relaxed mb-2">
            <strong>Phone:</strong> +91 90845 53059
          </p>
          <p className="text-gray-300 leading-relaxed mb-2 break-words">
            <strong>Email:</strong> hariompganddguesthouse@hariompg.com
          </p>
          <p className="text-gray-300 leading-relaxed mb-2 break-words">
            <strong>Address:</strong> Hariom PG, Sector 14, Shahdara, Gali Number 35
          </p>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center">
        <p className="text-gray-500 text-sm">
          &copy; 2024 Hariom PG. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          {/* Social Media Links */}
          <Link to="#" className="text-gray-400 hover:text-green-400 transition-colors">
            <i className="fab fa-facebook-f"></i> Facebook
          </Link>
          <Link to="#" className="text-gray-400 hover:text-green-400 transition-colors">
            <i className="fab fa-instagram"></i> Instagram
          </Link>
          <Link to="#" className="text-gray-400 hover:text-green-400 transition-colors">
            <i className="fab fa-twitter"></i> Twitter
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
