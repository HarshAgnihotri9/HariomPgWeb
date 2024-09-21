import React from 'react';

// FlatsScreen Component
const FlatsScreen = () => {
  // Render each flat in the JSON
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-12">Flats for Rent</h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {flats.map((flat) => (
          <div key={flat.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={flat.image}
              alt={flat.type}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800">{flat.type}</h2>
              <p className="text-xl text-blue-500 font-semibold mt-2">{flat.price}</p>
              <p className="text-gray-600 mt-4">{flat.description}</p>
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

// Custom JSON data
const flats = [
  {
    id: 1,
    type: "1 BHK",
    price: "₹12,000/month",
    description: "A cozy 1 BHK flat with modern amenities, perfect for singles or couples.",
    image: "https://tse3.mm.bing.net/th?id=OIP.ybpvb1H9oHmo9V6XgjwNHAHaFc&pid=Api&P=0&h=180",
  },
  {
    id: 2,
    type: "2 BHK",
    price: "₹20,000/month",
    description: "Spacious 2 BHK flat ideal for small families, with a beautiful balcony.",
    image: "https://i.pinimg.com/originals/f8/3e/01/f83e01c3ab8d10ce0300717a8cf416c7.jpg",
  },
  {
    id: 3,
    type: "3 BHK",
    price: "₹35,000/month",
    description: "Luxurious 3 BHK apartment with park view, best suited for medium-sized families.",
    image: "http://kirthikabuilders.com/3-bhk-flats-in-perungudi/images/floorplan1big.jpg",
  },
  {
    id: 4,
    type: "4 BHK",
    price: "₹50,000/month",
    description: "A lavish 4 BHK flat with premium facilities and ample space for large families.",
    image: "https://im.proptiger.com/2/2/7434020/89/614679.jpg?width=1336&height=768",
  },
  {
    id: 5,
    type: "1 RK",
    price: "₹8,000/month",
    description: "1 RK studio apartment, affordable and great for students or working professionals.",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
  },
];

export default FlatsScreen;
