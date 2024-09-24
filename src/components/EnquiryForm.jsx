import React, { useState } from 'react';

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    propertyType: '',
    roomOrBhkType: '',
    message: '',
  });

  // Update form data on input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  // Dynamically render room/BHK options based on selected property type
  const renderRoomOrBhkOptions = () => {
    switch (formData.propertyType) {
      case 'flats':
        return (
          <div className="col-span-2">
            <label className="block text-gray-700 font-semibold mb-2">BHK Type</label>
            <select
              name="roomOrBhkType"
              value={formData.roomOrBhkType}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            >
              <option value="">Select BHK type</option>
              <option value="1BHK">1 BHK</option>
              <option value="2BHK">2 BHK</option>
              <option value="3BHK">3 BHK</option>
              <option value="4BHK">4 BHK</option>
            </select>
          </div>
        );
      case 'pgs':
        return (
          <div className="col-span-2">
            <label className="block text-gray-700 font-semibold mb-2">Sharing Type</label>
            <select
              name="roomOrBhkType"
              value={formData.roomOrBhkType}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            >
              <option value="">Select sharing type</option>
              <option value="single">Single Room</option>
              <option value="double">Double Sharing</option>
              <option value="triple">Triple Sharing</option>
              <option value="four">Four Sharing</option>
            </select>
          </div>
        );
      default:
        return null; // No additional fields for "Land"
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-6">
      <div className="bg-gray-50 rounded-lg shadow-lg p-8 w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Enquiry Form</h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
          {/* Full Name */}
          <div className="col-span-2">
            <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="col-span-2">
            <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Property Type */}
          <div className="col-span-2">
            <label className="block text-gray-700 font-semibold mb-2">Looking For</label>
            <select
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            >
              <option value="">Select a property type</option>
              <option value="land">Searching Land</option>
              <option value="flats">Searching Flats (Buy/Rent)</option>
              <option value="pgs">Searching PG</option>
            </select>
          </div>

          {/* Dynamic Room/BHK Type */}
          {renderRoomOrBhkOptions()}

          {/* Message */}
          <div className="col-span-2">
            <label className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
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
