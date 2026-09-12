"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { FiArrowUpRight, FiCheck, FiCopy, FiMail } from "react-icons/fi";
import styles from "./contact.module.css";

const reveal = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.35 },
};

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "elisoft.engineer@gmail.com";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  const socials = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/elkana-maina-ab54851a0/",
      icon: FaLinkedinIn,
    },
    {
      name: "GitHub",
      href: "https://github.com/elisoft-engineer",
      icon: FaGithub,
    },
    { name: "WhatsApp", href: "https://wa.me/254757241621", icon: FaWhatsapp },
  ];

  return (
    <section
      className={styles.contactSection}
      id="contact"
      aria-labelledby="contact-title"
    >
      <motion.div
        className={styles.contactCard}
        {...reveal}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <div className={styles.intro}>
          <div className={styles.eyebrow}>
            <span className={styles.statusDot} />
            Available for new opportunities
          </div>
          <h2 id="contact-title" className={styles.title}>
            Let&apos;s make the next <span>good idea</span> real.
          </h2>
          <p className={styles.description}>
            Have a product to build, a difficult system to untangle, or a role
            where I can make an impact? I&apos;d love to hear about it.
          </p>
        </div>

        <div className={styles.connectPanel}>
          <p className={styles.panelLabel}>Start a conversation</p>
          <a href={`mailto:${email}`} className={styles.emailLink}>
            <FiMail aria-hidden="true" />
            <span>{email}</span>
            <FiArrowUpRight className={styles.arrow} aria-hidden="true" />
          </a>
          <div className={styles.panelFooter}>
            <button
              onClick={handleCopy}
              className={styles.copyButton}
              type="button"
              aria-label="Copy email address"
            >
              {copied ? (
                <FiCheck aria-hidden="true" />
              ) : (
                <FiCopy aria-hidden="true" />
              )}
              {copied ? "Copied" : "Copy email"}
            </button>
          </div>
        </div>

        <div className={styles.socialRow} aria-label="More ways to connect">
          <span className={styles.socialLabel}>Or find me on</span>
          <div className={styles.socialLinks}>
            {socials.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label={name}
              >
                <Icon aria-hidden="true" />
                <span>{name}</span>
                <FiArrowUpRight aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
