import React from 'react';
import aboutArt from '../react-portfolio-assets-kevin-main/assets/projects/about-reel-1.jpg';
import { ABOUT_TEXT } from '../react-portfolio-assets-kevin-main/constants';

const About = () => {
  return (
    <section className="framer-impact-section" id="about">
      <div className="impact-grid">
        {/* Left Column: Heading, Badge, and 3D Visual Box */}
        <div className="impact-left-col">
          <div className="framer-pill-badge">
            <span>ABOUT ME</span>
          </div>

          <h2 className="impact-main-heading">
            ENGINEERING <br />
            INTUITIVE &amp; SCALABLE <br />
            WEB SYSTEMS
          </h2>

          <div className="impact-visual-box card-3d-hover">
            <img
              src={aboutArt}
              alt="Apurba Halder - Full Stack Developer"
              className="impact-art-img"
            />
          </div>
        </div>

        {/* Right Column: Exact ABOUT_TEXT & Genuine Key Metrics */}
        <div className="impact-right-col">
          <div className="impact-bio-card">
            <p className="impact-bio-text">
              {ABOUT_TEXT}
            </p>
          </div>

          <div className="impact-stats-list">
            <div className="impact-stat-row">
              <div className="stat-number">4+</div>
              <div className="stat-info">
                <div className="stat-title">
                  <span className="stat-dot"></span> PRODUCTION &amp; CORE PROJECTS
                </div>
                <p className="stat-desc">
                  Engineered Wave (live on Render), YourCabs (geospatial matching), Mentor-Mentee application,
                  and GitHub Profile Analyzer.
                </p>
              </div>
            </div>

            <div className="impact-stat-row">
              <div className="stat-number">5-P</div>
              <div className="stat-info">
                <div className="stat-title">
                  <span className="stat-dot"></span> SQUAD LED AS TECHNICAL ARCHITECT
                </div>
                <p className="stat-desc">
                  Defined Git branching strategies, sprint roadmaps, and MongoDB geospatial query pipelines
                  supervised by faculty Dr. Soumitra Roy.
                </p>
              </div>
            </div>

            <div className="impact-stat-row">
              <div className="stat-number">60+</div>
              <div className="stat-info">
                <div className="stat-title">
                  <span className="stat-dot"></span> PEERS AS CLASS REPRESENTATIVE
                </div>
                <p className="stat-desc">
                  Elected Class Representative at Adamas University (2023–Present) coordinating academic scheduling
                  and cohort initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
