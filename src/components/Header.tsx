import React from "react";

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="nav">
        <a href="#" className="logo">
          AKSHAY BIYANI
        </a>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a
              href="/resume/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-button"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
