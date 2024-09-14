import React, { useState } from 'react';

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    roomType: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <div className="bg-white-100 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white-200 rounded-lg shadow-2xl p-8 w-full max-w-5xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Enquire for a PG Room</h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-8">
          {/* Full Name */}
          <div className="col-span-1">
            <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email */}
          <div className="col-span-1">
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="col-span-1">
            <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Room Type */}
          <div className="col-span-1">
            <label className="block text-gray-700 font-semibold mb-2">Room Type</label>
            <select
              name="roomType"
              value={formData.roomType}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select room type</option>
              <option value="single">Single Room</option>
              <option value="shared">Double Sharing Room</option>
              <option value="shared">triple Sharing Room</option>
              <option value="shared">Four Sharing Room</option>


            </select>
          </div>

          {/* Message */}
          <div className="col-span-2">
            <label className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Any specific requirements or queries"
              rows="4"
            />
          </div>

          {/* Submit Button */}
          <div className="col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
            >
              Submit Enquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;
