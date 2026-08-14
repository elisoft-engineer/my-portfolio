"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiDart,
  SiKotlin,
  SiCplusplus,
  SiHtml5,
  SiCss,
} from "react-icons/si";

import styles from "./styles.module.css";

const LANGUAGES = [
  { name: "Python", percentage: 95, icon: SiPython, color: "#3776AB" },
  { name: "JavaScript", percentage: 95, icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", percentage: 90, icon: SiTypescript, color: "#3178C6" },
  { name: "Dart", percentage: 85, icon: SiDart, color: "#0175C2" },
  { name: "Kotlin", percentage: 80, icon: SiKotlin, color: "#7F52FF" },
  { name: "C++", percentage: 90, icon: SiCplusplus, color: "#00599C" },
  { name: "HTML5", percentage: 95, icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", percentage: 95, icon: SiCss, color: "#1572B6" },
];

export default function LanguagesSection() {
  const radius = 18;
  const circumference = 2 * Math.PI * radius;

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.titleGroup}>
          <Code2 size={20} className={styles.icon} />
          <h2>Programming Languages</h2>
        </div>
        <p className={styles.subtitle}>
          Core languages and development standards
        </p>
      </div>

      <div className={styles.grid}>
        {LANGUAGES.map((lang, index) => {
          const Icon = lang.icon;
          const strokeDashoffset =
            circumference - (lang.percentage / 100) * circumference;

          return (
            <motion.div
              key={lang.name}
              className={styles.card}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <div className={styles.cardTop}>
                <div
                  className={styles.iconWrapper}
                  style={{ color: lang.color }}
                >
                  <Icon size={26} />
                </div>
              </div>

              <div className={styles.cardBottom}>
                <div className={styles.info}>
                  <span className={styles.name}>{lang.name}</span>
                  <span className={styles.percentage}>{lang.percentage}%</span>
                </div>

                <div className={styles.dialContainer}>
                  <svg className={styles.dialSvg} viewBox="0 0 44 44">
                    <circle
                      className={styles.dialBg}
                      cx="22"
                      cy="22"
                      r={radius}
                    />
                    <motion.circle
                      className={styles.dialFill}
                      cx="22"
                      cy="22"
                      r={radius}
                      style={{ stroke: lang.color }}
                      initial={{
                        strokeDasharray: circumference,
                        strokeDashoffset: circumference,
                      }}
                      whileInView={{ strokeDashoffset: strokeDashoffset }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.0,
                        delay: 0.15 + index * 0.05,
                        ease: "easeOut",
                      }}
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
