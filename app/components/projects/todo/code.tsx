"use client";

import { Server, Smartphone, ArrowRight } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import styles from "./code.module.css";

export default function TaskFlowShowcase() {
  return (
    <section className={styles.container}>
      <span className={styles.tag}>Full-Stack System</span>
      <h2 className={styles.title}>TaskFlow App (DRF + Flutter)</h2>
      <p className={styles.desc}>
        A multi-platform task management system proving clean decoupling between
        a Django REST Framework API engine and a high-performance Flutter mobile
        application.
      </p>

      <div className={styles.architectureDiagram}>
        <div className={styles.node}>
          <Server size={22} className={styles.nodeIcon} />
          <div>
            <strong>Django REST Engine</strong>
            <p>JWT Auth & Persistence Layer</p>
          </div>
        </div>

        <div className={styles.connector}>
          <ArrowRight size={18} />
          <span>REST API / JSON</span>
        </div>

        <div className={styles.node}>
          <Smartphone size={22} className={styles.nodeIcon} />
          <div>
            <strong>Flutter Client</strong>
            <p>Cross-Platform UI with Offline Sync</p>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <a
          href="https://github.com/elisoft-engineer/todo-api"
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          <FontAwesomeIcon icon={faGithub} /> View Full Source Code
        </a>
      </div>
    </section>
  );
}
