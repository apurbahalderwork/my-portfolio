
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import proj1 from '../react-portfolio-assets-kevin-main/assets/projects/project-1.jpg';
import proj2 from '../react-portfolio-assets-kevin-main/assets/projects/project-2.jpg';
import proj3 from '../react-portfolio-assets-kevin-main/assets/projects/project-3.jpg';
import proj4 from '../react-portfolio-assets-kevin-main/assets/projects/project-4.jpg';

const SERVICES_DATA = [
  {
    id: '001',
    title: 'FULL STACK WEB DEVELOPMENT',
    description:
      'Crafting scalable, high-performance web applications with React 19, Node.js, Express, and MongoDB that seamlessly handle real-world user load.',
    tags: [
      'Full Stack Architecture',
      'React 19 & Next.js',
      'Express & Node Services',
      'REST API Design',
      'Database Optimization'
    ],
    image: proj2,
    projectRef: 'Wave Real-Time Chat'
  },
  {
    id: '002',
    title: 'REAL-TIME & WEBSOCKET SYSTEMS',
    description:
      'Engineering zero-latency bi-directional data pipelines, instant messaging protocols, live user presence trackers, and collaborative digital workspaces.',
    tags: [
      'Socket.IO Protocol',
      'Bi-directional Streaming',
      'Live Presence Indicators',
      'Event-Driven Logic',
      'Cloudinary Media CDN'
    ],
    image: proj1,
    projectRef: 'YourCabs Geospatial'
  },
  {
    id: '003',
    title: 'API & DATABASE ARCHITECTURE',
    description:
      'Designing resilient backend structures, secure authentication (JWT/RBAC), geospatial proximity queries ($geoNear), and high-throughput data models.',
    tags: [
      'MongoDB Geospatial 2dsphere',
      'Role-Based Dashboards',
      'Secure JWT Auth',
      'Redis Caching',
      'Clean MVC Principles'
    ],
    image: proj3,
    projectRef: 'Adamas Academic System'
  },
  {
    id: '004',
    title: 'UI/UX & MODERN FRONTEND',
    description:
      'Building ultra-responsive, accessible user interfaces with bespoke micro-animations, tailored component design systems, and rapid page speed.',
    tags: [
      'Modern CSS & Tailwind',
      'Micro-interactions',
      'Mobile-First Layouts',
      'State Orchestration',
      'Cross-Browser Polish'
    ],
    image: proj4,
    projectRef: 'GitHub Profile Analyzer'
  }
];

const Services = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="framer-services-section" id="services">
      <div className="services-header-row">
        <div className="framer-pill-badge">
          <span className="badge-arrow">›</span>
          <span>OUR SERVICES</span>
        </div>
        <h2 className="services-main-title">
          POWERFUL ENGINEERING <br />
          SERVICES FOR YOUR BRAND
        </h2>
      </div>

      <div className="services-body-grid">
        {/* Left Column: Numbered Service Rows */}
        <div className="services-list-col">
          {SERVICES_DATA.map((service, idx) => {
            const isActive = activeIdx === idx;
            return (
              <div
                key={service.id}
                className={`service-interactive-row ${isActive ? 'active' : ''}`}
                onMouseEnter={() => setActiveIdx(idx)}
                onClick={() => setActiveIdx(idx)}
              >
                <div className="service-row-top">
                  <span className="service-number">◉ {service.id}</span>
                  <h3 className="service-title">{service.title}</h3>
                </div>

                <p className="service-desc">{service.description}</p>

                <div className="service-tags-wrap">
                  {service.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="service-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Mobile Preview Accordion if screen is small */}
                <div className="service-mobile-preview">
                  <img src={service.image} alt={service.title} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Dynamic Live Preview Card (Desktop) */}
        <div className="services-preview-col">
          <div className="service-sticky-preview-box">
            <div className="preview-media-frame">
              <img
                src={SERVICES_DATA[activeIdx].image}
                alt={SERVICES_DATA[activeIdx].title}
                key={SERVICES_DATA[activeIdx].id}
                className="service-preview-img animate-fade"
              />
              <div className="preview-indicator-chip">
                <span className="chip-dot"></span>
                <span>{SERVICES_DATA[activeIdx].projectRef}</span>
              </div>
            </div>

            <div className="preview-meta-row">
              <div className="preview-id-badge">
                SERVICE {SERVICES_DATA[activeIdx].id}
              </div>
              <Link to="/service" className="preview-explore-btn">
                <span>View All Services</span>
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
