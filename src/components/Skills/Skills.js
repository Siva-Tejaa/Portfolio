import React from 'react';
import './Skills.css';

import { techStack } from '../utils/Data';

const Skills = () => {
  return (
    <div id="skills">
      
      <div className="skills-heading">
        <h1 className="skills-title">Skills</h1>
        <span className="skills-subtitle">My Technical Level</span>
      </div>
      <div className="tech-stack">
        {
          techStack.map((tech) => (
            
            <div className="tech-card" key={tech.name} >

              <img src={tech.link} className="tech-img" alt={tech.name}/>

                <div>
                <h4>{tech.name}</h4>
                 <p className="level">{tech.level}</p>
                </div>
                 
              
            </div>
          ))
        }
      </div>

    </div>
  );
};
export default Skills;
