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
        className={styles.venturesGrid}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        {/* VENTURE 1: FALCOSEND */}
        <motion.article
          className={`${styles.ventureCard} ${styles.falcosendCard}`}
          variants={fadeInUp}
        >
          <div className={styles.cardContent}>
            <div className={styles.cardTopMeta}>
              <div className={styles.brandGroup}>
                <div
                  className={`${styles.logoFrame} ${styles.falcosendLogoBg}`}
                >
                  <Image
                    src={falcosendIcon}
                    alt="Falcosend Logo"
                    width={22}
                    height={22}
                  />
                </div>
                <div>
                  <h3 className={styles.ventureName}>Falcosend</h3>
                  <span className={styles.roleBadgePrimary}>
                    Founder & Lead Engineer
                  </span>
                </div>
              </div>
            </div>

            <p className={styles.ventureSummary}>
              An API-first developer platform designed to handle form
              submissions across web and mobile applications. Engineered with
              multi-tenant team structures, service registration, and automated
              export engines.
            </p>

            <motion.div
              className={styles.highlightsGrid}
              variants={highlightListVariants}
            >
              <motion.div
                className={styles.highlightItem}
                variants={highlightItemVariants}
              >
                <FiPackage className={styles.highlightIconCyan} />
                <div>
                  <strong>Custom NPM Integration</strong>
                  <span>
                    Engineered an SDK package for frictionless web app
                    connectivity.
                  </span>
                </div>
              </motion.div>

              <motion.div
                className={styles.highlightItem}
                variants={highlightItemVariants}
              >
                <FiLayers className={styles.highlightIconCyan} />
                <div>
                  <strong>Team & Service Isolation</strong>
                  <span>
                    Built multi-tenant team controls with service-level access
                    rights.
                  </span>
                </div>
              </motion.div>

              <motion.div
                className={styles.highlightItem}
                variants={highlightItemVariants}
              >
                <FiTerminal className={styles.highlightIconCyan} />
                <div>
                  <strong>Data Export Engine</strong>
                  <span>
                    Real-time payload parsing with instant XLSX and CSV data
                    exporting.
                  </span>
                </div>
              </motion.div>
            </motion.div>

            <div className={styles.cardFooter}>
              <div className={styles.tagGroup}>
                <span className={styles.codeTag}>REST API</span>
                <span className={styles.codeTag}>NPM SDK</span>
                <span className={styles.codeTag}>Data Export</span>
                <span className={styles.codeTag}>Multi-tenant</span>
              </div>
              <div className={styles.linkGroup}>
                <a
                  href="https://falcosend.ellypad.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnLaunch}
                >
                  <span>Platform</span>
                  <FiExternalLink />
                </a>
                <a
                  href="https://falcosend.ellypad.com/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnSubtle}
                >
                  <span>Docs</span>
                  <FiExternalLink />
                </a>
              </div>
            </div>
          </div>

          <div
            className={`${styles.cardPreviewWrapper} ${styles.falcosendPreviewWrapper}`}
          >
            <Image
              src={falcosendPreview}
              alt="Falcosend Dashboard & API Docs Preview"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className={styles.previewImage}
              priority
            />
          </div>
        </motion.article>

        {/* VENTURE 2: ELLYPAD TECH */}
        <motion.article
          className={`${styles.ventureCard} ${styles.ellypadCard}`}
          variants={fadeInUp}
        >
          <div
            className={`${styles.cardPreviewWrapper} ${styles.ellypadPreviewWrapper}`}
          >
            <Image
              src={ellypadPreview}
              alt="Ellypad Tech Custom Software Development Firm"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className={styles.previewImage}
            />
          </div>

          <div className={styles.cardContent}>
            <div className={styles.cardTopMeta}>
              <div className={styles.brandGroup}>
                <div className={`${styles.logoFrame} ${styles.ellypadLogoBg}`}>
                  <Image
                    src={ellypadIcon}
                    alt="Ellypad Tech Logo"
                    width={22}
                    height={22}
                  />
                </div>
                <div>
                  <h3 className={styles.ventureName}>Ellypad Tech</h3>
                  <span className={styles.roleBadgeIndigo}>
                    Co-founder & Engineer
                  </span>
                </div>
              </div>
            </div>

            <p className={styles.ventureSummary}>
              A full-spectrum custom software development agency engineering
              modern web platforms, mobile applications, and enterprise systems.
              We architect scalable solutions tailored to accelerate business
              operations and digital growth.
            </p>

            <motion.div
              className={styles.highlightsGrid}
              variants={highlightListVariants}
            >
              <motion.div
                className={styles.highlightItem}
                variants={highlightItemVariants}
              >
                <FiCode className={styles.highlightIconIndigo} />
                <div>
                  <strong>Bespoke Software Engineering</strong>
                  <span>
                    Building web, mobile, and cloud-native software products
                    customized to client requirements.
                  </span>
                </div>
              </motion.div>

              <motion.div
                className={styles.highlightItem}
                variants={highlightItemVariants}
              >
                <FiCpu className={styles.highlightIconIndigo} />
                <div>
                  <strong>Enterprise Architecture & Digitization</strong>
                  <span>
                    Modernizing business workflows with secure, scalable APIs
                    and cloud infrastructure.
                  </span>
                </div>
              </motion.div>
            </motion.div>

            <div className={styles.cardFooter}>
              <div className={styles.tagGroup}>
                <span className={styles.codeTag}>Custom Software</span>
                <span className={styles.codeTag}>Full-Stack Dev</span>
                <span className={styles.codeTag}>Cloud Solutions</span>
                <span className={styles.codeTag}>Mobile & Web</span>
              </div>
              <a
                href="https://www.ellypad.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnLaunchIndigo}
              >
                <span>Visit Company</span>
                <FiExternalLink />
              </a>
            </div>
          </div>
        </motion.article>
      </motion.div>
    </section>
  );
};
