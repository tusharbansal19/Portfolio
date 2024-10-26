import React, { useState } from 'react';
import Header from './components/Header';
import { Element } from 'react-scroll';
import About from './components/About';
// import Projects from './components/Projects';
import InfoPage from './components/Info.jsx';
import SkillsSection from './components/SkillSection.jsx';
import ProjectsSection from './components/Projects.jsx';
import ContactUs from './components/Contact.jsx';
// import InfoPage from './components/Info';
// import Contact from './components/Contacts';

// import Contact from './components';


function App() {
  const [darkMode, setDarkMode] = useState(false);


  
  return (
    <div className="font-sans bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 min-h-screen text-white">
      <Header darkMode={darkMode} setDarkMode={setDarkMode}  />
      <Element name="info">
    <InfoPage darkMode={darkMode} setDarkMode={setDarkMode}/>
      </Element>
      <Element name="skill">

     <SkillsSection darkMode={darkMode} setDarkMode={setDarkMode}/>
      </Element>
     <Element name="about">
     <About darkMode={!darkMode} setDarkMode={setDarkMode} />
     </Element>
     <Element name="project">
       <ProjectsSection darkMode={darkMode} setDarkMode={setDarkMode}/>
      </Element>
      <Element name="contact">
        
     <ContactUs darkMode={darkMode} setDarkMode={setDarkMode}/> 
      </Element>
    {/*

      */
      
      }
      {/* <Contact /> */}
    </div>
  );
}

export default App;
