"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import styles from "./skills.module.css";
import { SKILL_CATEGORIES } from "@/app/constants/skills";

export const SkillsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isProgrammaticScroll = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleScroll = () => {
    if (isProgrammaticScroll.current || !viewportRef.current) return;

    const viewport = viewportRef.current;
    const viewportCenter = viewport.scrollLeft + viewport.clientWidth / 2;

    let closestIndex = 0;
    let minDistance = Infinity;

    cardRefs.current.forEach((card, idx) => {
      if (!card) return;
      const cardCenter = card.offsetLeft + card.clientWidth / 2;
      const distance = Math.abs(viewportCenter - cardCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = idx;
      }
    });

    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }
  };

  const scrollToCard = (index: number) => {
    setActiveIndex(index);
    isProgrammaticScroll.current = true;

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    const viewport = viewportRef.current;
    const card = cardRefs.current[index];

    if (viewport && card) {
      const targetLeft =
        card.offsetLeft - (viewport.clientWidth - card.clientWidth) / 2;

      viewport.scrollTo({
        left: targetLeft,
        behavior: "smooth",
      });
    }

    scrollTimeoutRef.current = setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 500);
  };

  return (
    <section className={styles.skillsSection} id="skills">
      {/* Section Header */}
      <motion.div
        className={styles.sectionHeader}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={styles.headerTitle}>
          My <span className={styles.titleHighlight}>Technical Repertoire</span>
        </h2>
        <p className={styles.headerSubtitle}>
          The tools, frameworks, and environments I work with daily.
        </p>
      </motion.div>

      {/* Workspace Track Slider */}
      <motion.div
        className={styles.workspaceWrapper}
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <button
          className={`${styles.navButton} ${styles.navLeft}`}
          onClick={() => scrollToCard(Math.max(0, activeIndex - 1))}
          disabled={activeIndex === 0}
          aria-label="Previous workspace"
        >
          <FiChevronLeft />
        </button>

        <button
          className={`${styles.navButton} ${styles.navRight}`}
          onClick={() =>
            scrollToCard(Math.min(SKILL_CATEGORIES.length - 1, activeIndex + 1))
          }
          disabled={activeIndex === SKILL_CATEGORIES.length - 1}
          aria-label="Next workspace"
        >
          <FiChevronRight />
        </button>

        <div
          className={styles.workspaceViewport}
          ref={viewportRef}
          onScroll={handleScroll}
        >
          <div className={styles.workspaceTrack}>
            {SKILL_CATEGORIES.map((category, idx) => {
              const isActive = idx === activeIndex;
              return (
                <motion.div
                  key={category.id}
                  ref={(el) => {
                    cardRefs.current[idx] = el;
                  }}
                  className={`${styles.workspaceCard} ${
                    category.cardThemeClass
                  } ${isActive ? styles.activeCard : styles.inactiveCard}`}
                  animate={{
                    scale: isActive ? 1 : 0.92,
                    opacity: isActive ? 1 : 0.45,
                  }}
                  transition={{ duration: 0.3 }}
                  onClick={() => scrollToCard(idx)}
                >
                  <div className={styles.cardHeader}>
                    <div
                      className={`${styles.cardTitle} ${category.titleFontClass}`}
                    >
                      {category.title}
                    </div>
                    <p className={styles.cardSubtitle}>{category.subtitle}</p>
                  </div>

                  <div className={styles.hexGrid}>
                    {category.skills.map((skill, sIdx) => (
                      <div key={sIdx} className={styles.hexNode}>
                        <div className={styles.hexBadge}>
                          <div className={styles.hexInner}>
                            {skill.type === "image" && skill.src ? (
                              <Image
                                src={skill.src}
                                alt={skill.name}
                                width={24}
                                height={24}
                                className={styles.hexImage}
                              />
                            ) : (
                              <span className={styles.hexIcon}>
                                {skill.icon}
                              </span>
                            )}
                          </div>
                        </div>
                        <span className={styles.nodeLabel}>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Dock Navigation Control Bar */}
      <motion.div
        className={styles.dockWrapper}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className={styles.filterDock}>
          {SKILL_CATEGORIES.map((cat, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={cat.id}
                className={`${styles.dockButton} ${
                  isActive ? styles.activeButton : ""
                }`}
                onClick={() => scrollToCard(idx)}
                aria-label={cat.title}
                title={cat.title}
              >
                <span className={styles.dockIcon}>{cat.icon}</span>
                <span className={styles.dockButtonLabel}>{cat.title}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeDockTab"
                    className={styles.dockActiveBg}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};
