import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebookF, FaEnvelope } from 'react-icons/fa6';
import { CONTACT } from '../react-portfolio-assets-kevin-main/constants';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header className="framer-navbar">
        <div className="framer-navbar-inner">
          {/* Brand mark */}
          <a href="#hero" className="framer-brand">
            Apurba Halder<span className="brand-reg">®</span>
          </a>

          {/* Desktop in-page navigation pills */}
          <nav className="framer-nav-desktop" aria-label="Main Navigation">
            <a href="#about" className="framer-nav-pill">About</a>
            <a href="#skills" className="framer-nav-pill">Skills</a>
            <a href="#experience" className="framer-nav-pill">Experience</a>
            <a href="#projects" className="framer-nav-pill">Projects</a>
            <a href="#education" className="framer-nav-pill">Education</a>
            <a href="#contact" className="framer-nav-pill">Contact</a>
          </nav>

          {/* Hamburger toggle button */}
          <button
            className={`framer-burger-btn ${menuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle Fullscreen Menu"
            aria-expanded={menuOpen}
          >
            <span className="burger-line line-1"></span>
            <span className="burger-line line-2"></span>
          </button>
        </div>
      </header>

      {/* Fullscreen Overlay Mega Menu */}
      <div className={`framer-mega-overlay ${menuOpen ? 'active' : ''}`}>
        <div className="mega-overlay-backdrop" onClick={toggleMenu}></div>
        <div className="mega-overlay-content">
          <div className="mega-top-bar">
            <a href="#hero" className="mega-brand" onClick={toggleMenu}>
              Apurba Halder<span className="brand-reg">®</span>
            </a>
            <button className="mega-close-btn" onClick={toggleMenu} aria-label="Close menu">
              <span className="close-line line-x1"></span>
              <span className="close-line line-x2"></span>
            </button>
          </div>

          <div className="mega-body-grid">
            {/* Left Column: Big Typography Section Links */}
            <div className="mega-nav-col">
              <ul className="mega-nav-list">
                <li className="mega-nav-item">
                  <a href="#hero" onClick={toggleMenu} className="mega-nav-link">
                    <span className="link-text">HOME</span>
                    <span className="link-icon">+</span>
                  </a>
                </li>
                <li className="mega-nav-item">
                  <a href="#about" onClick={toggleMenu} className="mega-nav-link">
                    <span className="link-text">ABOUT</span>
                    <span className="link-icon">+</span>
                  </a>
                </li>
                <li className="mega-nav-item">
                  <a href="#skills" onClick={toggleMenu} className="mega-nav-link">
                    <span className="link-text">SKILLS</span>
                    <span className="link-icon">+</span>
                  </a>
                </li>
                <li className="mega-nav-item">
                  <a href="#experience" onClick={toggleMenu} className="mega-nav-link">
                    <span className="link-text">EXPERIENCE</span>
                    <span className="link-icon">+</span>
                  </a>
                </li>
                <li className="mega-nav-item">
                  <a href="#projects" onClick={toggleMenu} className="mega-nav-link">
                    <span className="link-text">PROJECTS</span>
                    <span className="link-icon">+</span>
                  </a>
                </li>
                <li className="mega-nav-item">
                  <a href="#education" onClick={toggleMenu} className="mega-nav-link">
                    <span className="link-text">EDUCATION</span>
                    <span className="link-icon">+</span>
                  </a>
                </li>
                <li className="mega-nav-item">
                  <a href="#contact" onClick={toggleMenu} className="mega-nav-link">
                    <span className="link-text">CONTACT</span>
                    <span className="link-icon">+</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Right Column: Authentic Contact Info */}
            <div className="mega-info-col">
              <div className="mega-info-block">
                <div className="mega-info-label">Contact Phone</div>
                <a href="tel:+918001302386" className="mega-info-val">
                  +91 8001302386
                </a>
              </div>

              <div className="mega-info-block">
                <div className="mega-info-label">Contact Email</div>
                <a href="mailto:apurbahaldernewwork@gmail.com" className="mega-info-val">
                  apurbahaldernewwork@gmail.com
                </a>
              </div>

              <div className="mega-info-block">
                <div className="mega-info-label">Location</div>
                <div className="mega-info-val">Kolkata, West Bengal, India</div>
                <div className="mega-info-sub">Open to Remote &amp; On-Site Roles</div>
              </div>

              {/* Social icons */}
              <div className="mega-socials">
                <a
                  href="https://github.com/apurbahalderwork"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="mega-social-link"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/apurba-halder-7a44332b2/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="mega-social-link"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.instagram.com/apurbahalder__/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="mega-social-link"
                >
                  <FaInstagram />
                </a>
                <a
                  href={CONTACT.facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="mega-social-link"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="mailto:apurbahaldernewwork@gmail.com"
                  aria-label="Email"
                  className="mega-social-link"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
