import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    propertyType: '',
    roomOrBhkType: '',
    message: '',
  });

  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [requestId, setRequestId] = useState(''); // Store requestId for OTP verification
  const [otp, setOtp] = useState(''); // Store OTP entered by the user
  const [isOtpSent, setIsOtpSent] = useState(false); // Flag to show OTP input after sending enquiry

  // Update form data on input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Update OTP input on change
  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  // Handle form submission - send enquiry and OTP
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset error state
    setSuccessMessage(''); // Reset success message
console.log(formData);

    try {
      const response = await fetch('https://backend-production-b2d6.up.railway.app/api/user/SubmitEnquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send enquiry');
      }

      const data = await response.json();
      console.log(data);
      
      if (data.requestId) {
        setRequestId(data.requestId); // Save requestId for OTP verification
        setIsOtpSent(true); // Show OTP input field
        alert('OTP sent successfully! Please enter the OTP.');
      }
    } catch (error) {
      setError('There was an error sending your enquiry.');
    }
  };

  // Handle OTP verification and saving the enquiry
  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://backend-production-b2d6.up.railway.app/api/user/SaveEnquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ requestId, otp, ...formData }),
      });

      if (!response.ok) {
        throw new Error('OTP verification failed');
      }

      const data = await response.json();
      setSuccessMessage('Enquiry saved successfully after OTP verification!');
      alert('Thank you for your message. Your enquiry has been saved successfully.');

      // Reset form and state
      setFormData({
        fullName: '',
        phone: '',
        propertyType: '',
        roomOrBhkType: '',
        message: '',
      });
      setOtp('');
      setRequestId('');
      setIsOtpSent(false); // Hide OTP input after successful verification
    } catch (error) {
      setError('There was an error verifying the OTP.');
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
          <h1 className="text-4xl font-bold">Get in Touch with HariomSpaces</h1>
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
                  <p className="text-gray-600">Hariom PG, Sector 141, Shadara gali no 35, Noida</p>
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
            {!isOtpSent ? (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-lg font-medium mb-2" htmlFor="name">Full Name</label>
                  <input
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
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
                  <label className="block text-lg font-medium mb-2" htmlFor="propertyType">Property Type</label>
                  <select
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    id="propertyType"
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Property Type</option>
                    <option value="flats">Flats</option>
                    <option value="pgs">PGs</option>
                    <option value="land">Land</option>
                  </select>
                </div>

                {/* Conditionally render Room or BHK options */}
                {renderRoomOrBhkOptions()}

                <div>
                  <label className="block text-lg font-medium mb-2" htmlFor="message">Message</label>
                  <textarea
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows="4"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-500"
                >
                  Send Enquiry
                </button>
              </form>
            ) : (
              // OTP Verification Form
              <form className="space-y-6" onSubmit={handleOtpSubmit}>
                <div>
                  <label className="block text-lg font-medium mb-2" htmlFor="otp">Enter OTP</label>
                  <input
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    type="text"
                    id="otp"
                    name="otp"
                    value={otp}
                    onChange={handleOtpChange}
                    placeholder="OTP"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-500"
                >
                  Submit OTP & Save Enquiry
                </button>
              </form>
            )}
            {successMessage && <p className="text-green-600 mt-4">{successMessage}</p>}
          </div>

        </div>
      </main>

      {/* Google Maps Section */}
      <section className="w-full h-96 mt-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.917180415559!2d77.33996887599916!3d28.5454410871666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce59864000001%3A0x8d2a7fce72c28fe0!2sHariom%20PG!5e0!3m2!1sen!2sin!4v1696068016346!5m2!1sen!2sin"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
};

export default ContactPage;
