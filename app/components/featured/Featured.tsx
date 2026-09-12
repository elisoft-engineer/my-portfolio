"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {
  FiExternalLink,
  FiTerminal,
  FiLayers,
  FiPackage,
  FiCode,
  FiCpu,
  FiArrowUpRight,
} from "react-icons/fi";
import styles from "./featured.module.css";

import falcosendIcon from "@/assets/icons/falcosend.svg";
import ellypadIcon from "@/assets/icons/ellypad.svg";
import falcosendPreview from "@/assets/images/falcosend.png";
import ellypadPreview from "@/assets/images/ellypad.webp";

const ventureRowVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.1,
    },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export const FeaturedSection: React.FC = () => {
  return (
    <section className={styles.venturesSection} id="ventures">
      <div className={styles.sectionHeader}>
        <h2 className={styles.headerTitle}>What I've Built</h2>
      </div>

      <div className={styles.venturesList}>
        {/* VENTURE 1: FALCOSEND */}
        <motion.article
          className={styles.ventureRow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={ventureRowVariants}
        >
          <motion.div className={styles.storyContent} variants={childVariants}>
            <div className={styles.brandHeader}>
              <div className={`${styles.logoBadge} ${styles.cyanBadge}`}>
                <Image
                  src={falcosendIcon}
                  alt="Falcosend Logo"
                  width={18}
                  height={18}
                />
              </div>
              <div className={styles.titleGroup}>
                <h3 className={styles.ventureName}>Falcosend</h3>
                <span className={styles.roleTagCyan}>
                  Founder & Lead Engineer
                </span>
              </div>
            </div>

            <p className={styles.narrativeSummary}>
              A multi-tenant form processing API enabling developers to collect
              submissions directly from static and client applications with zero
              backend configuration.
            </p>

            <ul className={styles.highlightsGroup}>
              <li className={styles.highlightItem}>
                <FiPackage className={styles.iconCyan} />
                <div>
                  <strong>Lightweight NPM SDK</strong>
                  <p>
                    Single-line client integration with zero dependency bloat.
                  </p>
                </div>
              </li>
              <li className={styles.highlightItem}>
                <FiLayers className={styles.iconCyan} />
                <div>
                  <strong>Team & Workspace Isolation</strong>
                  <p>
                    Role-based management, application routing, and environment
                    key scoping.
                  </p>
                </div>
              </li>
              <li className={styles.highlightItem}>
                <FiTerminal className={styles.iconCyan} />
                <div>
                  <strong>Analytics & Export Engine</strong>
                  <p>
                    Real-time submission telemetry with instant CSV and XLSX
                    exports.
                  </p>
                </div>
              </li>
            </ul>

            <div className={styles.linkGroup}>
              <a
                href="https://falcosend.ellypad.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnPrimaryCyan}
              >
                <span>Visit Platform</span>
                <FiArrowUpRight />
              </a>
              <a
                href="https://falcosend.ellypad.com/docs"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnTextLink}
              >
                <span>Documentation</span>
                <FiExternalLink />
              </a>
            </div>
          </motion.div>

          <motion.div className={styles.mediaStage} variants={childVariants}>
            <div className={styles.viewportFrame}>
              <Image
                src={falcosendPreview}
                alt="Falcosend Platform Preview"
                fill
                sizes="(max-width: 900px) 100vw, 45vw"
                className={styles.previewImage}
                priority
              />
            </div>
            <div className={`${styles.ambientGlow} ${styles.glowCyan}`} />
          </motion.div>
        </motion.article>

        {/* VENTURE 2: ELLYPAD TECH */}
        <motion.article
          className={`${styles.ventureRow} ${styles.reverseLayout}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={ventureRowVariants}
        >
          <motion.div className={styles.mediaStage} variants={childVariants}>
            <div className={styles.viewportFrame}>
              <Image
                src={ellypadPreview}
                alt="Ellypad Tech Preview"
                fill
                sizes="(max-width: 900px) 100vw, 45vw"
                className={styles.previewImage}
              />
            </div>
            <div className={`${styles.ambientGlow} ${styles.glowIndigo}`} />
          </motion.div>

          <motion.div className={styles.storyContent} variants={childVariants}>
            <div className={styles.brandHeader}>
              <div className={`${styles.logoBadge} ${styles.indigoBadge}`}>
                <Image
                  src={ellypadIcon}
                  alt="Ellypad Tech Logo"
                  width={18}
                  height={18}
                />
              </div>
              <div className={styles.titleGroup}>
                <h3 className={styles.ventureName}>Ellypad Tech</h3>
                <span className={styles.roleTagIndigo}>
                  Co-Founder & Engineer
                </span>
              </div>
            </div>

            <p className={styles.narrativeSummary}>
              A custom software development studio crafting full-stack web
              platforms, mobile products, and automated cloud infrastructure for
              growing enterprises.
            </p>

            <ul className={styles.highlightsGroup}>
              <li className={styles.highlightItem}>
                <FiCode className={styles.iconIndigo} />
                <div>
                  <strong>Custom Web & Mobile Apps</strong>
                  <p>
                    High-conversion software designed for scale and long-term
                    reliability.
                  </p>
                </div>
              </li>
              <li className={styles.highlightItem}>
                <FiCpu className={styles.iconIndigo} />
                <div>
                  <strong>APIs & Workflow Automation</strong>
                  <p>
                    Secure system integration and custom backend service
                    engineering.
                  </p>
                </div>
              </li>
            </ul>

            <div className={styles.linkGroup}>
              <a
                href="https://www.ellypad.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnPrimaryIndigo}
              >
                <span>Visit Company</span>
                <FiArrowUpRight />
              </a>
            </div>
          </motion.div>
        </motion.article>
      </div>
    </section>
  );
};
