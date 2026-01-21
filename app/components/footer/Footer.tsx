import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faWhatsapp, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Mail } from "lucide-react";

import styles from "./footer.module.css";

export default function Footer() {
  return(
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.content}>
        <div>&copy; {new Date().getFullYear()} Elkana Maina. All rights reserved.</div>
        <div className={styles.links} aria-label="social links">
          <a
            href="https://wa.me/+254757241621?text=Hello!%20I%20would%20like%20to%20inquire%20about..."
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="icon" />
          </a>

          <a href="mailto:elisoft.engineer@gmail.com" className={styles.link} aria-label="Email">
            <Mail size={20} className={styles.icon} />
          </a>
          
          <a
            href="https://www.linkedin.com/in/elkana-maina-ab54851a0/"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>

          <a
            href="https://github.com/elisoft-engineer/"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
          
          
        </div>
      </div>
    </footer>
  );
}