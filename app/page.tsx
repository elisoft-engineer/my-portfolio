'use client';

import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faWhatsapp, faGithub } from "@fortawesome/free-brands-svg-icons";

import styles from "./page.module.css";

import profileImg from "@/assets/images/profile.webp";
import tshirtImg from "@/assets/images/me.webp";
import codingImg from "@/assets/images/programming-developer.svg";
import falcosendImg from "@/assets/images/falcosend.webp";
import ellypadImg from "@/assets/images/ellypad.webp";
import BallCanvas from "./components/BallCanvas";
import { services, technologies } from '@/app/constants';

import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { ChevronDown, ExternalLink, HelpCircle, LucideIcon, Mail, Phone, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  index: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ index, icon: Icon, title, description }) => {
  return (
    <Tilt 
      className="service-card" 
      options={{ max: 45, scale: 1, speed: 450 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <article className={styles.card}>
          <Icon size={36} className={`${styles.icon} ${styles.large}`} strokeWidth={1.5} />
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </article>
      </motion.div>
    </Tilt>
  );
};

const Home = () => {
  const typingAnimationSkills = ['Software Engineer', 'Full-Stack Developer', 'Machine Learning Engineer', 'System Architect'];
  const [currentText, setCurrentText] = useState("");
  const skillIndexRef = useRef(0);
  const isDeletingRef = useRef(false);
  const currTextRef = useRef(""); 
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const TYPING_SPEED = 100;
    const FULL_PAUSE = 500;
    const EMPTY_PAUSE = 200;

    function tick() {
      const idx = skillIndexRef.current;
      const fullText = typingAnimationSkills[idx];

      let newText = isDeletingRef.current
        ? fullText.substring(0, Math.max(0, currTextRef.current.length - 1))
        : fullText.substring(0, currTextRef.current.length + 1);

      currTextRef.current = newText;
      setCurrentText(newText);

      let delay = isDeletingRef.current ? Math.floor(TYPING_SPEED / 2) : TYPING_SPEED;

      if (!isDeletingRef.current && newText === fullText) {
        isDeletingRef.current = true;
        delay = FULL_PAUSE;
      } else if (isDeletingRef.current && newText === "") {
        isDeletingRef.current = false;
        skillIndexRef.current = (skillIndexRef.current + 1) % typingAnimationSkills.length;
        delay = EMPTY_PAUSE;
      }

      timeoutRef.current = setTimeout(tick, delay);
    }

    timeoutRef.current = setTimeout(tick, 1500);
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className={styles.home} id="home">
      <div className={styles.hero}>
        <div className={styles.background} aria-hidden>
          <svg className={styles.heroBlobs} viewBox="0 0 1200 600" preserveAspectRatio="none">
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ec80ff" />
                <stop offset="100%" stopColor="#0087ff" />
              </linearGradient>

              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff6ec7" />
                <stop offset="100%" stopColor="#ffa800" />
              </linearGradient>
            </defs>

            <path className={styles.blobLeft} d="" />
            <path className={styles.blobRight} d="" />
          </svg>
        </div>

        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.medium}>Hello, I'm</div>
            <h1 className={styles.name}>Elkana Maina</h1>
            <div className={styles.medium}>
              And I'm a{" "}
              <span className={styles.skill} aria-live="polite">
                {currentText}
              </span>
            </div>
            <div
              className={styles.heroCta}
              onClick={() => scrollTo("about")}
              aria-label="Scroll to about section"
            >
              <Search size={18} /> Get to know me
            </div>

            <div className={styles.scrollDown} aria-hidden>
              <span className={styles.scroller}>
                <ChevronDown className={styles.icon} />
              </span>
            </div>
          </div>

          <div className={styles.right}>
            <Image 
              src={profileImg} 
              alt="Elkana Maina" 
              className={styles.image} 
              priority 
              width={360}
            />
          </div>
        </div>
      </div>

      <div className={styles.about} id="about">
        <div className={styles.left}>
          <Image src={codingImg} width={256} alt="Coding" className={styles.image} />
        </div>
        <div className={styles.right}>
          <div className={styles.heading}>
            Who am I <HelpCircle className={styles.icon} />
          </div>
          <div className={styles.description}>
            I am a Software Engineer driven by a simple goal: making technology work better for people. 
            I specialize in crafting seamless digital experiences, ranging from interactive web platforms 
            to robust enterprise software. My focus is on building tools that automate the tedious, simplify 
            the complex, and help businesses scale through smart engineering.
          </div>
        </div>
      </div>

      <div className={styles.services} id="services">
        <h2 className={styles.title}>What I build</h2>
        <div className={styles.grid}>
          {services.map((s, i) => (
            <ServiceCard index={i} key={s.title} {...s} />
          ))}
        </div>
      </div>

      <div className={styles.technologiesSection}>
        <h2 className={styles.title}>Technologies</h2>
        <div className={styles.technologies}>
          {technologies.map((tech) => (
            <div className={styles.technology} key={tech.name}>
              <BallCanvas icon={tech.icon} />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.projectsPreview} id="projects-preview">
        <h2 className={styles.projectsTitle}>Featured</h2>
        <div className={styles.projects}>
          <div className={styles.card}>
            <Image src={ellypadImg} width={600} alt="Ellypad" />
            <div className={styles.meta}>
              <div className={styles.top}>
                <div className={styles.statusBadge}>
                  <span className={styles.statusDot}></span>
                  <span className={styles.statusText}>Systems Operational</span>
                </div>
                <a href="https://ellypad.com" target="_blank" className={styles.link}>
                  <ExternalLink size={16} className={styles.icon} />
                  Visit Website
                </a>
              </div>
              <h2 className={styles.title}>Ellypad</h2>
              <p className={styles.description}>
                Ellypad is a software development firm that builds high-integrity systems to simplify business 
                operations. By replacing manual processes with scalable digital architecture, they ensure software 
                mirrors an organization’s unique workflow. From enterprise automation to intuitive dashboards, 
                Ellypad delivers operational clarity through smart engineering and collaborative partnership.
              </p>
              <div className={styles.skills}>
                <span className={styles.skill}>Python</span>
                <span className={styles.skill}>Django</span>
                <span className={styles.skill}>Django REST Framework</span>
                <span className={styles.skill}>Next Js</span>
                <span className={styles.skill}>CSS 3</span>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <Image src={falcosendImg} height={337} alt="Falcosend" />
            <div className={styles.meta}>
              <h2 className={styles.title}>Falcosend</h2>
              <p className={styles.description}>
                A developer-focused platform that bridges static websites with powerful backend features 
                such as form handling, data storage, analytics, and real-time alerts.  It enables 
                developers to handle form submissions in static websites and applications without writing 
                server code. The interface for the API is currently in development.
              </p>
              <div className={styles.skills}>
                <span className={styles.skill}>Python</span>
                <span className={styles.skill}>Django</span>
                <span className={styles.skill}>Django REST Framework</span>
                <span className={styles.skill}>Next Js</span>
                <span className={styles.skill}>CSS 3</span>
              </div>
              <div className={styles.links}>
                <div className={styles.link}>
                  <ExternalLink size={16} className={styles.icon} />
                  Visit Website
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.cta} id="cta">
        <div className={styles.imageSection}>
          <div className={styles.background} />
          <Image src={tshirtImg} width={256} alt="Elkana" className={styles.image} />
        </div>
        <div className={styles.ctaContent}>
          <h3 className={styles.question}>
            Like what you see <HelpCircle className={styles.icon} />
          </h3>
          <div className={styles.ctaButtons}>
            <Link href="/projects" className={`${styles.btn} ${styles.btnPrimary}`}>
              See Projects
            </Link>
            <div
              className={`${styles.btn} ${styles.btnContact}`}
              onClick={() => scrollTo("contacts")}
            >
              <Phone size={18} /> Contact Me
            </div>
          </div>
        </div>
      </div>

      {/* ----- CONTACT ----- */}
      <div className={styles.contacts} id="contacts">
        <h2 className={styles.heading}>Get in touch</h2>
        <div className={styles.links}>
          <a
            href="https://wa.me/+254757241621?text=Hello!%20I%20would%20like%20to%20inquire%20about..."
            className={`${styles.link} ${styles.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FontAwesomeIcon icon={faWhatsapp} className={styles.icon} />
            <span className={styles.text}>Whatsapp</span>
          </a>
          <a
            href="mailto:elisoft.engineer@gmail.com"
            className={`${styles.link} ${styles.email}`}
            aria-label="Email"
          >
            <Mail size={20} className={styles.icon} />
            <span className={styles.text}>Email</span>
          </a>
          <a
            href="https://www.linkedin.com/in/elkana-maina-ab54851a0/"
            className={`${styles.link} ${styles.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
            <span className={styles.text}>LinkedIn</span>
          </a>

          <a
            href="https://github.com/elisoft-engineer/"
            className={`${styles.link} ${styles.github}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} className={styles.icon} />
            <span className={styles.text}>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;