"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Terminal, Copy, Check } from "lucide-react";
import styles from "./code.module.css";

export default function AlchemistShowcase() {
  const [copied, setCopied] = useState(false);

  const copyInstall = () => {
    navigator.clipboard.writeText("pip install alchemist-shell");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.terminalSide}>
        <div className={styles.window}>
          <div className={styles.windowBar}>
            <Terminal size={14} />
            <span>alchemist shell — Python 3.14</span>
          </div>
          <div className={styles.windowBody}>
            <p className={styles.promptLine}>$ alchemist shell</p>
            <p className={styles.metaInfo}>
              🔮 Discovered 14 SQLAlchemy models in current directory.
            </p>
            <p className={styles.promptLine}>
              <span className={styles.cmd}>alchemist ❯</span> result = await
              db.execute(select(User))
            </p>
            <p className={styles.promptLine}>
              <span className={styles.cmd}>alchemist ❯</span> users =
              result.scalars().all()
            </p>
            <p className={styles.promptLine}>
              <span className={styles.cmd}>alchemist ❯</span> users
            </p>

            <table className={styles.outputTable}>
              <thead>
                <tr>
                  <th>id</th>
                  <th>username</th>
                  <th>email</th>
                  <th>role</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>elisoft</td>
                  <td>elisoft@dev.io</td>
                  <td className={styles.highlight}>admin</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className={styles.infoSide}>
        <span className={styles.tag}>CLI & ORM Tool</span>
        <h2>🔮 Alchemist Shell</h2>
        <p>
          An interactive CLI tool tailored for SQLAlchemy developers. It enables
          developers to interact with their SQLAlchemy database instances on the
          commandline. It features model autodiscovery, session initialization,
          object and list rendering as tables on the terminal, auto imports for
          common utilities such as select, among others. It saves a lot of time
          when testing the database setup.
        </p>

        {/* Installation Command Bar */}
        <div className={styles.installBar}>
          <code>pip install alchemist-shell</code>
          <button
            onClick={copyInstall}
            className={styles.copyBtn}
            title="Copy command"
          >
            {copied ? <Check size={14} color="#27c93f" /> : <Copy size={14} />}
          </button>
        </div>

        <div className={styles.links}>
          <a
            href="https://pypi.org/project/alchemist-shell"
            target="_blank"
            rel="noreferrer"
            className={styles.pypiBtn}
          >
            <FontAwesomeIcon icon={faPython} size="lg" /> View PyPI Package
          </a>
          <a
            href="https://github.com/elisoft-engineer/alchemist-shell"
            target="_blank"
            rel="noreferrer"
            className={styles.githubLink}
          >
            <FontAwesomeIcon icon={faGithub} /> Source Code
          </a>
        </div>
      </div>
    </section>
  );
}
