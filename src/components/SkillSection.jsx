import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import '../app.css'; // Make sure your glassmorphism styles are imported

const SkillsSection = ({darkMode, setDarkMode}) => {
  // State to manage the theme
 

  return (
    <section className={`${!darkMode ? 'bg-white ' : 'bg-gradient-to-r from-black to-purple-900'} min-h-screen text-white flex flex-col items-center justify-center p-6`}>
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text mb-4">
          Skills & Technologies
        </h1>
        <div className="text-4xl font-semibold bg-gradient-to-r from-yellow-300 to-yellow-500 px-2 text-transparent bg-clip-text">
          <Typewriter
            words={['JavaScript', 'React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'AWS', 'CSS', 'C++', 'C', 'Express.js']}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
      </div>

      {/* Dark Mode Toggle Button */}
     

      {/* Skills Cards with Glassmorphism Effect */}
      <div className="">

      <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-900 text-transparent bg-clip-text mb-4">
          Languages
        </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-4xl">
        {['JavaScript',  'CSS', 'C/C++',, 'Java', 'Python','HTML'].map((skill, index) => (
          <div
          key={index}
          className="glass-effect p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out text-center"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text mb-2">
              {skill}
            </h3>
            <p className="text-sm text-gray-200">{skill} are used to develop softwares</p>
          </div>
        ))}
      </div>
        </div>
        <div className="">

      <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-900 text-transparent bg-clip-text mb-4">
          FrameWorks
        </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-4xl">
        {[ 'React', 'Node.js',  'Tailwind CSS', ].map((skill, index) => (
          <div
          key={index}
          className="glass-effect p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out text-center"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text mb-2">
              {skill}
            </h3>
            <p className="text-sm text-gray-200">  {skill}  is useful for design rapidely.</p>
          </div>
        ))}
      </div>
        </div>
        <div className="">

      <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-900 text-transparent bg-clip-text mb-4">
         DataBases
        </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-4xl">
        {[ 'MongoDB',  'SQL', ].map((skill, index) => (
          <div
          key={index}
          className="glass-effect p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out text-center"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text mb-2">
              {skill}
            </h3>
            <p className="text-sm text-gray-200">Proficiency in {skill} and its applications in modern web development.</p>
          </div>
        ))}
        </div>

      </div>
      <div className="">

<h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-900 text-transparent bg-clip-text mb-4">
   Others
  </h1>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-4xl">
  {[ "Postman" ,'Git',].map((skill, index) => (
    <div
    key={index}
    className="glass-effect p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out text-center"
    >
      <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text mb-2">
        {skill}
      </h3>
      <p className="text-sm text-gray-200"> {skill} and its applications in modern web development.</p>
    </div>
  ))}
  </div>
  
</div>
    </section>
  );
};

export default SkillsSection;
