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
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      {/* Title */}
      <h1 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 mb-8 font-serif tracking-wide text-center px-4">
        Choose Your Stay
      </h1>

      {/* Flats and PGs Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full px-2 sm:px-4 max-w-xs sm:max-w-2xl mt-10">
        {/* Flats Option */}
        <div
          className="cursor-pointer transform hover:scale-105 transition-transform duration-300 bg-gray-100 shadow-lg rounded-lg p-4 sm:p-8 flex flex-col items-center hover:bg-blue-50"
          onClick={handleFlatsClick}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROQHLNkgUFmvUH_Knlvkus7KXF2kWdXu7E1A&s"
            alt="Flats Option"
            className="w-20 h-20 sm:w-32 sm:h-32 mb-4 rounded-full border-2 sm:border-4 border-blue-300"
          />
          <h2 className="text-base sm:text-xl font-semibold text-gray-800">Flats</h2>
          <p className="text-gray-500 mt-1 text-xs sm:text-sm">Find your ideal flat to rent</p>
        </div>

        {/* PGs Option */}
        <div
          className="cursor-pointer transform hover:scale-105 transition-transform duration-300 bg-gray-100 shadow-lg rounded-lg p-4 sm:p-8 flex flex-col items-center hover:bg-purple-50"
          onClick={handlePGsClick}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPATFHYgbFakeR3L8GFAXSjLh4TJ1xPiK_aA&s"
            alt="PGs Option"
            className="w-20 h-20 sm:w-32 sm:h-32 mb-4 rounded-full border-2 sm:border-4 border-purple-300"
          />
          <h2 className="text-base sm:text-xl font-semibold text-gray-800">PGs</h2>
          <p className="text-gray-500 mt-1 text-xs sm:text-sm">Find the perfect PG for you</p>
        </div>
      </div>
    </div>
  );
};

export default OptionsScreen;
