import React, { useState } from 'react';
import '../app.css'; // Ensure your glassmorphism styles are imported

const ProjectsSection = ({darkMode, setDarkMode}) => {
  // State to manage the theme


  const projects  = [
  {
    title: 'NiyuktiSetu',
    description: 'A web application for Online officil interview.',
    image: './public/Image/Screenshot 2024-10-26 194538.png',
    technologies: ['React', 'Node.js', 'MongoDB','express.js','ML','java','tailwind css'],
    githubLink: 'https://github.com/PrajjwalVajpayee/niyuktisetu'
  },
  {
    title: 'Weather App',
    description: 'A web application for real time weather report',
    image: './public/Image/Screenshot 2024-10-26 194320.png',
    technologies: ['React','Apis', 'tailwind css'],
    githubLink: 'https://github.com/PrajjwalVajpayee/niyuktisetu'
  },
  {
    title: 'URL Shortner',
    description: 'A web application for sort the big URLs.',
    image: './public/Image/Screenshot 2024-10-26 193700.png',
    technologies: ['React', 'Node.js', 'MongoDB','express.js','tailwind css'],
    githubLink: 'https://github.com/PrajjwalVajpayee/niyuktisetu'
  },


  // Additional projects...
];

  return (
    <section className={`${!darkMode ? 'bg-white' : 'bg-gradient-to-r from-black to-purple-900'} min-h-screen text-white flex flex-col items-center justify-center p-6`}>
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text mb-4">
          My Projects
        </h1>
       
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((project, index) => (
        <div key={index} className="glass-effect p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300 ease-in-out text-center">
        {/* Project Image */}
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-48 object-cover rounded-t-lg mb-4 transition-opacity duration-300 ease-in-out hover:opacity-80"
        />
      
        {/* Project Title */}
        <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text mb-2">
          {project.title}
        </h3>
      
        {/* Project Description */}
        <p className="text-sm text-gray-200 mb-4">
          {project.description}
        </p>
      
        {/* Technologies Used */}
        <div className="mb-4">
          <h4 className="font-semibold text-lg text-yellow-400 mb-2">Technologies Used:</h4>
          <ul className="flex flex-wrap items-center justify-center space-x-2 w-full max-w-full  text-gray-300 text-xs">
            {project.technologies.map((tech, index) => (
              <li key={index} className="px-1 m-1 py-1 bg-purple-700 rounded-full">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      
        {/* GitHub Link */}
        <div className="flex justify-center mt-4">
          <a 
            href={project.githubLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-purple-400 hover:text-purple-600 transition-colors duration-200"
            aria-label="GitHub repository link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M12 .297C5.37.297 0 5.667 0 12.297c0 5.297 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577 0-.286-.011-1.243-.017-2.253-3.338.726-4.042-1.607-4.042-1.607-.546-1.383-1.334-1.753-1.334-1.753-1.089-.744.083-.729.083-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.832 2.809 1.303 3.492.996.108-.775.418-1.303.76-1.603-2.665-.302-5.467-1.333-5.467-5.933 0-1.312.469-2.385 1.236-3.223-.124-.303-.536-1.523.118-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.398 3.003-.404 1.02.006 2.047.138 3.007.404 2.29-1.552 3.296-1.23 3.296-1.23.657 1.653.245 2.873.121 3.176.77.838 1.235 1.911 1.235 3.223 0 4.611-2.806 5.628-5.478 5.926.43.37.814 1.1.814 2.217 0 1.603-.015 2.898-.015 3.292 0 .32.192.694.799.577C20.565 22.092 24 17.593 24 12.297 24 5.667 18.63.297 12 .297z"/>
            </svg>
          </a>
        </div>
      </div>
      
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
