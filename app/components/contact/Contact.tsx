import { motion } from "framer-motion";
import styles from "./contact.module.css";
import { fadeInUp } from "../../constants/animations";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";

export const ContactSection = () => (
  <section id="contact">
    <motion.div
      className={`${styles.glassPanel} ${styles.contactPanel}`}
      variants={fadeInUp}
    >
      <div className={styles.sectionTitleGroup} style={{ marginBottom: 0 }}>
        <span className={styles.sectionTagline}>Collaboration</span>
        <h2 className={styles.sectionHeading}>
          Let's Build Something Dependable
        </h2>
      </div>
      <p className={styles.heroParagraph}>
        Have a platform to build, an operational workflow to automate, or a
        software engineering role to fill?
      </p>
      <div className={styles.heroCTA}>
        <a href="mailto:contact@ellypad.com" className={styles.glassBtn}>
          <FiMail /> Email Me
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.glassBtn}
        >
          <FiGithub /> GitHub
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.glassBtn}
        >
          <FiLinkedin /> LinkedIn
        </a>
        <a
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.glassBtn}
        >
          <FaWhatsapp /> WhatsApp
        </a>
      </div>
    </motion.div>
  </section>
);
