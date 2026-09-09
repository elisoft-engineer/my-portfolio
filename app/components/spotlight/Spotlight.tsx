"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiAward,
  FiCheckCircle,
  FiCalendar,
  FiMapPin,
  FiMaximize2,
  FiX,
  FiCpu,
  FiShield,
  FiCode,
  FiBookOpen,
} from "react-icons/fi";
import styles from "./spotlight.module.css";

import { fadeInUp, staggerContainer } from "@/app/constants/animations";

import gradHero from "@/assets/images/graduation-hero.jpg";
import gradLand1 from "@/assets/images/graduation-landscape-1.png";
import gradLand2 from "@/assets/images/graduation-landscape-2.jpg";
import gradPort1 from "@/assets/images/graduation-portrait-1.jpg";
import gradPort2 from "@/assets/images/graduation-portrait-2.jpg";

interface PhotoItem {
  id: number;
  src: any;
  alt: string;
  caption: string;
  type: "hero" | "landscape" | "portrait";
}

const galleryPhotos: PhotoItem[] = [
  {
    id: 1,
    src: gradHero,
    alt: "Elkana Maina Graduation Milestone Portrait",
    caption: "B.Sc. Software Engineering Graduate (First Class Honours)",
    type: "hero",
  },
  {
    id: 2,
    src: gradLand1,
    alt: "Academic research and focus in library",
    caption: "Academic Research & Self-Directed Study",
    type: "landscape",
  },
  {
    id: 3,
    src: gradPort1,
    alt: "Graduation gown milestone photo",
    caption: "Academic Attire Portrait",
    type: "portrait",
  },
  {
    id: 4,
    src: gradPort2,
    alt: "Celebratory group photo with fellow graduates",
    caption: "Celebratory Moments with Fellow Graduates",
    type: "portrait",
  },
  {
    id: 5,
    src: gradLand2,
    alt: "Cap throwing celebration on campus grounds",
    caption: "The Cap Toss",
    type: "landscape",
  },
];

