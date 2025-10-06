import React from "react";
import "./ExperienceSection.css";

const ExperienceScreen = () => {
  return (
    <section id="experiences" className="experience-section">
      <h2>Experiences</h2>
      <div>
      <section>
        <div style={{flexDirection:'row'}}>
          <p>Infosys Private Limited, Bangalore - India</p>
          <p>2022 - present</p>
        </div>
          <ul>
            <li>Working at Infosys with 3.2 years of experience.</li>
          </ul>
      </section>
      </div>
    </section>
  );
};

export default ExperienceScreen;