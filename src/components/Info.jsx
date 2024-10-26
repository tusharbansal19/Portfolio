import React, { useState } from 'react'; 
import { Typewriter } from 'react-simple-typewriter';
import MiinImageHead from './MainImaheHead';

const InfoPage = ({darkMode, setDarkMode}) => {
  // State to manage the theme
  console.log(darkMode);

  return (
    <div className={`${darkMode ? 'bg-gradient-to-r from-black to-purple-900' : 'bg-white'} min-h-screen text-white flex items-center justify-center p-6`}>
      <div className="container mx-auto flex flex-col md:flex-row items-center md:space-x-8 space-y-6 md:space-y-0 animate-fade-in">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-xl font-bold mb-4">
            Hello, <h2 className='text-2xl text-yellow-400'>I am Tushar Bansal</h2>
          </h1>
          {/* Typewriter Effect */}
          <div className="text-4xl font-semibold bg-gradient-to-r from-purple-300 to-purple-500 text-transparent bg-clip-text py-2">
            <span className='text-yellow-300'>I am a </span>
            <Typewriter className="my-2 text-5xl"
              words={['WEB DEVELOPER', 'FRONTEND DEVELOPER', 'BACKEND DEVELOPER']}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
       
        </div>

        {/* Image Section with Hover Effect */}
        <div className="flex-1 flex justify-center relative">
          <MiinImageHead>
            <h2 className="bg-gradient-to-r absolute z-50 top-7 from-purple-400 to-black text-transparent bg-clip-text">Tushar Bansal</h2>
          <img
            src=".\public\Image\WhatsApp Image 2024-10-26 at 18.19.58_11efbaef.jpg" // Replace with your image URL
            alt="Tushar Bansal"
            className="w-48 h-48 absolute z-50 top-16 md:w-64 md:h-64 object-cover rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
            />
            </MiinImageHead>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
