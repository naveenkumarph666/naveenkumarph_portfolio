import React from "react";
import "./NavBar.css";

const NavBar = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <scroll horizontal>

      <ul>
        <li onClick={() => scrollTo("about")}>About</li>
        <li onClick={() => scrollTo("projects")}>Projects</li>
        <li onClick={() => scrollTo('skills')}>Skills</li>
        {/* <li onClick={() => scrollTo('experiences')}>Experiences</li> */}
        <li onClick={() => scrollTo('qualifications')}>Qualifications</li>
        <li onClick={() => scrollTo("contact")}>Contact</li>
      </ul>
      </scroll>
    </nav>
  );
};

export default NavBar;
