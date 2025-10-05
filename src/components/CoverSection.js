import React from "react";
import "./ContactSection.css";

const CoverSection = () => {
  return (
    <section id="cover" className="cover-section">
      <h2>Cover Me</h2>
      <p>Here I have provided below few cover pages of the projects which I have developed</p>
      <img src="/cover.jpeg" alt="Cover" height={500} width={"auto"} style={{minHeight:200,minWidth:200}}/>
    </section>
  );
};

export default CoverSection;
