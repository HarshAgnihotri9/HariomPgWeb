import React, { useEffect } from 'react';
import OptionsScreen from './OptionsScreen';
import Facilities from './Facilities';
import EnquiryForm from './EnquiryForm';
import Footer from './Footer';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import BuyOptions from './BuyOptions';

const AboutHariomPG = () => {
  const navigate = useNavigate();
  const handleLearnMore = () => {
    navigate('/LearnMore');
  };


  return (
    <>
      <Navbar />
      <div
        className="bg-cover bg-center h-screen flex items-center justify-center relative"
        style={{
          backgroundImage: `url('https://rook.gumlet.io/uploads/center/cover_photo/64c7c1e40fe9100001f8e41f/7___2024_07_09T175023.678.jpg?format=webp&h=auto&compress=true&ar=1')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container mx-auto flex flex-col items-center justify-center relative z-10">
          {/* Text Section */}
          <div className="text-center px-4 sm:px-6 md:w-3/4 lg:w-2/3 mt-16 md:mt-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4 font-serif animate-fade-in">
              Welcome to Hariom PG
            </h1>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl font-light font-sans animate-fade-in">
              Discover a peaceful and cozy place where comfort meets convenience. Hariom PG offers fully furnished rooms and modern amenities to make your stay comfortable and stress-free.
            </p>
            <p className="mt-4 text-gray-300 text-base sm:text-lg md:text-xl font-light font-sans animate-fade-in">
              Enjoy a friendly atmosphere and top-notch services in the heart of the city. Whether you are here to work or study, Hariom PG is your ideal home away from home.
            </p>
            <button
              className="mt-6 px-6 py-3 bg-sky-500 text-white font-semibold rounded-lg shadow-md hover:bg-sky-700 hover:shadow-xl transition-transform transform hover:scale-105 duration-300"
              onClick={handleLearnMore}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Other sections */}
      <OptionsScreen />
      <BuyOptions />
      {/* <PGList /> */}
      <Facilities />
      <EnquiryForm />
      {/* <Footer /> */}
    </>
  );
};

export default AboutHariomPG;
