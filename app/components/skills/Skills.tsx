"use client";

import React, { useState, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import {
  FiChevronLeft,
  FiChevronRight,
  FiLayout,
  FiServer,
  FiCpu,
  FiCloud,
} from "react-icons/fi";
import {
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiNginx,
  SiLinux,
  SiRabbitmq,
  SiRedis,
  SiGit,
  SiPytorch,
  SiPandas,
  SiTensorflow,
  SiKeras,
  SiJupyter,
} from "react-icons/si";
import styles from "./skills.module.css";

import css from "@/assets/icons/css.png";
import dart from "@/assets/icons/dart.png";
import django from "@/assets/icons/django.png";
import docker from "@/assets/icons/docker.png";
import fastapi from "@/assets/icons/fastapi.png";
import flutter from "@/assets/icons/flutter.png";
import html from "@/assets/icons/html.png";
import javascript from "@/assets/icons/javascript.png";
import mui from "@/assets/icons/mui.png";
import nextjs from "@/assets/icons/nextjs.png";
import nodejs from "@/assets/icons/nodejs.png";
import openapi from "@/assets/icons/openapi.png";
import postgresql from "@/assets/icons/postgresql.png";
import python from "@/assets/icons/python.png";
import react from "@/assets/icons/react.png";
import sqlalchemy from "@/assets/icons/sqlalchemy.png";
import tailwind from "@/assets/icons/tailwind.png";
import vite from "@/assets/icons/vite.png";

type SkillItem = {
  name: string;
  type: "image" | "icon";
  src?: StaticImageData;
  icon?: React.ReactNode;
};

type CategoryCard = {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  cardThemeClass: string;
  titleFontClass: string;
  skills: SkillItem[];
};

const SKILL_CATEGORIES: CategoryCard[] = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    icon: <FiLayout />,
    subtitle:
      "Focusing on performance, responsive design, and fluid user interactions.",
    cardThemeClass: styles.frontendTheme,
    titleFontClass: styles.fontFrontend,
    skills: [
      { name: "React", type: "image", src: react },
      { name: "Next.js", type: "image", src: nextjs },
      {
        name: "TypeScript",
        type: "icon",
        icon: <SiTypescript style={{ color: "#3178C6" }} />,
      },
      { name: "JavaScript", type: "image", src: javascript },
      { name: "Tailwind", type: "image", src: tailwind },
      { name: "Vite", type: "image", src: vite },
      { name: "Flutter", type: "image", src: flutter },
      { name: "Dart", type: "image", src: dart },
      { name: "MUI", type: "image", src: mui },
      { name: "HTML5", type: "image", src: html },
      { name: "CSS3", type: "image", src: css },
    ],
  },
  {
    id: "backend",
    title: "Backend Systems",
    icon: <FiServer />,
    subtitle:
      "Architecting resilient APIs, microservices, and high-throughput data pipelines.",
    cardThemeClass: styles.backendTheme,
    titleFontClass: styles.fontBackend,
    skills: [
      { name: "Node.js", type: "image", src: nodejs },
      {
        name: "Express",
        type: "icon",
        icon: <SiExpress style={{ color: "var(--text-primary)" }} />,
      },
      { name: "Python", type: "image", src: python },
      { name: "FastAPI", type: "image", src: fastapi },
      { name: "Django", type: "image", src: django },
      { name: "PostgreSQL", type: "image", src: postgresql },
      {
        name: "MongoDB",
        type: "icon",
        icon: <SiMongodb style={{ color: "#47A248" }} />,
      },
      {
        name: "Mongoose",
        type: "icon",
        icon: <SiMongoose style={{ color: "#880000" }} />,
      },
      {
        name: "Redis",
        type: "icon",
        icon: <SiRedis style={{ color: "#DC382D" }} />,
      },
      {
        name: "RabbitMQ",
        type: "icon",
        icon: <SiRabbitmq style={{ color: "#FF6600" }} />,
      },
      { name: "SQLAlchemy", type: "image", src: sqlalchemy },
      { name: "OpenAPI", type: "image", src: openapi },
    ],
  },
  {
    id: "ml",
    title: "AI & Machine Learning",
    icon: <FiCpu />,
    subtitle:
      "Training models, processing data, and serving inference endpoints at scale.",
    cardThemeClass: styles.mlTheme,
    titleFontClass: styles.fontML,
    skills: [
      { name: "Python", type: "image", src: python },
      {
        name: "PyTorch",
        type: "icon",
        icon: <SiPytorch style={{ color: "#EE4C2C" }} />,
      },
      {
        name: "TensorFlow",
        type: "icon",
        icon: <SiTensorflow style={{ color: "#FF6F00" }} />,
      },
      {
        name: "Keras",
        type: "icon",
        icon: <SiKeras style={{ color: "#D00000" }} />,
      },
      {
        name: "Jupyter",
        type: "icon",
        icon: <SiJupyter style={{ color: "#F37626" }} />,
      },
      {
        name: "Pandas",
        type: "icon",
        icon: <SiPandas style={{ color: "#150458" }} />,
      },
      { name: "FastAPI", type: "image", src: fastapi },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Cloud",
    icon: <FiCloud />,
    subtitle:
      "Streamlining CI/CD pipelines, container orchestration, and server reliability.",
    cardThemeClass: styles.devopsTheme,
    titleFontClass: styles.fontDevops,
    skills: [
      { name: "Docker", type: "image", src: docker },
      {
        name: "Nginx",
        type: "icon",
        icon: <SiNginx style={{ color: "#009639" }} />,
      },
      {
        name: "Linux",
        type: "icon",
        icon: <SiLinux style={{ color: "#FCC624" }} />,
      },
      {
        name: "Git Workflow",
        type: "icon",
        icon: <SiGit style={{ color: "#F05032" }} />,
      },
    ],
  },
];

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
      <div className={styles.sectionHeader}>
        <h2 className={styles.headerTitle}>
          My <span className={styles.titleHighlight}>Technical Repertoire</span>
        </h2>
        <p className={styles.headerSubtitle}>
          The tools, frameworks, and environments I work with daily.
        </p>
      </div>

      {/* Workspace Track Slider */}
      <div className={styles.workspaceWrapper}>
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
      </div>

      {/* Dock Navigation Control Bar */}
      <div className={styles.dockWrapper}>
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
      </div>
    </section>
  );
};
