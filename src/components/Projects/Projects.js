import React from 'react';
import './Projects.css';

import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div id="projects" className="project-section">
      <section className="work section" id="portfolio">
        <h2 className="project-title">Project Portfolio</h2>
        <span className="project-subtitle">What I Build</span>

        <ProjectCard />
      </section>
    </div>
  );
};
export default Projects;
