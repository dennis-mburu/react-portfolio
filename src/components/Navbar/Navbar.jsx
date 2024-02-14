import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  function toggleActive() {
    setIsActive(!isActive);
  }

  function removeActive() {
    setIsActive(false);
  }

  return (
    <header>
      <nav className="navbar">
        <div className="brand">Logo</div>
        <ul className={`nav-menu ${isActive ? "active" : ""}`}>
          <li className="nav-item">
            <a href="#" className="nav-link" onClick={removeActive}>
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link" onClick={removeActive}>
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link" onClick={removeActive}>
              Contacts
            </a>
          </li>
        </ul>
        {/* <button>Downloaad Resume</button> */}
        <div
          className={`hambuger ${isActive ? "active" : ""}`}
          onClick={toggleActive}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
