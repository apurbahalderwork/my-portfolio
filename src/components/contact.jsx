import React, { useState } from 'react';
import { CONTACT } from '../react-portfolio-assets-kevin-main/constants';
import {
  FaCircleCheck,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaPaperPlane,
  FaEnvelopeOpenText
} from 'react-icons/fa6';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '142bd010-04cc-4ab5-82a2-e9ef9f85c288';

    if (accessKey) {
      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: accessKey,
            name: formData.name,
            email: formData.email,
            replyto: formData.email,
            message: formData.message,
            subject: `Portfolio Inquiry from ${formData.name}`,
            from_name: formData.name
          }),
        });
        const data = await res.json();
        if (data.success) {
          setStatus({
            type: 'success',
            msg: 'Message sent successfully! Apurba will get back to you shortly.'
          });
          setFormData({ name: '', email: '', message: '' });
        } else {
          throw new Error(data.message || 'Error submitting form');
        }
      } catch {
        // Fallback directly to mailto
        const mailtoUrl = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
          `Portfolio Message from ${formData.name}`
        )}&body=${encodeURIComponent(
          `Hi Apurba,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`
        )}`;
        window.location.href = mailtoUrl;
        setStatus({
          type: 'info',
          msg: 'Opening your default email app to send your message directly to Apurba.'
        });
      }
    } else {
      // Direct reliable mailto dispatch
      const mailtoUrl = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
        `Portfolio Message from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Hi Apurba,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`
      )}`;
      window.location.href = mailtoUrl;
      setStatus({
        type: 'success',
        msg: 'Opening your email client to send this message directly to Apurba!'
      });
      setFormData({ name: '', email: '', message: '' });
    }

    setIsSubmitting(false);
    setTimeout(() => setStatus(null), 8000);
  };

  return (
    <section className="framer-contact-section" id="contact">
      <div className="contact-banner-box">
        <div className="contact-banner-grid">
          {/* Left: Floating Form Card */}
          <div className="contact-form-card">
            <div className="form-card-header">
              <span className="brand-signature">Apurba Halder<span className="reg-mark">®</span></span>
              <h3 className="form-heading">Send a Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="contact-compact-form">
              <div className="form-field-group">
                <label htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-field-group">
                <label htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="your.email@example.com"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-field-group">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  rows="3"
                  placeholder="Your message or opportunity details..."
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <div className="contact-direct-actions">
                <button
                  type="submit"
                  className="contact-submit-btn"
                  disabled={isSubmitting}
                >
                  <FaPaperPlane />
                  <span>{isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}</span>
                </button>

                <a
                  href={`mailto:${CONTACT.email}?subject=Portfolio%20Inquiry`}
                  className="direct-email-link"
                  title="Direct email without form"
                >
                  <FaEnvelopeOpenText />
                  <span>Email Directly</span>
                </a>
              </div>

              {status && (
                <div className="contact-success-msg" style={{ color: status.type === 'info' ? '#38bdf8' : '#10b981' }}>
                  <FaCircleCheck /> <span>{status.msg}</span>
                </div>
              )}
            </form>
          </div>

          {/* Right: Big Invitation Text, Contact Coordinates & Clickable Social Accounts */}
          <div className="contact-statement-col">
            <div className="framer-pill-badge badge-white">
              <span>GET IN TOUCH</span>
            </div>

            <h2 className="statement-huge-title">
              LET'S BUILD <br />
              TOGETHER
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.05rem', color: 'rgba(255, 255, 255, 0.9)' }}>
                <span style={{ color: 'var(--primary-orange)', fontSize: '1.1rem' }}><FaLocationDot /></span>
                <span>{CONTACT.address}</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.05rem', color: 'rgba(255, 255, 255, 0.9)' }}>
                <span style={{ color: 'var(--primary-orange)', fontSize: '1.1rem' }}><FaPhone /></span>
                <a href={`tel:${CONTACT.phoneNo}`} style={{ color: 'var(--white)', fontWeight: 600 }}>
                  {CONTACT.phoneNo}
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.05rem', color: 'rgba(255, 255, 255, 0.9)' }}>
                <span style={{ color: 'var(--primary-orange)', fontSize: '1.1rem' }}><FaEnvelope /></span>
                <a href={`mailto:${CONTACT.email}`} style={{ color: 'var(--white)', fontWeight: 600 }}>
                  {CONTACT.email}
                </a>
              </div>
            </div>

            {/* Clickable Social Profile Cards/Pills */}
            <div className="contact-socials-wrapper">
              <span className="contact-socials-heading">SOCIAL PROFILES &amp; ACCOUNTS</span>
              <div className="contact-social-pills-grid">
                <a
                  href={CONTACT.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-social-pill"
                  aria-label="Facebook Profile"
                >
                  <FaFacebookF className="social-pill-icon" />
                  <span>Facebook</span>
                </a>

                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-social-pill"
                  aria-label="Instagram Profile"
                >
                  <FaInstagram className="social-pill-icon" />
                  <span>Instagram</span>
                </a>

                <a
                  href={CONTACT.github}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-social-pill"
                  aria-label="GitHub Profile"
                >
                  <FaGithub className="social-pill-icon" />
                  <span>GitHub</span>
                </a>

                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-social-pill"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedinIn className="social-pill-icon" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
