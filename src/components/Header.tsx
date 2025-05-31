import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import type { IconType } from "react-icons";

const Header: React.FC = () => {
  const GithubIcon = FaGithub as unknown as React.ComponentType<{
    size: number;
  }>;
  const LinkedInIcon = FaLinkedin as unknown as React.ComponentType<{
    size: number;
  }>;

  return (
    <header className="header">
      <nav className="nav">
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
      </nav>
    </header>
  );
};

export default Header;
