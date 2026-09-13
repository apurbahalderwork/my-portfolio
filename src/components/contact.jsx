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
  FaEnvelopeOpenText,
  FaCopy,
  FaCheck
} from 'react-icons/fa6';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setIsSubmitting(true);
    setStatus(null);

    const senderName = formData.name.trim();
    const senderEmail = formData.email.trim();
    const senderMsg = formData.message.trim();

    const customWeb3Key = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    const isCustomWeb3 = customWeb3Key && customWeb3Key !== '142bd010-04cc-4ab5-82a2-e9ef9f85c288';

    let delivered = false;

    if (isCustomWeb3) {
      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: customWeb3Key,
            name: senderName,
            email: senderEmail,
            replyto: senderEmail,
            message: senderMsg,
            subject: `Portfolio Inquiry from ${senderName}`,
            from_name: senderName
          }),
        });
        const data = await res.json();
        if (data.success) {
          delivered = true;
          setStatus({
            type: 'success',
            msg: 'Message sent successfully! Apurba will receive it in his inbox and reply shortly.'
          });
          setFormData({ name: '', email: '', message: '' });
        }
      } catch (err) {
        console.warn('Web3Forms failed, falling back to FormSubmit:', err);
      }
    }

    if (!delivered) {
      try {
        const response = await fetch(`https://formsubmit.co/ajax/${CONTACT.email}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            name: senderName,
            email: senderEmail,
            _replyto: senderEmail,
            message: senderMsg,
            _subject: `New Portfolio Message from ${senderName} (${senderEmail})`,
            _template: 'table',
            _captcha: 'false',
          }),
        });

        const data = await response.json();

        if (data.success === 'true' || data.success === true) {
          setStatus({
            type: 'success',
            msg: 'Message sent successfully! Apurba will receive it in his inbox and get back to you shortly.'
          });
          setFormData({ name: '', email: '', message: '' });
          delivered = true;
        } else if (data.message && data.message.includes('Activation')) {
          setStatus({
            type: 'info',
            msg: "Form submitted! An 'Activate Form' confirmation email was sent to Apurba's Gmail (apurbahaldernewwork@gmail.com). Apurba: please click 'Activate Form' once in your inbox to enable instant delivery for all submissions!"
          });
          delivered = true;
        } else {
          throw new Error(data.message || 'Form submission encountered an issue.');
        }
      } catch (err) {
        console.error('Contact submission error:', err);
        setStatus({
          type: 'error',
          msg: `Could not send automatically. Please click "Direct Email" below or write to ${CONTACT.email}`
        });
      }
    }

    setIsSubmitting(false);
    setTimeout(() => setStatus(null), 9000);
  };

  const handleDirectEmailClick = (e) => {
    if (!/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      e.preventDefault();
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
        CONTACT.email
      )}&su=${encodeURIComponent(
        formData.name ? `Portfolio Inquiry from ${formData.name}` : 'Portfolio Inquiry'
      )}&body=${encodeURIComponent(
        formData.message ? `${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}` : ''
      )}`;
      window.open(gmailUrl, '_blank');
    }
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
                  placeholder="Your Name (or GitHub Handle)"
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
                  placeholder="Tell me about your project, role, or your favorite debugging war story..."
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
                  <span>{isSubmitting ? 'SENDING TO INBOX...' : 'SEND MESSAGE'}</span>
                </button>

                <a
                  href={`mailto:${CONTACT.email}?subject=Portfolio%20Inquiry`}
                  onClick={handleDirectEmailClick}
                  className="direct-email-link"
                  title="Direct email via Gmail or Mail App"
                >
                  <FaEnvelopeOpenText />
                  <span>Direct Email</span>
                </a>
              </div>

              {/* Token-driven status banner — no inline colours */}
              {status && (
                <div className={`contact-status-banner status-${status.type}`}>
                  <FaCircleCheck aria-hidden="true" />
                  <span>{status.msg}</span>
                </div>
              )}
            </form>
          </div>

          {/* Right: Big Invitation Text, Contact Coordinates & Clickable Social Accounts */}
          <div className="contact-statement-col">
            {/* Eyebrow badge removed — heading carries its own weight (Hallmark finding 9) */}
            <h2 className="statement-huge-title">
              LET'S BUILD <br />
              TOGETHER
            </h2>
            <p className="contact-statement-body">
              Have an opening, an ambitious product idea, or want to debate tabs vs spaces? My inbox is open and replies are 100% human (no auto-responders asking to book a 15-minute sync).
            </p>

            {/* Contact coordinate rows — no inline styles */}
            <div className="contact-info-rows-stack">
              <div className="contact-info-row">
                <FaLocationDot className="contact-info-row-icon" aria-hidden="true" />
                <span>{CONTACT.address}</span>
              </div>

              <div className="contact-info-row">
                <FaPhone className="contact-info-row-icon" aria-hidden="true" />
                <a href={`tel:${CONTACT.phoneNo}`} className="contact-info-link">
                  {CONTACT.phoneNo}
                </a>
              </div>

              <div className="contact-info-row">
                <FaEnvelope className="contact-info-row-icon" aria-hidden="true" />
                <a
                  href={`mailto:${CONTACT.email}?subject=Portfolio%20Inquiry`}
                  onClick={handleDirectEmailClick}
                  className="contact-info-link"
                  title="Click to email Apurba"
                >
                  {CONTACT.email}
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className={`copy-email-btn${copied ? ' copied' : ''}`}
                  title="Copy email address"
                  aria-label={copied ? 'Email copied' : 'Copy email address'}
                >
                  {copied ? <FaCheck aria-hidden="true" /> : <FaCopy aria-hidden="true" />}
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Clickable Social Profile Cards/Pills */}
            <div className="contact-socials-wrapper">
              <span className="contact-socials-heading">SOCIAL PROFILES &amp; ACCOUNTS</span>
              <div className="contact-social-pills-grid">
                <a href={CONTACT.facebook} target="_blank" rel="noreferrer" className="contact-social-pill" aria-label="Facebook Profile">
                  <FaFacebookF className="social-pill-icon" aria-hidden="true" />
                  <span>Facebook</span>
                </a>
                <a href={CONTACT.instagram} target="_blank" rel="noreferrer" className="contact-social-pill" aria-label="Instagram Profile">
                  <FaInstagram className="social-pill-icon" aria-hidden="true" />
                  <span>Instagram</span>
                </a>
                <a href={CONTACT.github} target="_blank" rel="noreferrer" className="contact-social-pill" aria-label="GitHub Profile">
                  <FaGithub className="social-pill-icon" aria-hidden="true" />
                  <span>GitHub</span>
                </a>
                <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="contact-social-pill" aria-label="LinkedIn Profile">
                  <FaLinkedinIn className="social-pill-icon" aria-hidden="true" />
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
