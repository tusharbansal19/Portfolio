import React from 'react';

const AchievementsPage = ({ darkMode }) => {
  const achievements = [
    {
      title: '50 and 100 days badge ',
      description: '50 and 100 day Badge in leetcode in 2024 make me more deep knowledge in DSA',
     
    },
    

    {
      title: 'Mentorship certificate',
      description: 'Earned DS lecture mentorship program certificate  from Ajay Kumar Garg Engineering College.',
      
    },
    {
      title: '200 + leetcode questions',
      description: 'solving 200 + question in leetcode in 2024.',
      
    },
    // Add more achievements as needed
  ];

  return (
    <section className={`${darkMode ? ' bg-gradient-to-r from-black to-purple-900' : 'bg-white text-gray-900'} min-h-screen flex flex-col items-center justify-center p-6`}>
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className={`text-5xl font-bold ${darkMode ? 'bg-gradient-to-r from-purple-500 to-purple-700 text-transparent bg-clip-text' : 'bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text'} mb-4`}>
          Achievements
        </h1>
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} text-lg`}>
          A showcase of my achievements and certifications.
        </p>
      </div>

      {/* Achievements Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {achievements.map((achievement, index) => (
          <div 
            key={index} 
            className={`p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out ${darkMode ? ' text-white' : 'bg-gray-100 text-gray-900'}`}>
            
            {/* Achievement Title */}
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text mb-2">
              {achievement.title}
            </h3>

            {/* Achievement Description */}
            <p className="text-sm mb-4">
              {achievement.description}
            </p>

            {/* Achievement Date */}
            <p className="text-xs text-gray-400">
              {achievement.date}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AchievementsPage;
