"use client";

import styles from "./page.module.css";
import { HeroSection } from "./components/hero/Hero";
import { FeaturedSection } from "./components/featured/Featured";
import { ContactSection } from "./components/contact/Contact";
import { OpenSourceSection } from "./components/open-source/OpenSource";
import { SkillsSection } from "./components/skills/Skills";
import { CertificationsSection } from "./components/certifications/Certifications";

// Section Sub-Components
const AmbientBackground = () => (
  <>
    <div className={styles.ambientContainer}>
      <div className={styles.blob1} />
      <div className={styles.blob2} />
      <div className={styles.blob3} />
    </div>
    <div className={styles.dotMatrixOverlay} />
  </>
);

const Home = () => {
  return (
    <div className={styles.viewport}>
      <AmbientBackground />
      <div className={styles.layoutWrapper}>
        <HeroSection />
        <FeaturedSection />
        <OpenSourceSection />
        <SkillsSection />
        <CertificationsSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Home;
