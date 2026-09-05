import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
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
          Terms of Use
        </h1>
        <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', marginBottom: '48px' }}>
          Last updated: {lastUpdated}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px', lineHeight: 1.75, color: 'var(--text-muted)' }}>
          <section>
            <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '10px' }}>
              About this site
            </h2>
            <p>
              This website is the personal portfolio of Apurba Halder, a Full Stack and MERN Stack Developer.
              It exists to present skills, projects, and contact information to potential employers and
              collaborators. There is no commercial offering on this site.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '10px' }}>
              Permitted use
            </h2>
            <p>
              You may browse this site freely. You may share the URL with others. You may not copy, reproduce,
              or redistribute the written content, design, or code of this site without prior written permission
              from Apurba Halder.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '10px' }}>
              Accuracy of information
            </h2>
            <p>
              The information presented on this site reflects Apurba Halder's skills and experience at the
              time of publication. Project descriptions, technology stacks, and affiliations are accurate to
              the best of the owner's knowledge.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '10px' }}>
              External links
            </h2>
            <p>
              Links to external services such as GitHub and LinkedIn are provided for convenience. Apurba
              Halder is not responsible for the content or availability of those external sites.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '10px' }}>
              Disclaimer
            </h2>
            <p>
              This site is provided as-is without any warranties. Apurba Halder makes no guarantee of
              continuous availability or error-free operation.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '10px' }}>
              Contact
            </h2>
            <p>
              Questions about these terms can be directed to{' '}
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

export default Terms;
