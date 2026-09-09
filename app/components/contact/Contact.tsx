"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { FiMail, FiCopy, FiCheck, FiSend } from "react-icons/fi";
import styles from "./contact.module.css";

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "elisoft.engineer@gmail.com";

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socials = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/elkana-maina-ab54851a0/",
      icon: FaLinkedinIn,
      brandClass: styles.linkedin,
    },
    {
      name: "GitHub",
      href: "https://github.com/elisoft-engineer",
      icon: FaGithub,
      brandClass: styles.github,
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/254757241621",
      icon: FaWhatsapp,
      brandClass: styles.whatsapp,
    },
  ];

  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.wrapper}>
        {/* Availability Status */}
        <motion.div
          className={styles.statusBadge}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className={styles.beacon}>
            <span className={styles.beaconPing} />
            <span className={styles.beaconDot} />
          </span>
          <span>Available for new roles and contracts</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Hiring for{" "}
          <span className={styles.accentSwe}>Software Engineering</span> or{" "}
          <span className={styles.accentMl}>Machine Learning</span>?
        </motion.h2>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Feel free to reach out directly or connect via my socials below.
        </motion.p>

        {/* Email Bar */}
        <motion.div
          className={styles.emailBar}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className={styles.emailTextGroup}>
            <FiMail className={styles.mailIcon} />
            <span className={styles.emailAddress}>{email}</span>
          </div>

          <div className={styles.buttonGroup}>
            <button
              onClick={handleCopy}
              className={styles.copyBtn}
              type="button"
              aria-label="Copy email"
            >
              {copied ? <FiCheck className={styles.checkIcon} /> : <FiCopy />}
              <span>{copied ? "Copied" : "Copy"}</span>
            </button>

            <a href={`mailto:${email}`} className={styles.sendBtn}>
              <span>Send Message</span>
              <FiSend />
            </a>
          </div>
        </motion.div>

        {/* Social Chips with Wave Fill Effect */}
        <motion.div
          className={styles.socialGrid}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {socials.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.socialChip} ${item.brandClass}`}
              >
                {/* Wave liquid background element */}
                <div className={styles.waveFill}>
                  <svg
                    className={styles.waveSvg}
                    viewBox="0 0 120 28"
                    preserveAspectRatio="none"
                  >
                    <path d="M0,15 C30,5 60,25 90,15 C105,10 115,18 120,20 L120,28 L0,28 Z" />
                  </svg>
                </div>

                {/* Foreground icon & label */}
                <span className={styles.chipContent}>
                  <Icon className={styles.socialIcon} />
                  <span>{item.name}</span>
                </span>
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
