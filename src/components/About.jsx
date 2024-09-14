import React from 'react';
import logo from '../assets/images/hariom.jpg'

const AboutHariomPG = () => {
  return (
    <div className="bg-white-100 py-16 mt-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Side - Text */}
        <div className="md:w-1/2 text-left px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-black-600 leading-tight mb-4 font-serif">
            Welcome to Hariom PG
          </h1>
          <p className="text-gray-700 text-lg md:text-xl font-light font-sans">
            Discover a peaceful and cozy place where comfort meets convenience. Hariom PG offers fully furnished rooms and modern amenities to make your stay comfortable and stress-free.
          </p>
          <p className="mt-4 text-gray-700 text-lg md:text-xl font-light font-sans">
            Enjoy a friendly atmosphere and top-notch services in the heart of the city. Whether you are here to work or study, Hariom PG is your ideal home away from home.
          </p>
          <button className="mt-6 px-6 py-3 bg-sky-500 text-black font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            Learn More
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/3 mt-8 md:mt-0 px-6 mr-24">
          <img
            src={logo} // Replace this with an actual image URL of the PG
            alt="Hariom PG"
            className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition duration-300 mr-48 "
          />
        </div>
      </div>
    </div>
  );
};

export default AboutHariomPG;
