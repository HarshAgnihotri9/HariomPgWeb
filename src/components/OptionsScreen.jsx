import React from 'react';
import { useNavigate } from 'react-router-dom';

const OptionsScreen = () => {
  const navigate = useNavigate();

  const handleFlatsClick = () => {
    navigate('/Flats');
  };

  const handlePGsClick = () => {
    navigate('/Pgs');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 px-4 md:px-8 lg:px-16">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-8 font-serif tracking-wide text-center animate-fade-in">
        Choose Your Perfect Stay
      </h1>

      {/* Flats and PGs Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 w-full max-w-5xl mt-8 animate-slide-up">
        {/* Flats Option */}
        <div
          className="cursor-pointer transform hover:scale-110 transition-transform duration-500 bg-white shadow-xl rounded-lg p-8 flex flex-col items-center hover:bg-blue-100 group"
          onClick={handleFlatsClick}
        >
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 mb-6">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROQHLNkgUFmvUH_Knlvkus7KXF2kWdXu7E1A&s"
              alt="Flats Option"
              className="w-full h-full object-cover rounded-full border-4 border-blue-400 group-hover:shadow-lg transition-shadow duration-500"
            />
            {/* Icon Animation */}
            <div className="absolute inset-0 bg-blue-200 opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-500"></div>
          </div>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">Flats</h2>
          <p className="text-gray-500 mt-2 text-sm sm:text-base text-center group-hover:text-blue-500 transition-colors duration-300">
            Discover beautiful flats for rent
          </p>
        </div>

        {/* PGs Option */}
        <div
          className="cursor-pointer transform hover:scale-110 transition-transform duration-500 bg-white shadow-xl rounded-lg p-8 flex flex-col items-center hover:bg-purple-100 group"
          onClick={handlePGsClick}
        >
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 mb-6">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPATFHYgbFakeR3L8GFAXSjLh4TJ1xPiK_aA&s"
              alt="PGs Option"
              className="w-full h-full object-cover rounded-full border-4 border-purple-400 group-hover:shadow-lg transition-shadow duration-500"
            />
            {/* Icon Animation */}
            <div className="absolute inset-0 bg-purple-200 opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-500"></div>
          </div>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">PGs</h2>
          <p className="text-gray-500 mt-2 text-sm sm:text-base text-center group-hover:text-purple-500 transition-colors duration-300">
            Find comfortable PG accommodations
          </p>
        </div>
      </div>
    </div>
  );
};

export default OptionsScreen;
