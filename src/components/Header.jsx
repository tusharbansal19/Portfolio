// import React, { useState } from 'react';

import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
// import { useState } from "react";

const Header = ({  setDarkMode,darkMode}) => {
  // State for managing mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] =  useState();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return ( <>
    <header className="bg-black bg-opacity-40 backdrop-blur-md sticky top-0 z-[100] shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo with Gradient Text */}
        <h1 className="">
          <span className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 to-black text-transparent bg-clip-text">MyPortfolio</span>
           <span className=" text-sm font-extrabold bg-gradient-to-r from-yellow-400 to-black text-transparent bg-clip-text"> | Tushar Bansal</span>
        </h1>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-6">   <button
            onClick={() => setDarkMode(!darkMode)}
            className={` px-4 py-2 rounded-lg ${!darkMode ? 'bg-gradient-to-r from-black to-purple-900' : 'bg-gray-300'} text-black transition duration-300`}
          >
            {darkMode ? '☀️ ' : '🌙 '}
          </button>
          <Link to="info" className="text-lg hover:cursor-pointer cursor-move font-semibold bg-gradient-to-r from-purple-300 to-purple-500 text-transparent bg-clip-text hover:underline">
            Home
          </Link>
          <Link to="about" className="text-lg font-semibold bg-gradient-to-r from-purple-300 to-purple-500 text-transparent bg-clip-text hover:underline">
            About
          </Link>
          <Link to="achivement" className="text-lg font-semibold bg-gradient-to-r from-purple-300 to-purple-500 text-transparent bg-clip-text hover:underline">
          Achivement
          </Link>
          <Link to="skill" className="text-lg font-semibold bg-gradient-to-r from-purple-300 to-purple-500 text-transparent bg-clip-text hover:underline">
            Skills
          </Link>
          <Link to="project" className="text-lg font-semibold bg-gradient-to-r from-purple-300 to-purple-500 text-transparent bg-clip-text hover:underline">
            Projects
          </Link>
          <Link to="contact" className="text-lg font-semibold bg-gradient-to-r from-purple-300 to-purple-500 text-transparent bg-clip-text hover:underline">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Mobile Navigation Links - Dropdown */}
        {isMenuOpen && (<>
          <div className="absolute top-16 cursor-pointer hover:cursor-pointer right-6 bg-black bg-opacity-80 rounded-lg shadow-md p-4 md:hidden">
          <button
          onClick={() => setDarkMode(!darkMode)}
          className={` px-4 py-2 rounded-lg ${!darkMode ? 'bg-gradient-to-r from-black to-purple-900' : 'bg-gray-300'} text-black transition duration-300`}
          >
          {darkMode ? '☀️ ' : '🌙 '}
        </button>
           <div className=" hover:cursor-pointer ">
             <Link to="intro"
              className="block cursor-pointer text-lg font-semibold text-white hover:bg-purple-500 hover:bg-opacity-40 p-2 rounded-md"
              onClick={() => setIsMenuOpen(false)}
              >
              Home
            </Link>
              </div>
            <Link to="skill"
              className="block cursor-pointer text-lg font-semibold text-white hover:bg-purple-500 hover:bg-opacity-40 p-2 rounded-md"
              onClick={() => setIsMenuOpen(false)}
              >
            Skill
            </Link>
            <Link to="achivement"
              className="block cursor-pointer text-lg font-semibold text-white hover:bg-purple-500 hover:bg-opacity-40 p-2 rounded-md"
              onClick={() => setIsMenuOpen(false)}
              >
              
              Achivement
            </Link>
            <Link to="project"
              className="block cursor-pointer  text-lg font-semibold text-white hover:bg-purple-500 hover:bg-opacity-40 p-2 rounded-md"
              onClick={() => setIsMenuOpen(false)}
              >
            
            Projects
            </Link>
            <Link to="about"
              className="block cursor-pointer text-lg font-semibold text-white hover:bg-purple-500 hover:bg-opacity-40 p-2 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
            About
            </Link>
            <Link to="contact"
              className="block cursor-pointer text-lg font-semibold text-white hover:bg-purple-500 hover:bg-opacity-40 p-2 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
            Contact
            </Link>
          
           
          
            
          </div>
        </>
        )}
      </div>

    </header>
   
    
    {showButton && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-4 z-50 right-4 w-12 h-12 rounded-full flex items-center justify-center ${
            !darkMode
              ? 'bg-gradient-to-r from-purple-400 to-purple-600 border-4 border-purple-950 text-purple-700'
              : 'bg-gradient-to-r from-blue-800 to-purple-600'
          } transition duration-300 transform hover:scale-110 glass-effect shadow-lg`}
        >
          <span className=" text-xl">↑</span>
        </button>
      )}</>
    
  );
};

export default Header;
