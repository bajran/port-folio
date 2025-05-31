import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        <div className="project-card">
          <a
            href="https://kyaml2go.prasadg.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-image-link"
          >
            <img
              src="/images/kyaml2go.png"
              alt="kyaml2go website screenshot"
              className="project-image"
            />
          </a>
          <div className="project-content">
            <h3>kyaml2go</h3>
            <p>
              A Kubernetes client-go code generator for resource YAMLs. Created
              a modern and user-friendly interface for developers to generate Go
              type definitions from YAML specifications.
            </p>
            <div className="project-details">
              <h4>What I did:</h4>
              <ul>
                <li>
                  Created UI for the project, including code markup and theme
                  changes
                </li>
                <li>Developed in plain HTML, CSS, and JavaScript</li>
                <li>Implemented a clean and intuitive user interface</li>
              </ul>
            </div>
            <div className="tech-stack">
              <span className="tech-tag">HTML</span>
              <span className="tech-tag">CSS</span>
              <span className="tech-tag">JavaScript</span>
              <span className="tech-tag">UI/UX</span>
            </div>
            <div className="project-links">
              <a
                href="https://kyaml2go.prasadg.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-primary"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <a
            href="https://github.com/bajran/corona-tracker"
            target="_blank"
            rel="noopener noreferrer"
            className="project-image-link"
          >
            <img
              src="/images/goCorona.gif"
              alt="Corona Tracker screenshot"
              className="project-image"
            />
          </a>
          <div className="project-content">
            <h3>Corona Tracker</h3>
            <p>
              A project to track Covid-19 data during the pandemic period.
              Developed using React Hooks and integrates with the
              api.covid19api.com for data.
            </p>
            <div className="project-details">
              <h4>What I did:</h4>
              <ul>
                <li>Developed the user interface using React Hooks</li>
                <li>Integrated with the api.covid19api.com to fetch data</li>
                <li>
                  Implemented data visualization for tracking Covid-19
                  statistics
                </li>
              </ul>
            </div>
            <div className="tech-stack">
              <span className="tech-tag">React</span>
              <span className="tech-tag">API Integration</span>
            </div>
            <div className="project-links">
              <a
                href="https://github.com/bajran/corona-tracker"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-secondary"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
