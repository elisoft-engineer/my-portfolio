"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNpm, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Check, Copy, Zap, ShieldCheck } from "lucide-react";
import CodeBlock from "@/app/components/CodeBlock";
import styles from "./code.module.css";

const snippet = `import { FalcoSend } from 'falcosend-sdk';

const sdk = new FalcoSend({
  url: 'https://api.falcosend.ellypad.com/submissions/create/',
  submissionKey: 'myKey...'
});

const onSubmit = async (event) => {
  event.preventDefault();

  // Extract form input data directly from DOM
  const formData = new FormData(event.target);
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message')
  };

  // Submit directly without backend server boilerplate
  await sdk.submit({
    form_name: 'Contact Form',
    data
  });
};`;

export default function FalcoSendShowcase() {
  const [copied, setCopied] = useState(false);

  const copyInstall = () => {
    navigator.clipboard.writeText("pnpm add falcosend-sdk");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className={styles.container}>
      <div className={styles.intro}>
        <div className={styles.badge}>SDK / NPM Package</div>
        <h2 className={styles.title}>falcosend-sdk</h2>
        <p className={styles.lead}>
          Serverless form submissions for modern web apps. Send contact inputs,
          feedback, and surveys straight to your endpoint without writing a
          single line of backend route logic.
        </p>

        <div className={styles.actions}>
          <div className={styles.installBar}>
            <code>npm install falcosend-sdk</code>
            <button
              onClick={copyInstall}
              className={styles.copyBtn}
              title="Copy command"
            >
              {copied ? (
                <Check size={14} color="#27c93f" />
              ) : (
                <Copy size={14} />
              )}
            </button>
          </div>

          <a
            href="https://www.npmjs.com/package/falcosend-sdk"
            target="_blank"
            rel="noreferrer"
            className={styles.npmBtn}
          >
            <FontAwesomeIcon icon={faNpm} /> npm Registry
          </a>
          <a
            href="https://github.com/elisoft-engineer/falcosend-sdk"
            target="_blank"
            rel="noreferrer"
            className={styles.ghBtn}
          >
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
        </div>

        <div className={styles.highlights}>
          <span>
            <Zap size={14} /> Sub-millisecond latency
          </span>
          <span>
            <ShieldCheck size={14} /> Built-in bot & honeypot filtering
          </span>
        </div>
      </div>

      <div className={styles.codeContainer}>
        <div className={styles.codeHeader}>
          <span className={styles.dotRed} />
          <span className={styles.dotYellow} />
          <span className={styles.dotGreen} />
          <span className={styles.fileName}>quickstart.js</span>
        </div>
        <div className={styles.codeScrollArea}>
          <CodeBlock code={snippet} language="javascript" />
        </div>
      </div>
    </section>
  );
}
