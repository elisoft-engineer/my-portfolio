"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  FiPackage,
  FiGithub,
  FiExternalLink,
  FiCopy,
  FiCheck,
  FiZap,
  FiTerminal,
  FiCpu,
  FiLayers,
} from "react-icons/fi";
import styles from "./open-source.module.css";

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
    <section className={styles.openSourceSection} id="open-source">
      <div className={styles.sectionHeader}>
        <h2 className={styles.headerTitle}>
          In the <span className={styles.gradientText}>OpenSource</span> world
        </h2>
        <p className={styles.headerSubtext}>
          Tools engineered to reduce boilerplate, automate database interaction,
          and streamline client API integrations.
        </p>
      </div>

      <div className={styles.cardsGrid}>
        {/* PROJECT 1: ALCHEMIST SHELL */}
        <article className={styles.osCard}>
          <div className={styles.cardHeader}>
            <div className={styles.brandContainer}>
              <div className={styles.iconBadge}>
                <Image
                  src={alchemistIcon}
                  alt="Alchemist Shell Logo"
                  width={28}
                  height={28}
                />
              </div>
              <div>
                <div className={styles.titleRow}>
                  <h3 className={styles.projectName}>alchemist-shell</h3>
                  <span className={styles.pythonBadge}>PyPI v0.1.13</span>
                </div>
                <p className={styles.projectTagline}>
                  Interactive database workbench for SQLAlchemy
                </p>
              </div>
            </div>

            <div className={styles.actionButtons}>
              <a
                href="https://github.com/elisoft-engineer/alchemist-shell"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconBtn}
                title="GitHub Repository"
              >
                <FiGithub />
              </a>
              <a
                href="https://pypi.org/project/alchemist-shell/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconBtn}
                title="PyPI Package"
              >
                <FiExternalLink />
              </a>
            </div>
          </div>

          <div className={styles.installPillContainer}>
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

          <p className={styles.description}>
            Inspecting SQLAlchemy models in standard Python REPLs requires
            tedious manual imports and session setup. Alchemist Shell
            auto-discovers your project models and renders query outputs
            directly as readable terminal tables.
          </p>

          <div className={styles.featurePills}>
            <span>
              <FiZap /> Auto-Discovery
            </span>
            <span>
              <FiTerminal /> Auto-Awaiting
            </span>
            <span>
              <FiCpu /> Rich REPL Tables
            </span>
          </div>

          <div className={styles.imageContainer}>
            <Image
              src={alchemistTerminalPreview}
              alt="Alchemist Shell terminal execution preview"
              width={800}
              height={420}
              className={styles.previewImage}
            />
          </div>
        </article>

        {/* PROJECT 2: FALCOSEND SDK */}
        <article className={styles.osCard}>
          <div className={styles.cardHeader}>
            <div className={styles.brandContainer}>
              <div className={styles.iconBadge}>
                <Image
                  src={falcosendSdkIcon}
                  alt="Falcosend SDK Logo"
                  width={28}
                  height={28}
                />
              </div>
              <div>
                <div className={styles.titleRow}>
                  <h3 className={styles.projectName}>falcosend-sdk</h3>
                  <span className={styles.npmBadge}>NPM v1.0.8</span>
                </div>
                <p className={styles.projectTagline}>
                  Client-side library for Falcosend API integrations
                </p>
              </div>
            </div>

            <div className={styles.actionButtons}>
              <a
                href="https://github.com/elisoft-engineer/falcosend-sdk"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconBtn}
                title="GitHub Repository"
              >
                <FiGithub />
              </a>
              <a
                href="https://www.npmjs.com/package/falcosend-sdk"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconBtn}
                title="NPM Package"
              >
                <FiExternalLink />
              </a>
            </div>
          </div>

          <div className={styles.installPillContainer}>
            <code className={styles.installCode}>npm i falcosend-sdk</code>
            <button
              onClick={() => handleCopy("npm i falcosend-sdk", 2)}
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

          <p className={styles.description}>
            Lightweight client package for submitting web form payloads to
            Falcosend endpoints directly from frontend applications without
            extra backend server code.
          </p>

          <div className={styles.featurePills}>
            <span>
              <FiPackage /> Zero Dependencies
            </span>
            <span>
              <FiLayers /> TypeScript Native
            </span>
            <span>
              <FiExternalLink /> Direct Submissions
            </span>
          </div>

          <div className={styles.codeContainer}>
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
        </article>
      </div>
    </section>
  );
};
