import React, { useState } from 'react';
import './Project.css';

const Project = ({ title, description, pictures = [], github }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextClick = () => {
    const nextIndex = (currentImageIndex + 1) % pictures.length;
    setCurrentImageIndex(nextIndex);
  };

  const handlePrevClick = () => {
    const prevIndex = (currentImageIndex - 1 + pictures.length) % pictures.length;
    setCurrentImageIndex(prevIndex);
  };

  const renderGithubLink = () => {
    return (
      <a href={github} target="_blank" rel="noopener noreferrer" className="github-link">source code</a>
    );
  };

  return (
    <div className="project">
      <div className="project-description">
        <h2>{title}</h2>
        {/* Conditional rendering based on the presence of the github prop */}
        {github ? <div className="project-github-links">{renderGithubLink()}</div> : null}
        <p>{description}</p>
      </div>
      {pictures.length > 0 && (
        <div className="project-images">
          {pictures.length > 1 && <button onClick={handlePrevClick} className="chevron">&lt;</button>}
          <img src={pictures[currentImageIndex]} alt={title} />
          {pictures.length > 1 && <button onClick={handleNextClick} className="chevron">&gt;</button>}
        </div>
      )}
    </div>
  );
};

export default Project;