export const SpotlightSection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <motion.section
        className={styles.spotlightSection}
        id="spotlight"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div className={styles.sectionHeader} variants={fadeInUp}>
          <div className={styles.headerTitleContainer}>
            <span className={styles.titleIconBadge}>
              <FiAward />
            </span>
            <h2 className={styles.headerTitle}>
              Academic <span className={styles.gradientText}>Spotlight</span>
            </h2>
          </div>
          <p className={styles.headerSubtext}>
            A celebration of academic excellence, technical mastery, and
            undergraduate engineering milestones.
          </p>
        </motion.div>

        <div className={styles.spotlightContainer}>
          <motion.div className={styles.narrativeColumn} variants={fadeInUp}>
            <div className={styles.degreeHeader}>
              <div className={styles.universityRow}>
                <span className={styles.universityName}>
                  <FiMapPin /> Murang'a University of Technology
                </span>
                <span className={styles.timelineTag}>
                  <FiCalendar /> Aug 2026
                </span>
              </div>
              <h3 className={styles.degreeTitle}>
                Bachelor of Science in Software Engineering
              </h3>
              <div className={styles.honorsBadge}>
                <FiCheckCircle /> First Class Honours
              </div>
            </div>

            <p className={styles.storyText}>
              I earned my First Class Honours degree at Murang'a University of
              Technology, where I spent my time diving deep into modern software
              development, AI & machine learning, networking, and practical tech
              research.
            </p>

            <div className={styles.curriculumBlock}>
              <h4 className={styles.blockTitle}>Core Areas of Study</h4>
              <div className={styles.pillarList}>
                <div className={styles.pillarItem}>
                  <FiCode className={styles.pillarIcon} />
                  <div>
                    <strong>Software Engineering & Quality Architecture</strong>
                    <p>
                      Object-oriented analysis & design, Agile TDD, Distributed
                      systems, Software quality assurance.
                    </p>
                  </div>
                </div>

                <div className={styles.pillarItem}>
                  <FiCpu className={styles.pillarIcon} />
                  <div>
                    <strong>Artificial Intelligence & Machine Learning</strong>
                    <p>
                      Machine learning algorithms, Knowledge-based systems, AI
                      fundamentals, Business intelligence.
                    </p>
                  </div>
                </div>

                <div className={styles.pillarItem}>
                  <FiShield className={styles.pillarIcon} />
                  <div>
                    <strong>Networking, Cyber Security & Systems</strong>
                    <p>
                      Computer security & cryptography, Network design &
                      management, Systems programming, Embedded systems.
                    </p>
                  </div>
                </div>

                <div className={styles.pillarItem}>
                  <FiBookOpen className={styles.pillarIcon} />
                  <div>
                    <strong>Applied Mathematics & Computer Research</strong>
                    <p>
                      Calculus, Discrete structures, Algorithm analysis,
                      Research methods, Two-phase computer research projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className={styles.galleryColumn} variants={fadeInUp}>
            <div className={styles.bentoGrid}>
              <div
                className={`${styles.bentoCard} ${styles.heroCard}`}
                onClick={() => setSelectedPhoto(galleryPhotos[0])}
              >
                <Image
                  src={galleryPhotos[0].src}
                  alt={galleryPhotos[0].alt}
                  fill
                  priority
                  className={styles.galleryImage}
                />
                <div className={styles.cardOverlay}>
                  <span className={styles.heroTag}>Main Highlight</span>
                  <p className={styles.cardCaption}>
                    {galleryPhotos[0].caption}
                  </p>
                  <FiMaximize2 className={styles.expandIcon} />
                </div>
              </div>

              <div className={styles.subGrid}>
                <div
                  className={`${styles.bentoCard} ${styles.landscapeCard}`}
                  onClick={() => setSelectedPhoto(galleryPhotos[1])}
                >
                  <Image
                    src={galleryPhotos[1].src}
                    alt={galleryPhotos[1].alt}
                    fill
                    className={styles.galleryImage}
                  />
                  <div className={styles.cardOverlay}>
                    <p className={styles.cardCaption}>
                      {galleryPhotos[1].caption}
                    </p>
                    <FiMaximize2 className={styles.expandIcon} />
                  </div>
                </div>

                <div
                  className={`${styles.bentoCard} ${styles.portraitCard}`}
                  onClick={() => setSelectedPhoto(galleryPhotos[2])}
                >
                  <Image
                    src={galleryPhotos[2].src}
                    alt={galleryPhotos[2].alt}
                    fill
                    className={styles.galleryImage}
                  />
                  <div className={styles.cardOverlay}>
                    <p className={styles.cardCaption}>
                      {galleryPhotos[2].caption}
                    </p>
                    <FiMaximize2 className={styles.expandIcon} />
                  </div>
                </div>

                <div
                  className={`${styles.bentoCard} ${styles.portraitCard}`}
                  onClick={() => setSelectedPhoto(galleryPhotos[3])}
                >
                  <Image
                    src={galleryPhotos[3].src}
                    alt={galleryPhotos[3].alt}
                    fill
                    className={styles.galleryImage}
                  />
                  <div className={styles.cardOverlay}>
                    <p className={styles.cardCaption}>
                      {galleryPhotos[3].caption}
                    </p>
                    <FiMaximize2 className={styles.expandIcon} />
                  </div>
                </div>

                <div
                  className={`${styles.bentoCard} ${styles.landscapeCard}`}
                  onClick={() => setSelectedPhoto(galleryPhotos[4])}
                >
                  <Image
                    src={galleryPhotos[4].src}
                    alt={galleryPhotos[4].alt}
                    fill
                    className={styles.galleryImage}
                  />
                  <div className={styles.cardOverlay}>
                    <p className={styles.cardCaption}>
                      {galleryPhotos[4].caption}
                    </p>
                    <FiMaximize2 className={styles.expandIcon} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {selectedPhoto && (
              <motion.div
                className={styles.modalBackdrop}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedPhoto(null)}
              >
                <motion.div
                  className={styles.modalContent}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className={styles.closeBtn}
                    onClick={() => setSelectedPhoto(null)}
                    aria-label="Close modal"
                  >
                    <FiX />
                  </button>
                  <div className={styles.modalImageWrapper}>
                    <img
                      src={
                        typeof selectedPhoto.src === "string"
                          ? selectedPhoto.src
                          : selectedPhoto.src.src
                      }
                      alt={selectedPhoto.alt}
                      className={styles.modalImage}
                    />
                  </div>
                  <div className={styles.modalFooter}>
                    <p>{selectedPhoto.caption}</p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
};
