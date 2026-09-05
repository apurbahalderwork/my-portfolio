import React from 'react';
import { CONTACT } from '../react-portfolio-assets-kevin-main/constants';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="framer-footer">
      <div className="footer-top-row" style={{ gridTemplateColumns: '1fr', paddingBottom: '2.5rem' }}>
        <div className="footer-bio-col">
          <p className="footer-bio-text">
            Full-Stack MERN engineer passionate about real-time systems, clean architectures, and software that doesn't collapse on Fridays. Based in Kolkata · Available for full-time engineering roles &amp; high-impact contracts.
          </p>
          <div className="footer-contact-links">
            <a href={`tel:${CONTACT.phoneNo}`} className="footer-phone">
              {CONTACT.phoneNo}
            </a>
            <a href={`mailto:${CONTACT.email}`} className="footer-email">
              {CONTACT.email}
            </a>
          </div>
        </div>
      </div>

      <div className="footer-nav-row">
        {/* Navigation Links Columns */}
        <div className="footer-nav-cols-wrap">
          <div className="footer-nav-col">
            <span className="footer-col-title">Navigation</span>
            <ul className="footer-col-links">
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-nav-col">
            <span className="footer-col-title">Social / Profiles</span>
            <ul className="footer-col-links">
              <li>
                <a href={CONTACT.github} target="_blank" rel="noreferrer">
                  GitHub <FaArrowUpRightFromSquare className="ext-icon" />
                </a>
              </li>
              <li>
                <a href={CONTACT.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn <FaArrowUpRightFromSquare className="ext-icon" />
                </a>
              </li>
              <li>
                <a href={CONTACT.instagram} target="_blank" rel="noreferrer">
                  Instagram <FaArrowUpRightFromSquare className="ext-icon" />
                </a>
              </li>
              <li>
                <a href={CONTACT.facebook} target="_blank" rel="noreferrer">
                  Facebook <FaArrowUpRightFromSquare className="ext-icon" />
                </a>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Giant Typographic Trademark */}
        <div className="footer-giant-brand">
          <div className="giant-brand-first">
            <span>Apurba</span>
          </div>
          <div className="giant-brand-last">
            <span>Halder</span>
            <span className="giant-reg">®</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <span>© 2026 Apurba Halder · Engineered with React 19 &amp; Modern CSS</span>
        <span>Zero tracking cookies · Tested before pushing to main</span>
      </div>
    </footer>
  );
};

export default Footer;
