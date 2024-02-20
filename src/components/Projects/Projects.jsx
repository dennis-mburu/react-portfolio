import React, { useRef, useEffect } from "react";
import "./Projects.css";
function Projects() {
  const imgRef = useRef(null);

  useEffect(() => {
    const imgHeight = imgRef.current.clientHeight;
    const projectCard = document.querySelector(".project-card");
    if (projectCard) {
      projectCard.style.height = `${imgHeight}px`;
    }
  }, []);
  return (
    <div className="projects-section">
      <h1>Projects</h1>
      <div className="project-card">
        <div className="card-inner">
          <div className="card-front">
            <img ref={imgRef} src="/images/emall-v2.png" alt="screenshot" />
          </div>
          <div className="card-back">
            <p>
              A fully functional e-commerce platform built using the MERN stack
              and Redux toolkit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
