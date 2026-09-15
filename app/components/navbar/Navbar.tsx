"use client";

import React, {
  useState,
  useEffect,
  useRef,
  useSyncExternalStore,
} from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
} from "framer-motion";
import { useTheme } from "next-themes";
import {
  FiUser,
  FiStar,
  FiGitPullRequest,
  FiCpu,
  FiAward,
  FiZap,
  FiMail,
} from "react-icons/fi";
import { scrollToSection } from "@/app/utils/scroller";
import styles from "./navbar.module.css";

type NavItem = {
  id: string;
  label: string;
  icon: React.ElementType;
};

const NAV_ITEMS: NavItem[] = [
  { id: "hero", label: "Who am I?", icon: FiUser },
  { id: "ventures", label: "Featured Work", icon: FiStar },
  { id: "open-source", label: "Open Source", icon: FiGitPullRequest },
  { id: "skills", label: "Tech Stack", icon: FiCpu },
  { id: "certifications", label: "Credentials", icon: FiAward },
  { id: "spotlight", label: "Highlights", icon: FiZap },
  { id: "contact", label: "Let's Connect", icon: FiMail },
];

const BASE_STRING_LEN = 40;
const SVG_CENTER_X = 20;
const MAX_STRETCH = 20;

const emptySubscribe = () => () => {};
const useIsMounted = () =>
  useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const mounted = useIsMounted();
  const { resolvedTheme, setTheme } = useTheme();

  const isClickScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (isClickScrollingRef.current) return;
      const triggerPosition = window.innerHeight / 3;

      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const section = document.getElementById(NAV_ITEMS[i].id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= triggerPosition && rect.bottom >= 0) {
            setActiveSection(NAV_ITEMS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  const dragY = useMotionValue(0);
  const springY = useSpring(dragY, { stiffness: 600, damping: 20, mass: 0.25 });

  const stringWiggle = useMotionValue(0);
  const springWiggle = useSpring(stringWiggle, { stiffness: 450, damping: 12 });

  const stringPath = useTransform(
    [springY, springWiggle],
    ([yVal, wiggleVal]) => {
      const totalLen = BASE_STRING_LEN + (yVal as number);
      const midY = totalLen / 2;
      const curveX = SVG_CENTER_X + (wiggleVal as number);
      return `M ${SVG_CENTER_X} 0 Q ${curveX} ${midY} ${SVG_CENTER_X} ${totalLen}`;
    },
  );

  const isDark = mounted && resolvedTheme === "dark";

  const handleDrag = (_: unknown, info: { offset: { y: number } }) => {
    const clampedY = Math.min(MAX_STRETCH, Math.max(0, info.offset.y));
    dragY.set(clampedY);
  };

  const handleDragEnd = (_: unknown, info: { offset: { y: number } }) => {
    if (info.offset.y > 10) {
      setTheme(isDark ? "light" : "dark");
    }

    animate(dragY, 0, { type: "spring", stiffness: 600, damping: 20 });
    animate(stringWiggle, [0, 7, -5, 3, -1, 0], {
      duration: 0.5,
      ease: "easeOut",
    });
  };

  return (
    <aside className={styles.navContainer} aria-label="Main Navigation">
      <div className={styles.lampAssembly}>
        <div
          className={`${styles.bulbWrapper} ${
            isDark ? styles.bulbOff : styles.bulbOn
          }`}
        >
          <svg
            width="38"
            height="46"
            viewBox="0 0 42 52"
            fill="none"
            className={styles.bulbSvg}
          >
            <defs>
              <radialGradient id="bulbOnGlow" cx="50%" cy="38%" r="55%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="30%" stopColor="#e0f2fe" />
                <stop offset="70%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#0284c7" />
              </radialGradient>

              <radialGradient id="bulbOffGlow" cx="40%" cy="30%" r="60%">
                <stop offset="0%" stopColor="#64748b" stopOpacity="0.7" />
                <stop offset="70%" stopColor="#1e293b" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#0f172a" stopOpacity="0.98" />
              </radialGradient>

              <linearGradient id="metalBase" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#475569" />
                <stop offset="50%" stopColor="#cbd5e1" />
                <stop offset="100%" stopColor="#334155" />
              </linearGradient>

              <filter
                id="cyanGlow"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <path
              d="M 21 4 C 11 4 5 11 5 21 C 5 27 10 31 13 36 L 28 36 C 31 31 36 27 36 21 C 36 11 30 4 21 4 Z"
              fill={isDark ? "url(#bulbOffGlow)" : "url(#bulbOnGlow)"}
              filter={isDark ? "none" : "url(#cyanGlow)"}
            />

            <path
              d="M 12 10 A 11 11 0 0 1 21 7"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              opacity={isDark ? "0.25" : "0.85"}
            />

            <path
              d="M 16 35 L 18 22 L 21 25 L 24 22 L 26 35"
              stroke={isDark ? "#334155" : "#f0f9ff"}
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity={isDark ? "0.5" : "0.95"}
            />

            <path d="M 13 36 H 28 V 40 H 13 Z" fill="url(#metalBase)" />
            <path d="M 14 40 H 27 V 43 H 14 Z" fill="url(#metalBase)" />
            <path d="M 16 43 H 25 V 46 H 16 Z" fill="#1e293b" />
          </svg>
        </div>

        <div className={styles.stringStage}>
          <svg className={styles.stringSvg} width="40" height="90">
            <motion.path
              d={stringPath}
              fill="none"
              stroke={isDark ? "#64748b" : "#38bdf8"}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          <motion.div
            className={styles.pullNode}
            drag="y"
            dragSnapToOrigin
            dragConstraints={{ top: 0, bottom: MAX_STRETCH }}
            dragElastic={0.02}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}
            style={{ y: springY }}
            whileTap={{ scale: 1.08 }}
            aria-label="Pull handle to switch theme"
            title="Pull handle to switch theme"
          >
            <div className={styles.nodeRing} />
            <div className={styles.nodeBead} />
          </motion.div>
        </div>
      </div>

      <nav className={styles.navDock}>
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          const targetHref = `#${item.id}`;

          return (
            <a
              key={item.id}
              href={targetHref}
              onClick={(e) => {
                isClickScrollingRef.current = true;
                if (scrollTimeoutRef.current)
                  clearTimeout(scrollTimeoutRef.current);
                scrollToSection(e, targetHref);
                setActiveSection(item.id);
                scrollTimeoutRef.current = setTimeout(() => {
                  isClickScrollingRef.current = false;
                }, 800);
              }}
              className={`${styles.navItem} ${
                isActive ? styles.activeItem : ""
              }`}
              aria-label={item.label}
            >
              <div className={styles.iconWrapper}>
                <Icon className={styles.icon} />
              </div>

              <span className={styles.tooltip}>{item.label}</span>

              {isActive && (
                <div className={styles.activeSmudge}>
                  <div className={styles.smudgeCurveLeft} />
                  <div className={styles.smudgeCurveRight} />
                </div>
              )}

              {isActive && (
                <motion.div
                  layoutId="activeBgDesktop"
                  className={styles.activeBgDesktop}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}

              {isActive && (
                <motion.div
                  layoutId="activeMobilePill"
                  className={styles.activeMobileIndicator}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          );
        })}
      </nav>
    </aside>
  );
};
