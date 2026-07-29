"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useState, useEffect, useRef } from "react";
import { Menu, MoonStar, SunMedium, X } from "lucide-react";
import { useTheme } from "next-themes";
import styles from "./navbar.module.css";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  onClick?: () => void;
}

const NavLink = ({ href, children, onClick }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`${styles.link} ${isActive ? styles.active : ""}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

const Navbar = () => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const togglerRef = useRef<HTMLButtonElement>(null);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        togglerRef.current &&
        !togglerRef.current.contains(event.target as Node)
      ) {
        setIsCollapsed(true);
      }
    };

    if (!isCollapsed) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isCollapsed]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className={styles.navbarContainer}>
      <nav className={styles.navbar}>
        {/* Brand Pill (Left) */}
        <Link href="/" className={styles.brandPill}>
          <span className={styles.first}>Elkana</span>
          <span className={styles.last}>Maina</span>
        </Link>

        {/* Right Dock: Links Pill + Controls Pill */}
        <div className={styles.dock}>
          {/* Links Pill (Middle/Desktop) */}
          <div className={styles.linksPill}>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/skills">Skills</NavLink>
            <NavLink href="/certifications">Certificates</NavLink>
          </div>

          {/* Controls Pill (Right) */}
          <div className={styles.controlsPill}>
            <button
              type="button"
              className={styles.themeToggle}
              onClick={toggleTheme}
              aria-label="Toggle Theme"
            >
              {mounted && theme === "light" ? (
                <SunMedium size={18} />
              ) : mounted ? (
                <MoonStar size={18} />
              ) : (
                <span className={styles.iconPlaceholder} />
              )}
            </button>

            {/* Mobile Nav Toggler */}
            <button
              ref={togglerRef}
              className={styles.mobileToggler}
              onClick={() => setIsCollapsed(!isCollapsed)}
              aria-label="Toggle Menu"
            >
              {isCollapsed ? <Menu size={18} /> : <X size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          ref={dropdownRef}
          className={`${styles.dropdownMenu} ${!isCollapsed ? styles.open : ""}`}
        >
          <NavLink href="/" onClick={() => setIsCollapsed(true)}>
            Home
          </NavLink>
          <NavLink href="/projects" onClick={() => setIsCollapsed(true)}>
            Projects
          </NavLink>
          <NavLink href="/skills" onClick={() => setIsCollapsed(true)}>
            Skills
          </NavLink>
          <NavLink href="/certifications" onClick={() => setIsCollapsed(true)}>
            Certificates
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
