import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    propertyType: '',
    roomOrBhkType: '',
  });

  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  // Update form data on input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset error state
    setSuccessMessage(''); // Reset success message

    try {
      const response = await fetch('https://backend-production-b2d6.up.railway.app/api/user/EnquiryDetails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setSuccessMessage('Message sent successfully!');
      alert("Thank you for sending us message. We will get you back");

      // Reset the form
      setFormData({
        fullName: '',
        phone: '',
        message: '',
        propertyType: '',
        roomOrBhkType: '',
      });
    } catch (error) {
      setError('There was an error sending your message.');
    }
  };

  // Dynamically render BHK/Room options based on selected property type
  const renderRoomOrBhkOptions = () => {
    switch (formData.propertyType) {
      case 'flats':
        return (
          <div>
            <label className="block text-lg font-medium mb-2">BHK Type</label>
            <select
              name="roomOrBhkType"
              value={formData.roomOrBhkType}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
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
          <div>
            <label className="block text-lg font-medium mb-2">Sharing Type</label>
            <select
              name="roomOrBhkType"
              value={formData.roomOrBhkType}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
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
    <div className="bg-gray-50 min-h-screen mt-12">
      {/* Header Section */}
      <header className="bg-indigo-600 text-white py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Get in Touch with HariomPG</h1>
          <p className="text-lg mt-2">We're here to assist you. Feel free to reach out!</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Contact Information */}
          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-3xl font-semibold mb-6">Contact Information</h2>
            <p className="text-lg mb-6 text-gray-600">
              We’re always happy to hear from you. Here's how you can reach us:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="bg-indigo-600 text-white p-3 rounded-full mr-4">📍</span>
                <div>
                  <h3 className="text-xl font-medium">Our Address</h3>
                  <p className="text-gray-600">Hariom PG sector 141 Shadara gali no 35 Noida</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-indigo-600 text-white p-3 rounded-full mr-4">📞</span>
                <div>
                  <h3 className="text-xl font-medium">Phone Number</h3>
                  <p className="text-gray-600">+91 93108 21158</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-indigo-600 text-white p-3 rounded-full mr-4">🕒</span>
                <div>
                  <h3 className="text-xl font-medium">Working Hours</h3>
                  <p className="text-gray-600">Mon - Sat: 9:00 AM - 7:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-3xl font-semibold mb-6">Send Us a Message</h2>
            {error && <p className="text-red-600 mb-4">{error}</p>}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-lg font-medium mb-2" htmlFor="name">Full Name</label>
                <input
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Full Name"
                  required
                />
              </div>

              <div>
                <label className="block text-lg font-medium mb-2" htmlFor="phone">Phone Number</label>
                <input
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone Number"
                  required
                />
              </div>

              <div>
                <label className="block text-lg font-medium mb-2">Looking For</label>
                <select
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  required
                >
                  <option value="">Select a property type</option>
                  <option value="land">Searching Land</option>
                  <option value="flats">Searching Flats (Buy/Rent)</option>
                  <option value="pgs">Searching PG</option>
                </select>
              </div>

              {renderRoomOrBhkOptions()}

              <div>
                <label className="block text-lg font-medium mb-2" htmlFor="message">Message</label>
                <textarea
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              {successMessage && <p className="text-green-600 mb-4">{successMessage}</p>}
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-center mb-8">Find Us Here</h2>
          <div className="w-full max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <iframe
                className="w-full h-72 rounded-lg border-0"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d688.4253609199698!2d77.41727568988095!3d28.50338192913851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1726406784417!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                title="Google Maps - HariomPG"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
