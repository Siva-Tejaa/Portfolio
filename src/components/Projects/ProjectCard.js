import React from 'react';
import './ProjectCard.css';

import { projectsData } from '../utils/Data';

import { BsArrowRightShort } from 'react-icons/bs';

const ProjectCard = () => {
  return (
    <div className="project-card">
      {
        projectsData.map((project) => (
          <div key={project.id} className="card">
            <div className="project-image">
              <img src={project.image} alt={project.title} className="project-image-self"/>
            </div>
            
              <span className="project-title-self">{project.title}</span>
              <div className="project-data">
                <a href={project.demo} target="_blank" className="demo">Demo<BsArrowRightShort /></a>
                <a href={project.repo} target="_blank"  className="repo">Repo<BsArrowRightShort /></a>
              </div>
            
          </div>
        ))
      }
    </div>
  );
};
export default ProjectCard;
