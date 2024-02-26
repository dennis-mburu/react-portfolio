import React, { useRef, useEffect } from "react";
import "./Projects.css";
import profile from "../../profile";

function Projects() {
  const imgRef = useRef(null);

  // useEffect(() => {
  //   const imgHeight = imgRef.current.clientHeight;
  //   const projectCard = document.querySelector(".project-card");
  //   if (projectCard) {
  //     projectCard.style.height = `${imgHeight}px`;
  //   }
  // }, []);
  return (
    <div className="projects-section">
      <h1>Projects</h1>
      <div className="project-grid">
        {profile.projects.map((project) => (
          <>
            <div className="project-card" key={project.name}>
              <div className="card-inner">
                <div className="card-front">
                  <img ref={imgRef} src={project.image} alt="screenshot" />
                </div>
                <div className="card-back">
                  <p>
                    {/* A fully functional e-commerce platform built using the MERN
                  stack and Redux toolkit. */}
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Projects;
