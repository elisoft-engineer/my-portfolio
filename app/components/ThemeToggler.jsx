import { useState, useEffect } from "react";

import { useTheme } from "../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function ThemeToggle() {
  const { appliedTheme, toggleTheme } = useTheme();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="theme-toggler" onClick={toggleTheme}>
      <FontAwesomeIcon icon={appliedTheme === 'dark' ? faMoon : faSun} />
      {isMobile ? <div className="text">{appliedTheme + " mode"}</div> : <></>}
    </div>
  );
}