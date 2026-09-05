import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  const lastUpdated = 'September 2026';

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh', color: 'var(--text-main)', fontFamily: 'var(--font-sans)' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '80px 24px' }}>
        <Link
          to="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: 'var(--accent-cyan)',
            textDecoration: 'none',
            fontSize: '0.9rem',
            fontWeight: 500,
            marginBottom: '40px'
          }}
        >
          &larr; Back to portfolio
        </Link>

        <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '8px', letterSpacing: '-0.02em' }}>
          Privacy Policy
        </h1>
        <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', marginBottom: '48px' }}>
          Last updated: {lastUpdated}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px', lineHeight: 1.75, color: 'var(--text-muted)' }}>
          <section>
            <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '10px' }}>
              Overview
            </h2>
            <p>
              This portfolio website is owned and operated by Apurba Halder. It is a personal portfolio
              website with no commercial activity. This page explains what information, if any, this site
              collects and how it is used.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '10px' }}>
              Information collected
            </h2>
            <p>
              The contact form on this site collects your name, email address, and message text. This data
              is transmitted to Web3Forms (web3forms.com), a third-party form service, which forwards it as
              an email to the site owner. Web3Forms does not store your submission after delivery. No other
              personal data is collected or stored by this site.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '10px' }}>
              Third-party services
            </h2>
            <p>
              This site uses Web3Forms for contact form submissions. You can read their privacy policy at{' '}
              <a
                href="https://web3forms.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--accent-cyan)' }}
              >
                web3forms.com/privacy
              </a>
              . The site also loads fonts from Google Fonts; Google's privacy policy applies to that
              request. Project links point to GitHub, which has its own privacy policy.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '10px' }}>
              Cookies
            </h2>
            <p>
              This website does not set any cookies.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '10px' }}>
              External links
            </h2>
            <p>
              This site contains links to external services including GitHub and LinkedIn. Clicking those
              links takes you to third-party websites governed by their own privacy policies. This site has
              no control over and assumes no responsibility for those services.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '10px' }}>
              Contact
            </h2>
            <p>
              If you have any questions about this policy, you can reach Apurba Halder at{' '}
              <a
                href="mailto:apurbahaldernewwork@gmail.com"
                style={{ color: 'var(--accent-cyan)' }}
              >
                apurbahaldernewwork@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
