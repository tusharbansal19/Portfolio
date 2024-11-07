import React, { useState } from 'react';
import axios from 'axios';
import '../App.css'; // Ensure your glassmorphism styles are imported
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = ({ darkMode, setDarkMode }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post('https://grabeats-server.onrender.com/user/contact', {
        name,
        email,
        message,
      });
      if (response.data.mailsended) {
        toast.success("Message sent successfully!", { position: "top-right", autoClose: 3000 });
        setEmail("");
        setMessage("");
        setName("");
        
      } else {
        toast.error("Failed to send message.", { position: "top-right", autoClose: 3000 });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error("An error occurred. Please try again later.", { position: "top-right", autoClose: 3000 });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className={`${!darkMode ? 'bg-white' : 'bg-gradient-to-r from-black to-purple-900'} min-h-screen text-white flex flex-col items-center justify-center p-6`}>
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text mb-4">
          Contact Us
        </h1>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full glass-effect text-black">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="border rounded-lg p-2 w-full"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className={`mt-4 px-4 py-2 rounded-lg ${!darkMode ? 'bg-gradient-to-r from-black to-purple-900' : 'bg-gray-300 text-black'} transition duration-300 flex items-center justify-center`}
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="loader h-6 w-6 border-4 border-t-4 border-t-transparent border-green-400 rounded-full animate-spin"></div>
          ) : (
            'Send Message'
          )}
        </button>
      </form>
      <ToastContainer />
    </section>
  );
};

export default ContactUs;
