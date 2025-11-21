import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggler";

const Navbar = () => {
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
      </nav>
    </div>
  );
}

export default Navbar;