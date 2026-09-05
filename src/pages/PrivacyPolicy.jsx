import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa6';

const PrivacyPolicy = () => {
  const lastUpdated = 'September 2026';

  return (
    <div className="legal-doc-page">
      <div className="legal-doc-container">
        <Link to="/" className="legal-doc-back-link">
          <FaArrowLeft />
          <span>cd /back-to-portfolio</span>
        </Link>

        <div className="legal-doc-badge-strip">
          <span className="legal-doc-chip chip-accent">Zero-Tracker Policy</span>
          <span className="legal-doc-chip chip-green">Cookies: 0 (Pure Dev Edition)</span>
          <span className="legal-doc-chip">Updated: {lastUpdated}</span>
        </div>

        <h1 className="legal-doc-title">
          Privacy Policy
        </h1>
        <p className="legal-doc-subtitle">
          An honest, transparent explanation of how I handle data (or rather, how I don't hoard it).
        </p>

        <div className="legal-humor-banner">
          <strong>TL;DR for privacy advocates:</strong> I respect your personal privacy as much as I respect clean indentation and non-mutating state functions. No analytics trackers, no fingerprinting scripts, no pixel spying, and definitely zero crypto-mining in the background.
        </div>

        <div className="legal-sections-stack">
          {/* Section 1 */}
          <section className="legal-section-card">
            <div className="legal-section-header">
              <span className="legal-section-num">01</span>
              <h2 className="legal-section-heading">What Data Gets Collected? (Very Little)</h2>
            </div>
            <div className="legal-section-body">
              <p>
                The only personal data collected on this site is whatever you voluntarily type into the contact form: your <strong>Name</strong>, your <strong>Email address</strong>, and your <strong>Message</strong>.
              </p>
              <p>
                This information is forwarded directly to my inbox via Web3Forms API so I can read it, think about your project, and reply to you. It is not fed to machine learning models, nor is it stored in a marketing CRM that will ping you every Tuesday with automated "Just checking in!" drip campaigns.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="legal-section-card">
            <div className="legal-section-header">
              <span className="legal-section-num">02</span>
              <h2 className="legal-section-heading">The Cookie Stand: Exactly 0 Cookies</h2>
            </div>
            <div className="legal-section-body">
              <p>
                This portfolio sets <strong>zero HTTP cookies</strong> on your computer. No session cookies, no third-party tracking cookies, and no persistent ID tokens.
              </p>
              <p>
                The only cookies I genuinely endorse are warm chocolate chip cookies paired with hot filter coffee while squashing race conditions at 1:00 AM.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="legal-section-card">
            <div className="legal-section-header">
              <span className="legal-section-num">03</span>
              <h2 className="legal-section-heading">Third-Party Infrastructure</h2>
            </div>
            <div className="legal-section-body">
              <p>
                To keep this site snappy and secure, a few trusted services are used:
              </p>
              <p>
                • <strong>Web3Forms:</strong> Relays form submissions securely to my inbox. They don't store your submitted form data after delivery. Read their policy at <a href="https://web3forms.com/privacy" target="_blank" rel="noopener noreferrer">web3forms.com/privacy</a>.<br />
                • <strong>Google Fonts:</strong> Serves Syne, Outfit, and Plus Jakarta Sans typefaces. Standard font caching applies.<br />
                • <strong>GitHub:</strong> Where my repositories live. When you click repository links, GitHub’s privacy practices apply.<br />
                • <strong>Render:</strong> Hosts the live instance of Wave.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="legal-section-card">
            <div className="legal-section-header">
              <span className="legal-section-num">04</span>
              <h2 className="legal-section-heading">No Surveillance Analytics</h2>
            </div>
            <div className="legal-section-body">
              <p>
                I don't track your mouse movements with heatmaps, I don't record your session screen, and I don't inspect your browser plugins. You are free to browse my code and read my experience without feeling like someone is breathing down your neck with analytics dashboards.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="legal-section-card">
            <div className="legal-section-header">
              <span className="legal-section-num">05</span>
              <h2 className="legal-section-heading">Right to be Forgotten (/dev/null)</h2>
            </div>
            <div className="legal-section-body">
              <p>
                If you previously reached out through the contact form and want me to permanently delete your email thread from my inbox, simply reply to that email asking for deletion. I will immediately wipe it—no bureaucratic 30-day waiting periods.
              </p>
              <p>
                Questions or concerns? Ping me directly at{' '}
                <a href="mailto:apurbahaldernewwork@gmail.com">
                  apurbahaldernewwork@gmail.com
                </a>
                .
              </p>
            </div>
          </section>
        </div>

        <div className="legal-footer-signature">
          <span>Apurba Halder · Privacy First</span>
          <span>Zero Trackers · 100% Respect</span>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
