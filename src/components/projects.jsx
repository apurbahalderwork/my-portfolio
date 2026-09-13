import React from 'react';
import { PROJECTS } from '../react-portfolio-assets-kevin-main/constants';
import { FaArrowRight, FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6';

const Projects = () => {
  return (
    <section className="framer-projects-section" id="projects">
      <div className="projects-header-row">
        {/* Eyebrow badge removed — heading carries its own weight (Hallmark finding 9) */}
        <h2 className="projects-main-title">
          FEATURED PROJECTS.
        </h2>
      </div>

      <div className="projects-staggered-grid">
        {PROJECTS.map((project, idx) => (
          <div
            key={idx}
            className={`project-staggered-card card-3d-hover card-index-${idx}`}
          >
            <div className="project-card-image-wrap">
              <img src={project.image} alt={project.title} className="project-card-img" />

              {/* Hover overlay with live / github links */}
              <div className="project-card-overlay">
                <div className="overlay-links-row">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="project-action-btn live-btn"
                      aria-label="Live Demo"
                    >
                      <FaArrowUpRightFromSquare aria-hidden="true" />
                      <span>Live App</span>
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project-action-btn git-btn"
                      aria-label="GitHub Repository"
                    >
                      <FaGithub aria-hidden="true" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom metadata strip */}
            <div className="project-card-footer">
              <div className="project-title-group">
                <span className="footer-dot">◉</span>
                <span className="footer-name">{project.title.split(':')[0]}</span>
              </div>
              <span className="footer-category">{project.badge}</span>
            </div>

            {/* Description & Tech Tags — no inline styles */}
            <div className="project-card-body">
              <p className="project-desc-text">{project.description}</p>
              <div className="project-tech-tags">
                {project.technologies.slice(0, 4).map((tech, tIdx) => (
                  <span key={tIdx} className="service-tag-pill" style={{ fontSize: '0.7rem' }}>
                    {tech}
                  </span>
                ))}
              </div>

              {/* Accessible direct action links */}
              <div className="project-inline-actions">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link-btn btn-live"
                    aria-label={`Launch ${project.title} Live Application`}
                  >
                    <FaArrowUpRightFromSquare aria-hidden="true" />
                    <span>Live Demo</span>
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link-btn btn-source"
                    aria-label={`View ${project.title} Source Code on GitHub`}
                  >
                    <FaGithub aria-hidden="true" />
                    <span>Source Code</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* GitHub Profile Button */}
      <div className="projects-cta-center">
        <a
          href="https://github.com/apurbahalderwork?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="framer-all-projects-btn"
        >
          <span className="btn-label">ALL REPOSITORIES ON GITHUB</span>
          <span className="btn-arrow-box">
            <FaArrowRight aria-hidden="true" />
          </span>
        </a>
      </div>
    </section>
  );
};

export default Projects;
