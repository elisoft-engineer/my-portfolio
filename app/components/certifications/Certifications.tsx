"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiExternalLink,
  FiCode,
  FiCpu,
  FiServer,
  FiTerminal,
  FiGrid,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import styles from "./certifications.module.css";

import {
  cardItemVariants,
  gridContainerVariants,
} from "@/app/constants/animations";
import { CategoryId, CREDENTIALS } from "@/app/constants/certifications";

const ITEMS_PER_PAGE = 6;

export const CertificationsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");
  const [currentPage, setCurrentPage] = useState(1);

  const categories = [
    {
      id: "all",
      label: "All Credentials",
      icon: <FiGrid />,
      count: CREDENTIALS.length,
    },
    {
      id: "software",
      label: "Software Dev",
      icon: <FiCode />,
      count: CREDENTIALS.filter((c) => c.category === "software").length,
    },
    {
      id: "aiml",
      label: "AI & ML",
      icon: <FiCpu />,
      count: CREDENTIALS.filter((c) => c.category === "aiml").length,
    },
    {
      id: "genai",
      label: "Generative AI",
      icon: <FiTerminal />,
      count: CREDENTIALS.filter((c) => c.category === "genai").length,
    },
    {
      id: "networking",
      label: "Networking",
      icon: <FiServer />,
      count: CREDENTIALS.filter((c) => c.category === "networking").length,
    },
  ];

  const filteredCredentials = useMemo(() => {
    return CREDENTIALS.filter(
      (item) => activeCategory === "all" || item.category === activeCategory,
    );
  }, [activeCategory]);

  const totalPages = Math.ceil(filteredCredentials.length / ITEMS_PER_PAGE);

  const paginatedCredentials = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredCredentials.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredCredentials, currentPage]);

  const handleCategoryChange = (catId: CategoryId) => {
    setActiveCategory(catId);
    setCurrentPage(1);
  };

  return (
    <section className={styles.sectionContainer} id="certifications">
      {/* Header: Gentle Top-Down Fade Reveal */}
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: -15, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className={styles.title}>
          <span className={styles.titleCert}>Certifications</span> &amp;{" "}
          <span className={styles.titleBadge}>Badges</span>
        </h2>
        <p className={styles.subtitle}>
          Official credentials validating expertise in software development,
          AI/ML, and networking.
        </p>
      </motion.div>

      <motion.div
        className={styles.dockWrapper}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <div className={styles.filterDock}>
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                className={`${styles.dockButton} ${
                  isActive ? styles.activeButton : ""
                }`}
                onClick={() => handleCategoryChange(cat.id as CategoryId)}
              >
                <span className={styles.dockIcon}>{cat.icon}</span>
                <span className={styles.dockLabel}>{cat.label}</span>
                <span className={styles.dockBadge}>{cat.count}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeCertDockTab"
                    className={styles.dockActiveBg}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Grid Display: Staggered Spring Pop-In */}
      <div className={styles.gridViewport}>
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeCategory}-page-${currentPage}`}
            variants={gridContainerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={styles.gridContainer}
          >
            {paginatedCredentials.map((item) => (
              <motion.div
                key={item.id}
                variants={cardItemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={styles.card}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.logoBox}>
                    <Image
                      src={item.institution.logo}
                      alt={item.institution.name}
                      width={40}
                      height={40}
                      className={styles.institutionLogo}
                    />
                  </div>
                  <div
                    className={`${styles.typeTag} ${
                      item.type === "badge" ? styles.badgeType : styles.certType
                    }`}
                  >
                    {item.type === "badge" ? "Badge" : "Certificate"}
                  </div>
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.issuerName}>{item.institution.name}</p>

                  <div className={styles.skillsList}>
                    {item.skills.map((skill, idx) => (
                      <span key={idx} className={styles.skillPill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={styles.cardFooter}>
                  <span className={styles.dateLabel}>{item.obtainedOn}</span>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.verifyLink}
                  >
                    <span>Verify</span>
                    <FiExternalLink />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination Bar: Simple Fade-In */}
      {totalPages > 1 && (
        <motion.div
          className={styles.paginationBar}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <button
            className={styles.pageArrow}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            aria-label="Previous Page"
          >
            <FiChevronLeft />
          </button>

          <div className={styles.pageDots}>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${
                  currentPage === i + 1 ? styles.activeDot : ""
                }`}
                onClick={() => setCurrentPage(i + 1)}
              />
            ))}
          </div>

          <button
            className={styles.pageArrow}
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            aria-label="Next Page"
          >
            <FiChevronRight />
          </button>
        </motion.div>
      )}
    </section>
  );
};
