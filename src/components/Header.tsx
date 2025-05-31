import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import type { IconType } from "react-icons";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const GithubIcon = FaGithub as unknown as React.ComponentType<{
    size: number;
  }>;
  const LinkedInIcon = FaLinkedin as unknown as React.ComponentType<{
    size: number;
  }>;

  return (
    <header className="header">
      <nav className="nav">
        <div
          className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="nav-container">
          <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            <li>
              <a href="#home" onClick={() => setIsMenuOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setIsMenuOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" onClick={() => setIsMenuOpen(false)}>
                Skills
              </a>
            </li>
            <li>
              <a href="#experience" onClick={() => setIsMenuOpen(false)}>
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => setIsMenuOpen(false)}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </a>
            </li>
            <li>
              <a
                href="/port-folio/resume/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-button"
                onClick={() => setIsMenuOpen(false)}
              >
                Resume
              </a>
            </li>
          </ul>
          <div className="header-right-links">
            <ul>
              <li>
                <a
                  href="https://github.com/bajran"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="GitHub"
                >
                  <GithubIcon size={20} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/youraksh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
