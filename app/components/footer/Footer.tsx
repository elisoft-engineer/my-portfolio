import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faWhatsapp,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Mail } from "lucide-react";

import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        {/* Main Columns Grid */}
        <div className={styles.grid}>
          {/* Brand & Bio Column */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.brand}>
              <span className={styles.first}>Elkana</span>
              <span className={styles.last}>Maina</span>
            </Link>
            <p className={styles.tagline}>
              Engineering software systems that scale. Turning complex
              requirements into clean, reliable products.
            </p>
            <div className={styles.statusBadge}>
              <span className={styles.statusDot} />
              Available for new projects
            </div>
          </div>

          {/* Navigation Column */}
          <div className={styles.navCol}>
            <h4 className={styles.colTitle}>Navigation</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/skills">Skills</Link>
              </li>
              <li>
                <Link href="/certifications">Licenses & Certifications</Link>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className={styles.navCol}>
            <h4 className={styles.colTitle}>Connect</h4>
            <ul className={styles.linkList}>
              <li>
                <a href="mailto:elisoft.engineer@gmail.com">Email Direct</a>
              </li>
              <li>
                <a
                  href="https://wa.me/+254757241621"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/elisoft-engineer/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Profile
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/elkana-maina-ab54851a0/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} <strong>Elkana Maina</strong>. All
            rights reserved.
          </p>

          <div className={styles.socialIcons} aria-label="social links">
            <a
              href="mailto:elisoft.engineer@gmail.com"
              className={styles.iconLink}
              aria-label="Email"
            >
              <Mail size={16} />
            </a>

            <a
              href="https://wa.me/+254757241621?text=Hello!%20I%20would%20like%20to%20inquire%20about..."
              className={styles.iconLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>

            <a
              href="https://github.com/elisoft-engineer/"
              className={styles.iconLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>

            <a
              href="https://www.linkedin.com/in/elkana-maina-ab54851a0/"
              className={styles.iconLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
