"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Copy, Check, Terminal, Database, Zap, Table, Cpu } from "lucide-react";
import Image from "next/image";
import styles from "./code.module.css";
import alchemistImg from "@/assets/images/alchemist shell.png";

export default function AlchemistShowcase() {
  const [copied, setCopied] = useState(false);

  const copyInstall = () => {
    navigator.clipboard.writeText("pip install alchemist-shell");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const features = [
    { icon: Database, name: "Model Auto-Discovery", color: "#4eeb53" },
    { icon: Zap, name: "Native Auto-Await", color: "#11e29f" },
    { icon: Table, name: "Rich Table Rendering", color: "#d422e7" },
    { icon: Cpu, name: "Pre-Loaded ORM Toolkit", color: "#00c3ff" },
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.titleMobile}>🔮 Alchemist Shell</h2>

      <div className={styles.grid}>
        <div className={styles.imageWrapper}>
          <Image
            src={alchemistImg}
            alt="Alchemist Shell Screenshot"
            width={1147}
            height={683}
            className={styles.terminalImg}
            priority
            quality={100}
          />
        </div>
        <div className={styles.leftPane}>
          <h2 className={styles.titleDesktop}>🔮 Alchemist Shell</h2>

          <p className={styles.description}>
            An interactive CLI workbench tailored for SQLAlchemy developers. It
            enables instant database inspection on the command line with model
            autodiscovery, session initialization, and rich table rendering.
          </p>

          <div className={styles.featureGrid}>
            {features.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.name} className={styles.featureItem}>
                  <Icon
                    size={15}
                    className={styles.featureIcon}
                    style={{ color: item.color }}
                  />
                  <span>{item.name}</span>
                </div>
              );
            })}
          </div>

          <div className={styles.actionBlock}>
            <div className={styles.installBar}>
              <Terminal size={15} className={styles.termIcon} />
              <code>pip install alchemist-shell</code>
              <button
                onClick={copyInstall}
                className={styles.copyBtn}
                title="Copy command"
              >
                {copied ? (
                  <Check size={14} className={styles.checkIcon} />
                ) : (
                  <Copy size={14} />
                )}
              </button>
            </div>

            <div className={styles.links}>
              <a
                href="https://pypi.org/project/alchemist-shell"
                target="_blank"
                rel="noreferrer"
                className={styles.pypiBtn}
              >
                <FontAwesomeIcon icon={faPython} /> PyPI Package
              </a>
              <a
                href="https://github.com/elisoft-engineer/alchemist-shell"
                target="_blank"
                rel="noreferrer"
                className={styles.githubBtn}
              >
                <FontAwesomeIcon icon={faGithub} /> View Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
