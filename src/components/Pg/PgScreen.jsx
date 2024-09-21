import React from 'react';

// PGScreen Component
const PGScreen = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-12">PGs for Rent</h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {pgs.map((pg) => (
          <div key={pg.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={pg.image}
              alt={pg.type}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800">{pg.type}</h2>
              <p className="text-xl text-blue-500 font-semibold mt-2">{pg.price}</p>
              <p className="text-gray-600 mt-4">{pg.description}</p>
              <button className="mt-6 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300">
                Contact for Rent
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Custom JSON data for PGs
const pgs = [
  {
    id: 1,
    type: "Double Sharing",
    price: "₹8,000/month",
    description: "Comfortable double sharing PG with modern amenities and ample space.",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
  },
  {
    id: 2,
    type: "Triple Sharing",
    price: "₹6,000/month",
    description: "Affordable triple sharing PG perfect for students and working professionals.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    id: 3,
    type: "4 Sharing",
    price: "₹5,000/month",
    description: "Spacious 4 sharing PG with great facilities and large common areas.",
    image: "https://images.unsplash.com/photo-1494172961521-33799ddd43a5",
  },
  {
    id: 4,
    type: "Double Sharing",
    price: "₹7,500/month",
    description: "Cozy double sharing PG in a prime location, with AC and Wi-Fi.",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
  },
  {
    id: 5,
    type: "Triple Sharing",
    price: "₹5,500/month",
    description: "Budget-friendly triple sharing PG with all basic amenities.",
    image: "https://tse1.mm.bing.net/th?id=OIP.peMR4uUWhDqFieJNP-oYwgHaFj&pid=Api&P=0&h=180",
  },
  {
    id: 6,
    type: "4 Sharing",
    price: "₹4,500/month",
    description: "Large 4 sharing PG with a common kitchen and study area.",
    image: "https://tse3.mm.bing.net/th?id=OIP.CC8flUCFUhcxfYV_FC7p2wHaFj&pid=Api&P=0&h=180",
  },
  {
    id: 7,
    type: "Double Sharing",
    price: "₹8,500/month",
    description: "Premium double sharing PG with meals included and high-speed internet.",
    image: "https://tse3.mm.bing.net/th?id=OIP.XJLi60ICJaxNmzaeC8dKqAHaFj&pid=Api&P=0&h=1809",
  },
];

export default PGScreen;
