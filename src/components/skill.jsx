import React, { useState } from 'react';
import proj1 from '../react-portfolio-assets-kevin-main/assets/projects/project-1.jpg';
import proj2 from '../react-portfolio-assets-kevin-main/assets/projects/project-2.jpg';
import proj4 from '../react-portfolio-assets-kevin-main/assets/projects/project-4.jpg';
import { 
  FaReact, 
  FaJs, 
  FaNodeJs, 
  FaGitAlt, 
  FaHtml5, 
  FaCss3Alt 
} from 'react-icons/fa6';
import { 
  SiMongodb, 
  SiExpress, 
  SiPostman, 
  SiCplusplus, 
  SiPython, 
  SiTailwindcss, 
  SiSocketdotio, 
  SiRedux 
} from 'react-icons/si';

const SKILL_DOMAINS = [
  {
    id: '001',
    title: 'FRONTEND ENGINEERING',
    description:
      'Building reactive interfaces with React 19, modern ES6+, and CSS. Crafting component trees that do not re-render 400 times on a single keystroke, and keeping state predictable via Redux Toolkit.',
    skills: [
      { name: 'React 19', icon: <FaReact /> },
      { name: 'JavaScript (ES6+)', icon: <FaJs /> },
      { name: 'Redux Toolkit', icon: <SiRedux /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { name: 'HTML5 Semantic', icon: <FaHtml5 /> },
      { name: 'CSS3 Animations', icon: <FaCss3Alt /> }
    ],
    image: proj2,
    projectRef: 'Wave Chat Frontend (React 19)'
  },
  {
    id: '002',
    title: 'BACKEND & REAL-TIME SYSTEMS',
    description:
      'Architecting asynchronous Node.js/Express REST APIs and Socket.IO event streams. Returning proper HTTP status codes (no 200 OK containing error payloads) and indexing MongoDB with geospatial 2dsphere queries.',
    skills: [
      { name: 'Node.js Runtime', icon: <FaNodeJs /> },
      { name: 'Express.js REST APIs', icon: <SiExpress /> },
      { name: 'Socket.IO WebSockets', icon: <SiSocketdotio /> },
      { name: 'MongoDB & Atlas', icon: <SiMongodb /> },
      { name: 'JWT & RBAC Auth', icon: <SiExpress /> }
    ],
    image: proj1,
    projectRef: 'YourCabs Geospatial & REST Engine'
  },
  {
    id: '003',
    title: 'LANGUAGES, DSA & DEVOPS',
    description:
      'Writing structured algorithms in C/C++ and Python. Managing clean Git feature branches with meaningful commit logs (no "fix bug 4" commits), testing endpoints in Postman, and deploying live to Render.',
    skills: [
      { name: 'C / C++ (DSA)', icon: <SiCplusplus /> },
      { name: 'Python Algorithms', icon: <SiPython /> },
      { name: 'Git & GitHub CI/CD', icon: <FaGitAlt /> },
      { name: 'Postman API Suite', icon: <SiPostman /> },
      { name: 'Render Cloud Hosting', icon: <SiExpress /> }
    ],
    image: proj4,
    projectRef: 'GitHub Analyzer & Deployment Suite'
  }
];

export const Skills = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="framer-services-section" id="skills">
      <div className="services-header-row">
        <div className="framer-pill-badge">
          <span>CAPABILITIES &amp; PROFICIENCIES</span>
        </div>
        <h2 className="services-main-title">
          TECHNICAL SKILLS &amp; <br />
          CORE COMPETENCIES
        </h2>
      </div>

      <div className="services-body-grid">
        {/* Left Column: Numbered Skill Categories */}
        <div className="services-list-col">
          {SKILL_DOMAINS.map((domain, idx) => {
            const isActive = activeIdx === idx;
            return (
              <div
                key={domain.id}
                className={`service-interactive-row ${isActive ? 'active' : ''}`}
                onMouseEnter={() => setActiveIdx(idx)}
                onClick={() => setActiveIdx(idx)}
              >
                <div className="service-row-top">
                  <span className="service-number">◉ {domain.id}</span>
                  <h3 className="service-title">{domain.title}</h3>
                </div>

                <p className="service-desc">{domain.description}</p>

                <div className="service-tags-wrap">
                  {domain.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="service-tag-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ color: 'var(--primary-orange)' }}>{skill.icon}</span>
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>

                {/* Mobile Preview Accordion */}
                <div className="service-mobile-preview">
                  <img src={domain.image} alt={domain.title} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Dynamic Live 3D Preview Card (Desktop) */}
        <div className="services-preview-col">
          <div className="service-sticky-preview-box">
            <div className="preview-media-frame">
              <img
                src={SKILL_DOMAINS[activeIdx].image}
                alt={SKILL_DOMAINS[activeIdx].title}
                key={SKILL_DOMAINS[activeIdx].id}
                className="service-preview-img animate-fade"
              />
              <div className="preview-indicator-chip">
                <span className="chip-dot"></span>
                <span>{SKILL_DOMAINS[activeIdx].projectRef}</span>
              </div>
            </div>

            <div className="preview-meta-row">
              <div className="preview-id-badge">
                DOMAIN {SKILL_DOMAINS[activeIdx].id}
              </div>
              <span style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--primary-orange)', fontWeight: 700 }}>
                {SKILL_DOMAINS[activeIdx].skills.length} VERIFIED TECHNOLOGIES
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
