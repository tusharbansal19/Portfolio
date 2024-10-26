import React, { useState } from 'react';
import '../app.css'; // Ensure your glassmorphism styles are imported

const ContactUs = ({darkMode, setDarkMode}) => {
  // State to manage the theme


  return (
    <section className={`${!darkMode ? 'bg-white' : 'bg-gradient-to-r from-black to-purple-900'} min-h-screen text-white flex flex-col items-center justify-center p-6`}>
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text mb-4">
          Contact Us
        </h1>
  
      </div>

      {/* Contact Form */}
      <form className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full glass-effect text-black">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="border rounded-lg p-2 w-full"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="border rounded-lg p-2 w-full"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            className="border rounded-lg p-2 w-full"
            placeholder="Your Message"
            rows="4"
            required
          />
        </div>
        <button
          type="submit"
          className={`mt-4 px-4 py-2 rounded-lg ${!darkMode ? 'bg-gradient-to-r from-black to-purple-900' : 'bg-gray-300 text-black'} transition duration-300`}
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactUs;
