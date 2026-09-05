import React from 'react';
import { EDUCATION } from '../react-portfolio-assets-kevin-main/constants';
import { FaGraduationCap, FaCalendarDays } from 'react-icons/fa6';

const Education = () => {
  return (
    <section className="framer-bento-section" id="education">
      <div className="bento-header">
        <div className="framer-pill-badge">
          <span>ACADEMIC BACKGROUND</span>
        </div>
        <h2 className="bento-main-title">
          EDUCATION &amp; <br />
          COHORT LEADERSHIP
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2rem' }}>
        {EDUCATION.map((edu, idx) => (
          <div key={idx} className="bento-card card-3d-hover" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '8px',
                background: 'var(--primary-orange-tint)',
                color: 'var(--primary-orange)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.35rem'
              }}>
                <FaGraduationCap />
              </div>

              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: 'var(--text-muted-dark)',
                background: 'rgba(0, 0, 0, 0.04)',
                padding: '4px 10px',
                borderRadius: '4px'
              }}>
                <FaCalendarDays />
                <span>{edu.duration}</span>
              </div>
            </div>

            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '0.25rem' }}>
              {edu.degree}
            </h3>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700, color: 'var(--primary-orange)', marginBottom: '1rem' }}>
              {edu.institution}
            </div>

            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted-dark)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              {edu.details}
            </p>

            {edu.coursework && edu.coursework.length > 0 && (
              <div style={{ marginTop: 'auto', paddingTop: '1.25rem', borderTop: '1px solid var(--border-light)' }}>
                <span style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted-dark)', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Core Coursework:
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {edu.coursework.map((course, cIdx) => (
                    <span key={cIdx} className="service-tag-pill" style={{ fontSize: '0.72rem' }}>
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
