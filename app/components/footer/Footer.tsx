"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiArrowUp } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./footer.module.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footerWrapper}>
      <motion.div
        className={styles.footerCard}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        {/* SVG Container: Hand-crafted wavy path handling both fill & stroke */}
        <svg
          className={styles.wavyBgSvg}
          viewBox="0 0 1000 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M 28,12 
               Q 250,2 500,12 
               T 972,12 
               Q 988,12 988,32 
               Q 980,60 988,88 
               Q 988,108 972,108 
               Q 750,118 500,108 
               T 28,108 
               Q 12,108 12,88 
               Q 20,60 12,32 
               Q 12,12 28,12 Z"
            className={styles.wavyPath}
          />
        </svg>

        {/* Content Container with interior padding safety zone */}
        <div className={styles.content}>
          <div className={styles.brandMeta}>
            <div className={styles.statusBadge}>
              <span className={styles.statusDot} />
              <span className={styles.statusText}>Available for projects</span>
            </div>
            <p className={styles.copyright}>
              © {new Date().getFullYear()} Elkana Maina. All rights reserved.
            </p>
          </div>

          <div className={styles.actions}>
            <div className={styles.socials}>
              <motion.a
                href="https://github.com/elisoft-engineer"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className={styles.socialLink}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiGithub />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/elkana-maina-ab54851a0/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={styles.socialLink}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiLinkedin />
              </motion.a>
              <motion.a
                href="https://wa.me/254757241621"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className={styles.socialLink}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp />
              </motion.a>
            </div>

            <motion.button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className={styles.backToTop}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
            >
              <FiArrowUp />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
