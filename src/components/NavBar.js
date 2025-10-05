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
      <ul>
        <li onClick={() => scrollTo("about")}>About</li>
        <li onClick={() => scrollTo("projects")}>Projects</li>
        <li onClick={() => scrollTo("contact")}>Contact</li>
      </ul>
    </nav>
  );
};

export default NavBar;
