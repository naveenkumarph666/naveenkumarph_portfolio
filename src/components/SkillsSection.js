import React from "react";
import "./SkillsSection.css";

const SkillsScreen = () => {
  return (
    <section id="skills" className="skill-section">
      <h2>Skills</h2>
      <div>
      <section>
        <p>Front End</p>
        <ul>
        <li>HTML & CSS</li>
        <li>JavaScript</li>
        <li>React.js</li>
        <li>React Native</li>
        <li>Bootstrap</li>
        <li>TailwindCSS</li>
        </ul>
      </section>
      <section>
        <p>Back End</p>
        <ul>
        <li>Node.js</li>
        <li>Firebase</li>
        </ul>
      </section>
      <section>
        <p>Database</p>
        <ul>
        <li>SQL</li>
        <li>MongoDB</li>
        </ul>
      </section>
      </div>
    </section>
  );
};

export default SkillsScreen;