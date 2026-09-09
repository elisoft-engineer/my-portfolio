"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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
import {
  fadeInUp,
  staggerContainer,
  highlightListVariants,
  highlightItemVariants,
} from "../../constants/animations";

import falcosendIcon from "@/assets/icons/falcosend.svg";
import ellypadIcon from "@/assets/icons/ellypad.svg";
import falcosendPreview from "@/assets/images/falcosend.png";
import ellypadPreview from "@/assets/images/ellypad.webp";

export const FeaturedSection: React.FC = () => {
  return (
    <section className={styles.venturesSection} id="ventures">
      <div className={styles.sectionHeader}>
        <h2 className={styles.headerTitle}>What I've Built</h2>
      </div>

      <motion.div
        className={styles.venturesList}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
      >
        {/* VENTURE 1: FALCOSEND */}
        <motion.article className={styles.ventureRow} variants={fadeInUp}>
          <div className={styles.storyContent}>
            <div className={styles.brandHeader}>
              <div className={`${styles.logoFrame} ${styles.falcosendLogoBg}`}>
                <Image
                  src={falcosendIcon}
                  alt="Falcosend Logo"
                  width={20}
                  height={20}
                />
              </div>
              <div className={styles.brandMeta}>
                <div className={styles.titleRow}>
                  <h3 className={styles.ventureName}>Falcosend</h3>
                  <span className={styles.roleBadgePrimary}>
                    Founder & Lead Engineer
                  </span>
                </div>
              </div>
            </div>

            <p className={styles.narrativeSummary}>
              A multi-tenant form processing API that lets developers collect
              submission data from static and client apps. Built with team
              workspaces, app service routing, built-in submission analytics,
              and flexible export engines for external analysis.
            </p>

            <motion.div
              className={styles.highlightsList}
              variants={highlightListVariants}
            >
              <motion.div
                className={styles.highlightCard}
                variants={highlightItemVariants}
              >
                <FiPackage className={styles.highlightIconCyan} />
                <div className={styles.highlightText}>
                  <strong>Lightweight NPM SDK</strong>
                  <span>
                    Add form handling to client apps with a single line of code
                    — no bloated dependencies.
                  </span>
                </div>
              </motion.div>

              <motion.div
                className={styles.highlightCard}
                variants={highlightItemVariants}
              >
                <FiLayers className={styles.highlightIconCyan} />
                <div className={styles.highlightText}>
                  <strong>Team & Workspace Isolation</strong>
                  <span>
                    Manage team members, map distinct app services, and issue
                    separate API keys per environment.
                  </span>
                </div>
              </motion.div>

              <motion.div
                className={styles.highlightCard}
                variants={highlightItemVariants}
              >
                <FiTerminal className={styles.highlightIconCyan} />
                <div className={styles.highlightText}>
                  <strong>Analytics & Export Engine</strong>
                  <span>
                    Track submission metrics directly in the dashboard and
                    export structured data into CSV or XLSX.
                  </span>
                </div>
              </motion.div>
            </motion.div>

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
                className={styles.btnSecondary}
              >
                <span>API Docs</span>
                <FiExternalLink />
              </a>
            </div>
          </div>

          <div className={`${styles.mediaStage} ${styles.stageCyan}`}>
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
            <div className={styles.tagGroup}>
              <span className={styles.codeTag}>REST API</span>
              <span className={styles.codeTag}>NPM SDK</span>
              <span className={styles.codeTag}>Next.js</span>
              <span className={styles.codeTag}>DRF</span>
              <span className={styles.codeTag}>Multi-tenant</span>
            </div>
            <div className={`${styles.ambientGlow} ${styles.glowCyan}`} />
          </div>
        </motion.article>

        {/* VENTURE 2: ELLYPAD TECH */}
        <motion.article
          className={`${styles.ventureRow} ${styles.reverseLayout}`}
          variants={fadeInUp}
        >
          <div className={`${styles.mediaStage} ${styles.stageIndigo}`}>
            <div className={styles.viewportFrame}>
              <Image
                src={ellypadPreview}
                alt="Ellypad Tech Custom Software Development Firm"
                fill
                sizes="(max-width: 900px) 100vw, 45vw"
                className={styles.previewImage}
              />
            </div>
            <div className={styles.tagGroup}>
              <span className={styles.codeTag}>Custom Software</span>
              <span className={styles.codeTag}>Full-Stack Dev</span>
              <span className={styles.codeTag}>Cloud Solutions</span>
              <span className={styles.codeTag}>Mobile & Web</span>
            </div>
            <div className={`${styles.ambientGlow} ${styles.glowIndigo}`} />
          </div>

          <div className={styles.storyContent}>
            <div className={styles.brandHeader}>
              <div className={`${styles.logoFrame} ${styles.ellypadLogoBg}`}>
                <Image
                  src={ellypadIcon}
                  alt="Ellypad Tech Logo"
                  width={20}
                  height={20}
                />
              </div>
              <div className={styles.brandMeta}>
                <div className={styles.titleRow}>
                  <h3 className={styles.ventureName}>Ellypad Tech</h3>
                  <span className={styles.roleBadgeIndigo}>
                    Co-Founder & Engineer
                  </span>
                </div>
              </div>
            </div>

            <p className={styles.narrativeSummary}>
              A software agency that builds modern web apps, mobile platforms,
              and scalable cloud backends. We work alongside companies to
              upgrade their tech stack and automate daily operations.
            </p>

            <motion.div
              className={styles.highlightsList}
              variants={highlightListVariants}
            >
              <motion.div
                className={styles.highlightCard}
                variants={highlightItemVariants}
              >
                <FiCode className={styles.highlightIconIndigo} />
                <div className={styles.highlightText}>
                  <strong>Custom Web & Mobile Apps</strong>
                  <span>
                    High-performance applications built for conversion, speed,
                    and long-term reliability.
                  </span>
                </div>
              </motion.div>

              <motion.div
                className={styles.highlightCard}
                variants={highlightItemVariants}
              >
                <FiCpu className={styles.highlightIconIndigo} />
                <div className={styles.highlightText}>
                  <strong>APIs & Workflow Automation</strong>
                  <span>
                    Connect your tools with secure API backends and cloud
                    services to eliminate manual tasks.
                  </span>
                </div>
              </motion.div>
            </motion.div>

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
          </div>
        </motion.article>
      </motion.div>
    </section>
  );
};
