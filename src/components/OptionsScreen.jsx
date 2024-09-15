import React from 'react';

const OptionsScreen = () => {
  const handleFlatsClick = () => {
    console.log('Flats option selected');
    // Navigate or handle Flats selection logic
  };

  const handlePGsClick = () => {
    console.log('PGs option selected');
    // Navigate or handle PGs selection logic
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-12 font-serif tracking-wide">
        Choose Your Stay
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Flats Option */}
        <div
          className="cursor-pointer transform hover:scale-105 transition-transform duration-300 bg-gray-100 shadow-xl rounded-lg p-10 flex flex-col items-center hover:bg-blue-50"
          onClick={handleFlatsClick}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROQHLNkgUFmvUH_Knlvkus7KXF2kWdXu7E1A&s"
            alt="Flats Option"
            className="w-40 h-40 mb-6 rounded-full border-4 border-blue-300"
          />
          <h2 className="text-2xl font-semibold text-gray-800">Flats</h2>
          <p className="text-gray-500 mt-2">Find your ideal flat to rent</p>
        </div>

        {/* PGs Option */}
        <div
          className="cursor-pointer transform hover:scale-105 transition-transform duration-300 bg-gray-100 shadow-xl rounded-lg p-10 flex flex-col items-center hover:bg-purple-50"
          onClick={handlePGsClick}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPATFHYgbFakeR3L8GFAXSjLh4TJ1xPiK_aA&s"
            alt="PGs Option"
            className="w-40 h-40 mb-6 rounded-full border-4 border-purple-300"
          />
          <h2 className="text-2xl font-semibold text-gray-800">PGs</h2>
          <p className="text-gray-500 mt-2">Find the perfect PG for you</p>
        </div>
      </div>

      {/* <button
        className="mt-12 px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
      >
        Explore More
      </button> */}
    </div>
  );
};

export default OptionsScreen;
