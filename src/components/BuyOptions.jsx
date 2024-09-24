import React from 'react';

const BuyOptions = () => {
  return (
    <div className="min-h-screen bg-white-100 flex flex-col items-center justify-center py-8 px-4">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-8 font-serif tracking-wide text-center">
        Choose Your Property Type For Purchase
      </h1>

      {/* Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4 md:px-8">
        {/* Card 1: Buy Flats */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <img
            src="https://img.staticmb.com/mbimages/project/Photo_h0_w320/Project-Photo-49-Paras-Tierea-Noida-5000558_1296_976_0_320.JPEG"
            alt="Buy Flats"
            className="w-full h-40 sm:h-48 md:h-56 object-cover"
          />
          <div className="p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Buy Flats</h2>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              Discover modern flats for sale in premium locations.
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Card 2: Buy Villas and Kothis */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Buy Villas and Kothis"
            className="w-full h-40 sm:h-48 md:h-56 object-cover"
          />
          <div className="p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Buy Villas & Kothis</h2>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              Find spacious and luxurious villas and kothis for your family.
            </p>
            <button className="mt-4 px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Card 3: Buy Land */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.Cz-8T5Qijql2ek5oyUG1yQHaEK&pid=Api&P=0&h=180"
            alt="Buy Land"
            className="w-full h-40 sm:h-48 md:h-56 object-cover"
          />
          <div className="p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Buy Land</h2>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              Explore open plots and land for your dream project.
            </p>
            <button className="mt-4 px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyOptions;
