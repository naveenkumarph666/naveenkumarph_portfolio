import React from "react";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <p style={{fontSize:30,fontFamily:'inherit'}}>Naveen Kumar Ponthalahari</p>
      <p style={{fontWeight:'lighter'}}>Working at Infosys with <span style={{fontWeight:'bold'}}>3.2</span> years of experience</p>
      <p>
        I am a React Native developer, passionate about mobile and web development. Here is a short intro.
      </p>
      <p>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download my Resume</a>
      </p>
    </section>
  );
};

export default AboutSection;
