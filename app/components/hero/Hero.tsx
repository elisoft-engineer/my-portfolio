"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiCode, FiPhoneCall } from "react-icons/fi";
import styles from "./hero.module.css";

import profileImg from "@/assets/images/profile.webp";
import falcosendIcon from "@/assets/icons/falcosend.svg";
import ellypadIcon from "@/assets/icons/ellypad.svg";
import { fadeInUp, staggerContainer } from "../../constants/animations";

export const HeroSection = () => {
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className={styles.heroGrid} id="hero">
      {/* Left Column: Statement Intro */}
      <motion.div
        className={styles.heroLeft}
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Sleek Modern Status Badge */}
        <motion.div className={styles.statusBadge} variants={fadeInUp}>
          <span className={styles.radarContainer}>
            <span className={styles.radarPulse} />
            <span className={styles.radarDot} />
          </span>
          <span className={styles.statusText}>
            Available for Engineering Roles & Contracts
          </span>
        </motion.div>

        {/* Connected Statement Headline */}
        <motion.div className={styles.statementWrapper} variants={fadeInUp}>
          <p className={styles.greetingText}>Hi, I'm</p>
          <h1 className={styles.statementHeadline}>
            <span className={styles.nameHighlight}>Elkana Maina</span>,
            <span className={styles.roleLine}>
              {" "}
              a <span className={styles.codeSoftware}>Software</span>{" "}
              <span className={styles.codeEngineer}>Engineer</span>
            </span>
          </h1>
        </motion.div>

        {/* Bio Paragraph */}
        <motion.p className={styles.heroParagraph} variants={fadeInUp}>
          I build reliable web applications, high-performance mobile platforms,
          distributed backend systems, and practical machine learning models.
          Focused on replacing complex operational bottlenecks with clean,
          scalable software.
        </motion.p>

        {/* Animated Smooth-Scroll CTAs with Unique Icon Animations */}
        <motion.div className={styles.heroCTA} variants={fadeInUp}>
          <a
            href="#projects"
            onClick={(e) => scrollToSection(e, "#projects")}
            className={styles.btnPrimary}
          >
            <span className={styles.codeIconWrapper}>
              <FiCode />
            </span>
            <span>View Systems</span>
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            className={styles.btnSecondary}
          >
            <span className={styles.phoneIconWrapper}>
              <FiPhoneCall />
            </span>
            <span>Get in Touch</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Right Column: Frame & Branded Chips */}
      <motion.div
        className={styles.heroRight}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.imageGlassFrame}>
          <Image
            src={profileImg}
            alt="Elkana Maina"
            width={600}
            height={700}
            className={styles.profileImage}
            priority
          />
        </div>

        {/* Brand Floating Chip 1 */}
        <div className={`${styles.floatingChip} ${styles.chipTopRight}`}>
          <span className={styles.chipIcon}>
            <Image
              src={falcosendIcon}
              alt="Falcosend"
              width={20}
              height={20}
              className={styles.brandSvg}
            />
          </span>
          <span>
            Creator of <strong>Falcosend</strong>
          </span>
        </div>

        {/* Brand Floating Chip 2 */}
        <div className={`${styles.floatingChip} ${styles.chipBottomLeft}`}>
          <span className={styles.chipIcon}>
            <Image
              src={ellypadIcon}
              alt="Ellypad Tech"
              width={20}
              height={20}
              className={styles.brandSvg}
            />
          </span>
          <span>
            Cofounder of <strong>Ellypad Tech</strong>
          </span>
        </div>
      </motion.div>
    </section>
  );
};
