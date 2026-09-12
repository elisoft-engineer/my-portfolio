"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiGithub, FiCopy, FiCheck } from "react-icons/fi";
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
          My <span className={styles.gradientText}>OpenSource</span> Impact
        </h2>
        <p className={styles.headerSubtext}>
          Tools engineered to reduce boilerplate, automate database interaction,
          and streamline client API integrations.
        </p>
      </div>

      <div className={styles.toolList}>
        {/* ITEM 1: ALCHEMIST SHELL */}
        <div className={`${styles.entryCard} ${styles.entryCardPython}`}>
          <div className={styles.entryGrid}>
            <div className={styles.storyColumn}>
              <div className={styles.brandRow}>
                <div className={styles.iconBadge}>
                  <Image
                    src={alchemistIcon}
                    alt="Alchemist Shell Logo"
                    width={24}
                    height={24}
                  />
                </div>
                <div className={styles.nameGroup}>
                  <h3 className={styles.projectName}>alchemist-shell</h3>
                  <span className={`${styles.regBadge} ${styles.versionBadge}`}>
                    <span className={styles.regLabel}>pypi</span>
                    <span
                      className={`${styles.regValue} ${styles.regValuePython}`}
                    >
                      v0.1.13
                    </span>
                  </span>
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

              <div className={styles.keywordList}>
                <span className={styles.keywordTag}>auto-discovery</span>
                <span className={styles.keywordTag}>auto-awaiting</span>
                <span className={styles.keywordTag}>rich-repl-tables</span>
              </div>

              <div className={styles.actionToolbar}>
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

                <div className={styles.externalLinks}>
                  <a
                    href="https://github.com/elisoft-engineer/alchemist-shell"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.regBadge} ${styles.linkBadge}`}
                  >
                    <span className={styles.regLabel}>
                      <FiGithub size={13} />
                      source
                    </span>
                    <span
                      className={`${styles.regValue} ${styles.regValueGithub}`}
                    >
                      github
                    </span>
                  </a>
                  <a
                    href="https://pypi.org/project/alchemist-shell/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.regBadge} ${styles.linkBadge}`}
                  >
                    <span className={styles.regLabel}>install</span>
                    <span
                      className={`${styles.regValue} ${styles.regValuePython}`}
                    >
                      pypi
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.artifactColumn}>
              <div className={styles.mediaFrame}>
                <Image
                  src={alchemistTerminalPreview}
                  alt="Alchemist Shell terminal execution preview"
                  width={800}
                  height={460}
                  className={styles.previewImage}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ITEM 2: FALCOSEND SDK */}
        <div className={`${styles.entryCard} ${styles.entryCardNpm}`}>
          <div className={styles.entryGrid}>
            <div className={styles.storyColumn}>
              <div className={styles.brandRow}>
                <div className={styles.iconBadge}>
                  <Image
                    src={falcosendSdkIcon}
                    alt="Falcosend SDK Logo"
                    width={24}
                    height={24}
                  />
                </div>
                <div className={styles.nameGroup}>
                  <h3 className={styles.projectName}>falcosend-sdk</h3>
                  <span className={`${styles.regBadge} ${styles.versionBadge}`}>
                    <span className={styles.regLabel}>npm</span>
                    <span
                      className={`${styles.regValue} ${styles.regValueNpm}`}
                    >
                      v1.0.8
                    </span>
                  </span>
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

              <div className={styles.keywordList}>
                <span className={styles.keywordTag}>zero-deps</span>
                <span className={styles.keywordTag}>typescript-native</span>
                <span className={styles.keywordTag}>direct-submissions</span>
              </div>

              <div className={styles.actionToolbar}>
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

                <div className={styles.externalLinks}>
                  <a
                    href="https://github.com/elisoft-engineer/falcosend-sdk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.regBadge} ${styles.linkBadge}`}
                  >
                    <span className={styles.regLabel}>
                      <FiGithub size={13} />
                      source
                    </span>
                    <span
                      className={`${styles.regValue} ${styles.regValueGithub}`}
                    >
                      github
                    </span>
                  </a>
                  <a
                    href="https://www.npmjs.com/package/falcosend-sdk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.regBadge} ${styles.linkBadge}`}
                  >
                    <span className={styles.regLabel}>install</span>
                    <span
                      className={`${styles.regValue} ${styles.regValueNpm}`}
                    >
                      npm
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.artifactColumn}>
              <div className={styles.codeFrame}>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
