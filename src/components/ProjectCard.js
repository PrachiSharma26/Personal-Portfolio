import React from "react";

export const ProjectCard = ({ title, description, imgUrl,  link }) => {
  return (
    <div className="project-card">
      <div className="project-content">
        <div className="project-img">
          <img src={imgUrl} alt={title} />
        </div>
        <div className="project-info">
          <h3>{title}</h3>
          <p className="descr">{description}</p>
          {link && <a href={link} target="_blank" rel="noopener noreferrer">Click to open</a>}
       
        </div>
      </div>
    </div>
  );
};
