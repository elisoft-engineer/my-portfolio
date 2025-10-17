import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggler";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="brand">
          <a className="name" href="index.html">
            <span className="first">Elkana</span>
            <span className="last">Maina</span>
          </a>
        </div>
        <div className="nav-links">
          <NavLink className="link" to="/">Home</NavLink>
          <NavLink className="link" to="/projects">Projects</NavLink>
          <NavLink className="link" to="/skills">Skills</NavLink>
          <NavLink className="link" to="/certificates">Certificates</NavLink>
          <ThemeToggle className="theme-toggler" />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;