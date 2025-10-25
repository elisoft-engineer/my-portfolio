import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faWhatsapp, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return(
    <footer className="footer" role="contentinfo">
      <div className="content">
        <div>&copy; {new Date().getFullYear()} Elkana Maina. All rights reserved.</div>
        <div className="links" aria-label="social links">
          <a
            href="https://wa.me/+254757241621?text=Hello!%20I%20would%20like%20to%20inquire%20about..."
            className="link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="icon" />
          </a>

          <a href="mailto:elisoft.engineer@gmail.com" className="link" aria-label="Email">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
          </a>
          
          <a
            href="https://www.linkedin.com/in/elkana-maina-ab54851a0/"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>

          <a
            href="https://github.com/elisoft-engineer/"
            className="link"
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