import React from "react";

const Home: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="skills-background">
        <span>HTML5</span>
        <span>CSS3</span>
        <span>React</span>
        <span>TypeScript</span>
        <span>Responsive Design</span>
        <span>UI/UX Design</span>
        <span>Node.js</span>
        <span>Express.js</span>
        <span>React Query</span>
        <span>Charts</span>
        <span>Git</span>
        <span>Redux toolkit</span>
        <span>Docker</span>
        <span>Agile Methodologies</span>
      </div>
      <h1>Hi, I'm Aks</h1>
      <div className="cta-buttons">
        <a href="#projects" className="cta-primary">
          View My Work
        </a>
        <a href="#contact" className="cta-secondary">
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Home;
