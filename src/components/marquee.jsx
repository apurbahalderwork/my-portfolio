import React from 'react';
import {
  FaReact,
  FaNodeJs,
  FaGitAlt
} from 'react-icons/fa6';
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiSocketdotio,
  SiRedux,
  SiJavascript,
  SiPostman,
  SiVite,
  SiHtml5,
  SiCss3
} from 'react-icons/si';

const TECH_ITEMS = [
  { name: 'React 19', icon: <FaReact /> },
  { name: 'Socket.IO', icon: <SiSocketdotio /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Express.js', icon: <SiExpress /> },
  { name: 'MongoDB Atlas', icon: <SiMongodb /> },
  { name: 'Redux Toolkit', icon: <SiRedux /> },
  { name: 'JavaScript (ES6+)', icon: <SiJavascript /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'REST APIs', icon: <SiPostman /> },
  { name: 'Git & GitHub', icon: <FaGitAlt /> },
  { name: 'Vite', icon: <SiVite /> },
  { name: 'HTML5 & CSS3', icon: <SiHtml5 /> }
];

const Marquee = () => {
  return (
    <section className="framer-marquee-section">
      <div className="marquee-label-col">
        <span className="marquee-badge">CORE COMPETENCIES</span>
        <span className="marquee-sub">TECH STACK</span>
      </div>

      <div className="marquee-track-wrapper">
        <div className="marquee-track">
          {[...TECH_ITEMS, ...TECH_ITEMS].map((item, idx) => (
            <div key={idx} className="marquee-item">
              <span className="marquee-icon">{item.icon}</span>
              <span className="marquee-name">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marquee;
