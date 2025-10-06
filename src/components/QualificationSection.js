import React from "react";
import './QualificationSection.css'

const QualificationSection = () =>{
    return(<>
    <section id="qualifications" className="qualification-section">
      <h2>Qualifications</h2>
      <div className="qualification-grid">
      <section className="qualification-card">
        <p>Bachelors of Degree</p>
        <ul>
        <li>SVS College of Engineering, Coimbatore</li>
        <li>Mechanical Engineering</li>
        <li>Completed with 8.09 CPGA</li>
        </ul>
      </section>
      <section className="qualification-card">
        <p>Intermediate</p>
        <ul>
        <li>Narayana junior College, Tirupati</li>
        <li>Completed with 91%</li>
        </ul>
      </section>
      <section className="qualification-card">
        <p>SSC</p>
        <ul>
        <li>Sri Baba Vidyanikethan High School, Tirupati</li>
        <li>Completed with 8.3 CGPA</li>
        </ul>
      </section>
      </div>
    </section>
    </>)
}

export default QualificationSection;