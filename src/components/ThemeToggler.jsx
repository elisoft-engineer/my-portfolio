import { useTheme } from "../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function ThemeToggle() {
  const { appliedTheme, toggleTheme } = useTheme();

  return (
    <div className="theme-toggler" onClick={toggleTheme}>
      <FontAwesomeIcon icon={appliedTheme === 'dark' ? faMoon : faSun} />
    </div>
  );
}