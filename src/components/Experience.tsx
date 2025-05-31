import React from "react";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>

      <div className="timeline-container">
        <div className="experience-item">
          <h3>Senior Frontend Engineer</h3>
          <div className="company">Openenvoy, Remote</div>
          <div className="date">AUG 2020 – JUN 2022</div>

          <div className="tech-stack">
            <span className="tech-tag">Javascript</span>
            <span className="tech-tag">React</span>
            <span className="tech-tag">Typescript</span>
            <span className="tech-tag">Redux</span>
          </div>
        </div>

        <div className="experience-item">
          <h3>Software Engineer</h3>
          <div className="company">Tenerity, Remote</div>
          <div className="date">OCT 2019 – AUG 2020</div>

          <div className="tech-stack">
            <span className="tech-tag">Javascript</span>
            <span className="tech-tag">React</span>
            <span className="tech-tag">Redux</span>
            <span className="tech-tag">React-Testing-Library</span>
          </div>
        </div>

        <div className="experience-item">
          <h3>Software Engineer</h3>
          <div className="company">Arezzosky (Optymyze), Pune</div>
          <div className="date">APRIL 2017 – APRIL 2019</div>

          <div className="tech-stack">
            <span className="tech-tag">React</span>
            <span className="tech-tag">Jest</span>
            <span className="tech-tag">React-docgen</span>
          </div>
        </div>

        <div className="experience-item">
          <h3>Software Developer</h3>
          <div className="company">Aptify, Pune</div>
          <div className="date">APRIL 2017 – APRIL 2019</div>

          <div className="tech-stack">
            <span className="tech-tag">HTML5</span>
            <span className="tech-tag">CSS3</span>
            <span className="tech-tag">Javascript</span>
            <span className="tech-tag">KnockoutJs</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
