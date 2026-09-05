import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaCode, FaShieldHalved, FaBug, FaServer, FaTerminal } from 'react-icons/fa6';

const Terms = () => {
  const lastUpdated = 'September 2026';

  return (
    <div className="legal-doc-page">
      <div className="legal-doc-container">
        <Link to="/" className="legal-doc-back-link">
          <FaArrowLeft />
          <span>cd /back-to-portfolio</span>
        </Link>

        <div className="legal-doc-badge-strip">
          <span className="legal-doc-chip chip-accent">Human-Readable Edition</span>
          <span className="legal-doc-chip chip-green">Zero Legalese Slop</span>
          <span className="legal-doc-chip">Updated: {lastUpdated}</span>
        </div>

        <h1 className="legal-doc-title">
          Terms of Use
        </h1>
        <p className="legal-doc-subtitle">
          The practical guide to exploring this portfolio, inspecting my code, and not breaking my cloud tier.
        </p>

        <div className="legal-humor-banner">
          <strong>TL;DR for busy engineers:</strong> You're very welcome to explore, click around, benchmark my CSS, and inspect my bundle size. Feel free to borrow inspiration, but please don't steal my bio for your own college viva or fire SQL injections into a static mail form. Let's keep it respectful and build great software together.
        </div>

        <div className="legal-sections-stack">
          {/* Section 1 */}
          <section className="legal-section-card">
            <div className="legal-section-header">
              <span className="legal-section-num">01</span>
              <h2 className="legal-section-heading">Welcome to My Digital Workshop</h2>
            </div>
            <div className="legal-section-body">
              <p>
                This portfolio is the personal web space and digital lab of <strong>Apurba Halder</strong>, a Full-Stack MERN developer. Its entire purpose is to showcase genuine software projects, real-time architectures, code repositories, and contact information for future employers, clients, and fellow engineering collaborators.
              </p>
              <p>
                There are zero subscriptions, paywalls, or hidden SaaS up-sells here. If someone tries to sell you an "Apurba Halder NFT" or "Wave Token", you are being thoroughly bamboozled.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="legal-section-card">
            <div className="legal-section-header">
              <span className="legal-section-num">02</span>
              <h2 className="legal-section-heading">Code, Inspiration &amp; Intellectual Property</h2>
            </div>
            <div className="legal-section-body">
              <p>
                The project descriptions, custom layout styling, and personal narrative on this site were written with genuine care by me (and yes, heavily caffeinated). All project repositories linked to GitHub follow their respective open-source licenses (MIT / ISC).
              </p>
              <p>
                You are encouraged to star my repos, fork them, dissect the Socket.IO pipelines, and learn from the code patterns. However, taking this portfolio verbatim, swapping my name with yours, and submitting it to your professor or an interviewer is bad karma (and besides, senior devs can spot copied code faster than an ESLint rule).
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="legal-section-card">
            <div className="legal-section-header">
              <span className="legal-section-num">03</span>
              <h2 className="legal-section-heading">The "Render Free Tier Economics" Clause</h2>
            </div>
            <div className="legal-section-body">
              <p>
                My featured app <strong>Wave</strong> is deployed live on Render's web services. If you click the live demo and it takes 15–30 seconds to respond, please do not mash <code>F5</code> forty times in panic. That is simply Render's free container waking up from its well-deserved beauty sleep.
              </p>
              <p>
                Once spinning, the WebSockets stream with zero latency. Cloud economics is a fun balancing act for college students!
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="legal-section-card">
            <div className="legal-section-header">
              <span className="legal-section-num">04</span>
              <h2 className="legal-section-heading">The "It Worked on My Machine" Warranty</h2>
            </div>
            <div className="legal-section-body">
              <p>
                This website and its associated demonstration servers are provided strictly <strong>"as is"</strong>. While I strive for production-grade reliability and test across multiple viewports, 100% bug-free software is a theoretical myth.
              </p>
              <p>
                If you encounter a quirky edge-case bug, a visual rendering glitch on an obscure mobile browser, or a typo, you get +100 developer karma points for pinging me via email or opening an issue on GitHub.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="legal-section-card">
            <div className="legal-section-header">
              <span className="legal-section-num">05</span>
              <h2 className="legal-section-heading">Play Nice (No Cyber-Shenanigans)</h2>
            </div>
            <div className="legal-section-body">
              <p>
                Please don't run automated fuzzers, DDoS stress tests, or malicious payload tests against this site or the contact form. The contact endpoint connects to Web3Forms to send me an email; testing <code>' OR 1=1; DROP TABLE users;--</code> won't give you shell access, it just lands in my spam folder looking slightly silly.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="legal-section-card">
            <div className="legal-section-header">
              <span className="legal-section-num">06</span>
              <h2 className="legal-section-heading">Let's Connect &amp; Collaborate</h2>
            </div>
            <div className="legal-section-body">
              <p>
                Got an inquiry, full-time job opportunity, contract gig, or just want to discuss whether MongoDB or PostgreSQL was better for ride-pooling? Reach me anytime at{' '}
                <a href="mailto:apurbahaldernewwork@gmail.com">
                  apurbahaldernewwork@gmail.com
                </a>
                .
              </p>
            </div>
          </section>
        </div>

        <div className="legal-footer-signature">
          <span>Apurba Halder · Crafted with React 19</span>
          <span>Status: 200 OK · All systems healthy</span>
        </div>
      </div>
    </div>
  );
};

export default Terms;
