import React from "react";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills">
      <h2>Skills & Expertise</h2>
      <div className="skills-grid">
        <div className="skill-category">
          <h3>Frontend Development</h3>
          <ul className="skill-list">
            <li>React.js</li>
            <li>TypeScript</li>
            <li>HTML5 & CSS3</li>
            <li>Responsive Design</li>
            <li>UI/UX Design</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Backend Development</h3>
          <ul className="skill-list">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Python</li>
            <li>RESTful APIs</li>
            <li>Database Design</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Tools & Technologies</h3>
          <ul className="skill-list">
            <li>Git & GitHub</li>
            <li>Docker</li>
            <li>AWS</li>
            <li>CI/CD</li>
            <li>Agile Methodologies</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
