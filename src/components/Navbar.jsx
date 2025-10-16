import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggler";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav class="navbar">
        <div class="brand">
          <a class="name" href="index.html">
            <span class="first">Elkana</span>
            <span class="last">Maina</span>
          </a>
        </div>
        <div class="nav-links">
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