import React, { useState } from 'react';

const About = ({darkMode, setDarkMode}) => {
  // State to manage the theme
  // const [darkMode, setDarkMode] = useState(true);

  return (
    <section className={`${!darkMode ? 'bg-gradient-to-r from-black to-purple-900 text-white text-white' : 'bg-white text-black'} py-20 backdrop-blur-lg rounded-lg shadow-md`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
            About Me
          </h2>
         
        </div>
        <p className="text-lg max-w-2xl mx-auto text-center mb-8">
          I'm a passionate web developer with experience in building responsive and modern web applications.
          I thrive in dynamic environments and enjoy tackling challenges with innovative solutions.
        </p>

        {/* Contact Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className={`p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out ${darkMode ? 'bg-gradient-to-r from-purple-700 to-blue-600' : 'bg-gradient-to-r from-purple-500 to-blue-500'}`}>
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <p className="text-lg">Mobile: <span className="font-bold">9719167530</span></p>
            <p className="text-lg">Email: <span className="font-bold">tusharbansal3366@gmail.com</span></p>
          </div>

          <div className={`p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out ${darkMode ? 'bg-gradient-to-r from-green-600 to-teal-500' : 'bg-gradient-to-r from-green-500 to-teal-500'}`}>
            <h3 className="text-2xl font-semibold mb-4">Education Qualification</h3>
            <p className="text-lg block">Bachelor of Technology in Computer Science</p>
            <p className="text-lg"> Ajay Kumar Garg Engineering College, Ghaziabad, <p>
              </p>
              </p>Year of Pass out: 2026
          </div>
        </div>

        {/* Links */}
        <div className="mt-10">
          <h3 className="text-3xl font-semibold text-center mb-6">Find Me On</h3>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-black hover:bg-gray-300'}`}
            >
              GitHub
            </a>
            <a
              href="https://leetcode.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out ${darkMode ? 'bg-yellow-600 text-white hover:bg-yellow-500' : 'bg-yellow-400 text-black hover:bg-yellow-500'}`}
            >
              LeetCode
            </a>
            <a
              href="https://www.hackerrank.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out ${darkMode ? 'bg-blue-700 text-white hover:bg-blue-600' : 'bg-blue-300 text-black hover:bg-blue-400'}`}
            >
              HackerRank
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
