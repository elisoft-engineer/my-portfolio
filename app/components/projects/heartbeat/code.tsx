"use client";

import { Activity, ArrowUpRight, CheckCircle } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import styles from "./code.module.css";

export default function HeartbeatShowcase() {
  return (
    <section className={styles.showcase}>
      <div className={styles.header}>
        <div>
          <span className={styles.tag}>DevOps</span>
          <h2>💓 Heartbeat Service Monitor</h2>
        </div>
        <a
          href="https://github.com/elisoft-engineer/heartbeat"
          target="_blank"
          rel="noreferrer"
          className={styles.repoLink}
        >
          <FontAwesomeIcon icon={faGithub} /> GitHub Repository{" "}
          <ArrowUpRight size={14} />
        </a>
      </div>

      <p className={styles.summary}>
        An uptime tracking engine designed to ping your services, log latency
        statistics, and trigger alerts when status checks fail.
      </p>

      {/* Real-time Visual Monitor */}
      <div className={styles.monitorBoard}>
        <div className={styles.boardHeader}>
          <div className={styles.statusIndicator}>
            <Activity size={16} className={styles.pulse} />
            <span>Active Polling Nodes</span>
          </div>
          <span className={styles.uptimeMetric}>99.99% Operational</span>
        </div>

        <div className={styles.rows}>
          <div className={styles.row}>
            <div className={styles.name}>
              <CheckCircle size={14} color="#27c93f" /> Core REST API
            </div>
            <div className={styles.ms}>11ms</div>
          </div>
          <div className={styles.row}>
            <div className={styles.name}>
              <CheckCircle size={14} color="#27c93f" /> Authentication Vault
            </div>
            <div className={styles.ms}>19ms</div>
          </div>
          <div className={styles.row}>
            <div className={styles.name}>
              <CheckCircle size={14} color="#27c93f" /> Read-Replica DB
            </div>
            <div className={styles.ms}>6ms</div>
          </div>
        </div>
      </div>
    </section>
  );
}
