import React from 'react';
import Project from './Project';
import './Projects.css';
import projectsData from './projectsData'; // Adjust the path as necessary

function Projects() {
  return (
    <div className='projects'>
      <h1 className='projects-banner'>Projects</h1> {/* Changed from <title> to <h1> for in-document heading */}
      {projectsData.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          description={project.description}
          pictures={project.pictures}
          github={project.github}
        />
      ))}
    </div>
  );
}

export default Projects;
