'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode, useState, useEffect, useRef } from 'react';
import { Menu, MoonStar, SunMedium, X } from 'lucide-react';
import styles from './navbar.module.css';
import { useTheme } from 'next-themes';


interface NavLinkProps {
  href: string;
  children: ReactNode;
  onClick?: () => void;
}

const NavLink = ({ href, children, onClick }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`${styles.link} ${isActive ? styles.active : ''}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

const Navbar = () => {
  const dropdownRef = useRef(null);
  const togglerRef = useRef(null);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
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
    <div className={styles.navbarContainer}>
      <nav className={styles.navbar}>
        <Link href="/" className={styles.brand}>
          <span className={styles.first}>Elkana</span>
          <span className={styles.last}>Maina</span>
        </Link>
        <div className={styles.navLinks}>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/skills">Skills</NavLink>
          <NavLink href="/certifications">Certificates</NavLink>
          <div className={styles.themeToggler} onClick={() => {setTheme(theme === "dark" ? "light" : "dark")}}>
            { theme === "light" ? <SunMedium size={20} /> : <MoonStar size={20} /> }
          </div>
        </div>
        <button
          ref={togglerRef}
          id="nav-toggler"
          className={styles.navToggler}
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label="Toggle Menu"
        >
          {isCollapsed ? <Menu size={24} /> : <X size={24} />}
        </button>
        <div ref={dropdownRef} className={`${styles.dropdownMenu} ${!isCollapsed ? styles.open : ""}`}>
          <NavLink href="/" onClick={() => setIsCollapsed(true)}>Home</NavLink>
          <NavLink href="/projects" onClick={() => setIsCollapsed(true)}>Projects</NavLink>
          <NavLink href="/skills" onClick={() => setIsCollapsed(true)}>Skills</NavLink>
          <NavLink href="/certifications" onClick={() => setIsCollapsed(true)}>Certificates</NavLink>
          <div className={styles.themeToggler} onClick={() => {setTheme(theme === "dark" ? "light" : "dark")}}>
            { theme === "light" ? <SunMedium size={20} /> : <MoonStar size={20} /> }
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;