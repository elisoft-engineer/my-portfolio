import { useState, useEffect, useRef } from "react";

import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const dropdownRef = useRef(null);
  const togglerRef = useRef(null);
  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        togglerRef.current &&
        !togglerRef.current.contains(event.target)
      ) {
        setIsCollapsed(true); // collapse menu
      }
    };

    if (!isCollapsed) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isCollapsed]);

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <NavLink to="/" className="brand">
          <span className="first">Elkana</span>
          <span className="last">Maina</span>
        </NavLink>
        <div className="nav-links">
          <NavLink className="link" to="/">Home</NavLink>
          <NavLink className="link" to="/projects">Projects</NavLink>
          <NavLink className="link" to="/skills">Skills</NavLink>
          <NavLink className="link" to="/certifications">Certificates</NavLink>
          <ThemeToggle className="theme-toggler" />
        </div>
        <div ref={togglerRef} id="nav-toggler" className="nav-toggler" onClick={() => setIsCollapsed(!isCollapsed)}>
          <FontAwesomeIcon icon={isCollapsed ? faBars : faTimes } className="icon" />
        </div>
        <div ref={dropdownRef} className={`dropdown-menu ${!isCollapsed ? "open" : ""}`}>
          <NavLink className="link" to="/" onClick={() => setIsCollapsed(true)}>Home</NavLink>
          <NavLink className="link" to="/projects" onClick={() => setIsCollapsed(true)}>Projects</NavLink>
          <NavLink className="link" to="/skills" onClick={() => setIsCollapsed(true)}>Skills</NavLink>
          <NavLink className="link" to="/certifications" onClick={() => setIsCollapsed(true)}>Certificates</NavLink>
          <ThemeToggle className="theme-toggler" />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;