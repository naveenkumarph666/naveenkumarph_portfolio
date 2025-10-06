import React from "react";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <p style={{fontSize:30,fontFamily:'inherit'}}>Naveen Kumar Ponthalahari</p>
      <p>
        I am a React Native Developer with <span style={{fontWeight:'bold'}}>3.2</span> years of professional experience at Infosys. Proficient in building and deploying, scalable, <span style={{fontWeight:'bold'}}>web and mobile applications </span>efficient
        to deliver outstanding user experiences.
      </p>
      <p>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download my Resume</a>
      </p>
    </section>
  );
};

export default AboutSection;
