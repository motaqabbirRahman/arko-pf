import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/navBar.css";

const NavBar = (props) => {
  const { active } = props;
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <React.Fragment>
      <div className={`nav-container ${isMenuOpen ? "menu-open" : ""}`}>
        <nav className={`navbar ${isMenuOpen ? "active" : ""}`}>
          <div className="nav-background">
            <div className="menu-btn" onClick={toggleMenu}>
              ☰
            </div>
            <ul className={`nav-list ${isMenuOpen ? "open" : ""}`}>
              <li className={active === "home" ? "nav-item active" : "nav-item"}>
                <Link to="/">Home</Link>
              </li>
              <li className={active === "about" ? "nav-item active" : "nav-item"}>
                <Link to="/about">About</Link>
              </li>
              <li className={active === "projects" ? "nav-item active" : "nav-item"}>
                <Link to="/projects">Projects</Link>
              </li>
              <li className={active === "publications" ? "nav-item active" : "nav-item"}>
                <Link to="/publications">Publications</Link>
              </li>
              <li className={active === "achievements" ? "nav-item active" : "nav-item"}>
                <Link to="/achievements">Achievements</Link>
              </li>
              <li className={active === "exploration" ? "nav-item active" : "nav-item"}>
                <Link to="/explorations">Explorations</Link>
              </li>
               <li className={active === "contact" ? "nav-item active" : "nav-item"}>
                <Link to="/contact">Contact</Link>
              </li>
               
            </ul>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default NavBar;
