import React from 'react';
import { EXPERIENCES } from '../react-portfolio-assets-kevin-main/constants';
import { FaBriefcase, FaCalendar, FaCheck } from 'react-icons/fa6';

const Experience = () => {
  return (
    <section className="framer-process-section" id="experience">
      <div className="process-header-center">
        <div className="framer-pill-badge badge-center">
          <span>CAREER HISTORY</span>
        </div>
        <h2 className="process-main-title">
          WORK EXPERIENCE &amp; <br />
          TECHNICAL LEADERSHIP
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: '2rem' }}>
        {EXPERIENCES.map((exp, idx) => (
          <div key={idx} className="process-card-dark card-3d-hover" style={{ padding: '2.5rem' }}>
            <div className="process-card-top" style={{ marginBottom: '1.5rem' }}>
              <div className="process-star-icon">
                <FaBriefcase />
              </div>
              <span className="process-step-num" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <FaCalendar /> {exp.year}
              </span>
            </div>

            <h3 className="process-card-title" style={{ fontSize: '1.45rem', marginBottom: '0.25rem' }}>
              {exp.role}
            </h3>
            <div style={{ color: 'var(--primary-orange)', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', marginBottom: '0.75rem' }}>
              {exp.company}
            </div>

            {exp.badge && (
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                color: '#10b981',
                background: 'rgba(16, 185, 129, 0.12)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                padding: '4px 12px',
                borderRadius: '4px',
                marginBottom: '1.5rem',
                width: 'fit-content'
              }}>
                <FaCheck />
                <span>{exp.badge}</span>
              </div>
            )}

            <p className="process-card-desc" style={{ fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              {exp.description}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: 'auto', paddingTop: '1.25rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
              {exp.technologies.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    padding: '4px 10px',
                    borderRadius: '4px',
                    background: 'rgba(255, 255, 255, 0.06)',
                    color: '#ccc',
                    border: '1px solid rgba(255, 255, 255, 0.08)'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
