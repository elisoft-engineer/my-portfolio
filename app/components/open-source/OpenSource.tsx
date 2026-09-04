"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiPackage,
  FiGithub,
  FiCopy,
  FiCheck,
  FiZap,
  FiTerminal,
  FiCpu,
  FiLayers,
  FiArrowUpRight,
} from "react-icons/fi";
import styles from "./open-source.module.css";

import {
  fadeInUp,
  staggerContainer,
  highlightListVariants,
  highlightItemVariants,
} from "@/app/constants/animations";

import alchemistIcon from "@/assets/icons/alchemist-shell.svg";
import alchemistTerminalPreview from "@/assets/images/alchemist shell.png";
import falcosendSdkIcon from "@/assets/icons/falcosend.svg";

export const OpenSourceSection: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <motion.section
      className={styles.openSourceSection}
      id="open-source"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <motion.div className={styles.sectionHeader} variants={fadeInUp}>
        <h2 className={styles.headerTitle}>
          My <span className={styles.gradientText}>OpenSource</span> Impact
        </h2>
        <p className={styles.headerSubtext}>
          Tools engineered to reduce boilerplate, automate database interaction,
          and streamline client API integrations.
        </p>
      </motion.div>

      <div className={styles.toolList}>
        {/* ITEM 1: ALCHEMIST SHELL */}
        <motion.div className={styles.toolRow} variants={fadeInUp}>
          <div className={styles.storyColumn}>
            <div className={styles.brandRow}>
              <div className={styles.iconBadge}>
                <Image
                  src={alchemistIcon}
                  alt="Alchemist Shell Logo"
                  width={28}
                  height={28}
                />
              </div>
              <div className={styles.nameGroup}>
                <h3 className={styles.projectName}>alchemist-shell</h3>
                <span className={styles.pythonBadge}>PyPI v0.1.13</span>
              </div>
            </div>

            <div className={styles.taglineCallout}>
              Interactive database workbench for SQLAlchemy
            </div>

            <p className={styles.narrative}>
              Inspecting SQLAlchemy models in standard Python REPLs requires
              tedious manual imports and session setup. Alchemist Shell
              auto-discovers your project models and renders query outputs
              directly as readable terminal tables.
            </p>

            {/* LIGHTWEIGHT FEATURE HIGHLIGHTS */}
            <motion.div
              className={styles.featureList}
              variants={highlightListVariants}
            >
              <motion.div
                className={styles.featureItem}
                variants={highlightItemVariants}
              >
                <FiZap className={styles.featureIcon} />
                <span>Auto-Discovery</span>
              </motion.div>
              <motion.div
                className={styles.featureItem}
                variants={highlightItemVariants}
              >
                <FiTerminal className={styles.featureIcon} />
                <span>Auto-Awaiting</span>
              </motion.div>
              <motion.div
                className={styles.featureItem}
                variants={highlightItemVariants}
              >
                <FiCpu className={styles.featureIcon} />
                <span>Rich REPL Tables</span>
              </motion.div>
            </motion.div>

            <div className={styles.actionToolbar}>
              {/* DARK TERMINAL SNIPPET */}
              <div className={styles.terminalBox}>
                <span className={styles.promptSymbol}>$</span>
                <code className={styles.installCode}>
                  pip install alchemist-shell
                </code>
                <button
                  onClick={() => handleCopy("pip install alchemist-shell", 1)}
                  className={styles.copyBtn}
                  aria-label="Copy install command"
                >
                  {copiedIndex === 1 ? (
                    <FiCheck className={styles.copiedIcon} />
                  ) : (
                    <FiCopy />
                  )}
                </button>
              </div>

              {/* ACTION LINKS */}
              <div className={styles.externalLinks}>
                <a
                  href="https://github.com/elisoft-engineer/alchemist-shell"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.githubBtn}
                >
                  <FiGithub />
                  <span>View on GitHub</span>
                </a>
                <a
                  href="https://pypi.org/project/alchemist-shell/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.primaryCtaBtn}
                >
                  <span>View on PyPI</span>
                  <FiArrowUpRight />
                </a>
              </div>
            </div>
          </div>

          <motion.div className={styles.artifactColumn} variants={fadeInUp}>
            <div className={styles.mediaCard}>
              <Image
                src={alchemistTerminalPreview}
                alt="Alchemist Shell terminal execution preview"
                width={800}
                height={460}
                className={styles.previewImage}
              />
            </div>
          </motion.div>
        </motion.div>

        <hr className={styles.sectionDivider} />

        {/* ITEM 2: FALCOSEND SDK */}
        <motion.div className={styles.toolRow} variants={fadeInUp}>
          <div className={styles.storyColumn}>
            <div className={styles.brandRow}>
              <div className={styles.iconBadge}>
                <Image
                  src={falcosendSdkIcon}
                  alt="Falcosend SDK Logo"
                  width={28}
                  height={28}
                />
              </div>
              <div className={styles.nameGroup}>
                <h3 className={styles.projectName}>falcosend-sdk</h3>
                <span className={styles.npmBadge}>NPM v1.0.8</span>
              </div>
            </div>

            <div className={styles.taglineCallout}>
              Client-side library for Falcosend API integrations
            </div>

            <p className={styles.narrative}>
              Lightweight client package for submitting web form payloads to
              Falcosend endpoints directly from frontend applications without
              extra backend server code.
            </p>

            {/* LIGHTWEIGHT FEATURE HIGHLIGHTS */}
            <motion.div
              className={styles.featureList}
              variants={highlightListVariants}
            >
              <motion.div
                className={styles.featureItem}
                variants={highlightItemVariants}
              >
                <FiPackage className={styles.featureIcon} />
                <span>Zero Dependencies</span>
              </motion.div>
              <motion.div
                className={styles.featureItem}
                variants={highlightItemVariants}
              >
                <FiLayers className={styles.featureIcon} />
                <span>TypeScript Native</span>
              </motion.div>
              <motion.div
                className={styles.featureItem}
                variants={highlightItemVariants}
              >
                <FiArrowUpRight className={styles.featureIcon} />
                <span>Direct Submissions</span>
              </motion.div>
            </motion.div>

            <div className={styles.actionToolbar}>
              {/* DARK TERMINAL SNIPPET */}
              <div className={styles.terminalBox}>
                <span className={styles.promptSymbol}>$</span>
                <code className={styles.installCode}>
                  npm install falcosend-sdk
                </code>
                <button
                  onClick={() => handleCopy("npm install falcosend-sdk", 2)}
                  className={styles.copyBtn}
                  aria-label="Copy install command"
                >
                  {copiedIndex === 2 ? (
                    <FiCheck className={styles.copiedIcon} />
                  ) : (
                    <FiCopy />
                  )}
                </button>
              </div>

              {/* ACTION LINKS */}
              <div className={styles.externalLinks}>
                <a
                  href="https://github.com/elisoft-engineer/falcosend-sdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.githubBtn}
                >
                  <FiGithub />
                  <span>View on GitHub</span>
                </a>
                <a
                  href="https://www.npmjs.com/package/falcosend-sdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.primaryCtaBtn}
                >
                  <span>View on NPM</span>
                  <FiArrowUpRight />
                </a>
              </div>
            </div>
          </div>

          <motion.div className={styles.artifactColumn} variants={fadeInUp}>
            <div className={styles.codeCard}>
              <div className={styles.codeHeaderLabel}>
                <code>index.ts — implementation</code>
              </div>
              <pre className={styles.codeBlock}>
                <code>
                  <span className={styles.kw}>import</span> &#123; FalcoSend
                  &#125; <span className={styles.kw}>from</span>{" "}
                  <span className={styles.str}>'falcosend-sdk'</span>;<br />
                  <br />
                  <span className={styles.kw}>const</span> sdk ={" "}
                  <span className={styles.kw}>new</span>{" "}
                  <span className={styles.fn}>FalcoSend</span>(&#123;
                  <br />
                  &nbsp;&nbsp;url:{" "}
                  <span className={styles.str}>
                    'https://api.falcosend.ellypad.com/submissions/create/'
                  </span>
                  ,<br />
                  &nbsp;&nbsp;submissionKey:{" "}
                  <span className={styles.str}>'myKey...'</span>
                  <br />
                  &#125;);
                  <br />
                  <br />
                  <span className={styles.cmt}>
                    // Direct frontend submission without backend server
                  </span>
                  <br />
                  <span className={styles.kw}>await</span> sdk.
                  <span className={styles.fn}>submit</span>(&#123;
                  <br />
                  &nbsp;&nbsp;form_name:{" "}
                  <span className={styles.str}>'Contact Form'</span>,<br />
                  &nbsp;&nbsp;data: &#123; name:{" "}
                  <span className={styles.str}>'Dev'</span>, email:{" "}
                  <span className={styles.str}>'dev@example.com'</span> &#125;
                  <br />
                  &#125;);
                </code>
              </pre>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
