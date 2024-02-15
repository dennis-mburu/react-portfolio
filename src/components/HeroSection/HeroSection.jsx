import React from "react";
import "./HeroSection.css";
import HoverGlowButton from "../HoverGlowButton/HoverGlowButton";

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-text">
        <p className="lead-text">
          Hey, I'm Dennis
          <br />
          <span className="large-text">
            Full Stack <br />
            Developer
          </span>
        </p>
        <p className="description">
          Experienced developer passionate about creating seamless digital
          experiences and specializing in crafting innovative solutions that
          empower businesses and delight users.
        </p>
        <p className="description">
          From building intuitive user interfaces to architecting scalable
          backend systems, I bring creativity, precision, and expertise to every
          project.
        </p>
        <p className="description">
          Let's collaborate to build transformative web applications that make a
          lasting impact.
        </p>
        <div className="btn-container">
          <HoverGlowButton />
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/img1.png" alt="profile pic" />
      </div>
    </div>
  );
}

export default HeroSection;
