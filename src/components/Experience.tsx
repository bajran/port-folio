import React from "react";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>

      <div className="experience-item">
        <h3>Senior Frontend Engineer</h3>
        <div className="company">Openenvoy, Remote</div>
        <div className="date">AUG 2020 – JUN 2022</div>
        <ul>
          <li>
            Redeveloped end-to-end registration and login flows, enhancing user
            experience and reducing bugs.
          </li>
          <li>
            Developed scalable design systems, standardizing UI components
            across projects.
          </li>
          <li>
            Optimized web performance with Webpack Bundling, improving page load
            times.
          </li>
          <li>
            Managed frontend projects, rewriting legacy code in React and Redux.
          </li>
        </ul>
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
        <ul>
          <li>
            Worked on VeryMeRewards i.e Loyalty based platform for Vodafone UK.
          </li>
          <li>
            Worked on various reward types as per requirement from client to
            increase the customer engagement on VMR.
          </li>
          <li>
            Collaborated on common component library which is used in entire
            organization for reusable component.
          </li>
          <li>
            Tried to achieve the accessibility by following ADA compliance.
          </li>
        </ul>
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
        <ul>
          <li>
            Developed reusable components like modals, accordions, tooltip etc.
            which were used in internal frontend projects in organization.
          </li>
          <li>
            Added multiple samples for individual components and also given
            flexibility to developer so that they can modify the component code
            and used it according to their needs.
          </li>
          <li>
            Used react-docgen to generate documentation for reusable component.
          </li>
        </ul>
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
        <ul>
          <li>
            Worked on eBusiness, sub product of Aptify Web (an Association
            Platform), which provide ecommerce solution for association of
            client.
          </li>
          <li>
            Created end to end web pages by following mobile first approach
            using html, css and bootstrap and responsive designing.
          </li>
          <li>
            Worked on various feature which includes filtering of product,
            Pagination, Meeting Scheduling, product carousel, google map
            integration etc using React.
          </li>
          <li>Resolved UI related bugs in Aptify Web Platform.</li>
        </ul>
        <div className="tech-stack">
          <span className="tech-tag">HTML5</span>
          <span className="tech-tag">CSS3</span>
          <span className="tech-tag">Javascript</span>
          <span className="tech-tag">KnockoutJs</span>
        </div>
      </div>
    </section>
  );
};

export default Experience;
