import React from 'react';
import mypic from '../react-portfolio-assets-kevin-main/assets/projects/mypic.png';
import sculptureImg from '../react-portfolio-assets-kevin-main/assets/projects/hero-sculpture.jpg';
import { HERO_CONTENT } from '../react-portfolio-assets-kevin-main/constants';
import { FaArrowRight } from 'react-icons/fa6';

const Hero = () => {
  return (
    <section className="framer-hero-container" id="hero">
      {/* Giant backdrop typography */}
      <div className="framer-hero-watermark" aria-hidden="true">
        APURBA
      </div>

      {/* Subtle fine grid lines */}
      <div className="framer-hero-grid-overlay" aria-hidden="true">
        <div className="grid-line vertical line-1"></div>
        <div className="grid-line vertical line-2"></div>
        <div className="grid-line vertical line-3"></div>
        <div className="grid-line horizontal line-h1"></div>
      </div>

      <div className="framer-hero-content-wrapper">
        {/* Left Column: Authentic Hero text & Big typography */}
        <div className="framer-hero-left">
          <p className="framer-hero-tagline">
            {HERO_CONTENT}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px', marginTop: '1.5rem', marginBottom: '2rem' }}>
            <a
              href="#projects"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '11px 22px',
                borderRadius: '8px',
                backgroundColor: 'var(--primary-orange)',
                color: '#ffffff',
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '0.92rem',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(235, 89, 51, 0.35)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
            >
              <span>Explore Projects</span>
              <FaArrowRight />
            </a>
            <a
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '8px',
                border: '1px solid rgba(0, 0, 0, 0.12)',
                backgroundColor: 'rgba(0, 0, 0, 0.03)',
                color: 'var(--text-dark)',
                fontFamily: 'var(--font-heading)',
                fontWeight: 600,
                fontSize: '0.92rem',
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
            >
              <span>Get in Touch</span>
            </a>
          </div>

          <div className="framer-hero-brand-group">
            <span className="framer-hero-year">©2026</span>
            <h1 className="framer-hero-name">
              APURBA
              <span className="framer-hero-lastname">HALDER</span>
            </h1>
          </div>
        </div>

        {/* Center: Cutout Portrait */}
        <div className="framer-hero-center">
          <div className="framer-portrait-frame">
            <img
              src={mypic}
              alt="Apurba Halder - Full Stack / MERN Stack Developer"
              className="framer-portrait-img"
            />
          </div>
        </div>

        {/* Right 3D Floating Elements */}
        <div className="framer-hero-right">
          {/* Floating Showcase Artwork Card */}
          <a
            href="https://wave-chat-app-client.onrender.com"
            target="_blank"
            rel="noreferrer"
            className="framer-floating-card framer-art-card"
          >
            <div className="art-card-media">
              <img src={sculptureImg} alt="Wave Full-Stack Architecture" />
            </div>
            <div className="art-card-caption">
              <span className="art-dot"></span>
              <span className="art-title">WAVE CHAT</span>
              <span className="art-category">/Live App</span>
            </div>
          </a>

          {/* Floating "Let's Talk" Card */}
          <a
            href="#contact"
            className="framer-floating-card framer-talk-card"
            style={{ textDecoration: 'none', cursor: 'pointer' }}
          >
            <div className="talk-avatar-col">
              <img src={mypic} alt="Apurba Avatar" className="talk-avatar" />
            </div>
            <div className="talk-info-col">
              <span className="talk-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10b981', display: 'inline-block' }}></span>
                Open to Roles
              </span>
              <h3 className="talk-name">Apurba Halder</h3>
              <p className="talk-role">Full Stack &amp; MERN Engineer</p>
            </div>
            <div className="talk-arrow-btn" aria-label="Contact Apurba">
              <FaArrowRight />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
