'use client';

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ChevronDown, 
  HelpCircle, 
  Search, 
  ExternalLink, 
  Phone, 
  Mail, 
  MessageCircle, 
  Linkedin, 
  Github 
} from "lucide-react";

// Import CSS Module
import styles from './page.module.css';

// Assets & Components
import profileImg from "@/assets/images/profile.webp";
import tshirtImg from "@/assets/images/me.webp";
import codingImg from "@/assets/images/programming-developer.svg";
import falcosendImg from "@/assets/images/falcosend.webp";
import ellypadImg from "@/assets/images/ellypad.webp";

import BallCanvas from "@/components/BallCanvas";
import ServiceCard from "@/components/ServiceCard";
import { services, technologies } from '@/constants';

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
        {/* Background SVG logic remains the same, update classNames to styles.blobLeft etc. */}
        
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
            <button
              className={styles.heroCta}
              onClick={() => scrollTo("about")}
              aria-label="Scroll to about section"
            >
              <Search size={18} /> Get to know me
            </button>

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
            />
          </div>
        </div>
      </div>

      <div className={styles.about} id="about">
        <div className={styles.left}>
          <Image src={codingImg} alt="Coding" className={styles.image} />
        </div>
        <div className={styles.right}>
          <div className={styles.heading}>
            Who am I <HelpCircle className={styles.icon} />
          </div>
          <div className={styles.description}>
            I am a passionate Software Engineer who loves turning ideas into powerful, 
            user-friendly digital experiences. From dynamic websites and APIs to complete business 
            systems, I enjoy building tools that make everyday work simpler, faster, and smarter.
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
        <h2 className={styles.projectsTitle}>My Project Catalog</h2>
        <div className={styles.projects}>
          <div className={styles.card}>
            <div className={styles.projectImage}>
              <Image src={ellypadImg} alt="Ellypad" />
            </div>
            <div className={styles.meta}>
              <h2 className={styles.title}>Ellypad</h2>
              <p className={styles.description}>
                A project management software that tracks software projects in all stages of development. 
                It facilitates project proposal submissions by clients. It also offers project team management
                tools as well as task assignment and management tools. The interface for the platform is 
                currently in development.
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

          <div className={styles.card}>
            <div className={styles.projectImage}>
              <Image src={falcosendImg} alt="Falcosend" />
            </div>
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
          <Image src={tshirtImg} alt="Elkana" className={styles.image} />
        </div>
        <div className={styles.ctaContent}>
          <h3 className={styles.question}>
            Like what you see <HelpCircle className={styles.icon} />
          </h3>
          <div className={styles.ctaButtons}>
            <Link href="/projects" className={`${styles.btn} ${styles.btnPrimary}`}>
              See Projects
            </Link>
            <button
              className={`${styles.btn} ${styles.btnContact}`}
              onClick={() => scrollTo("contacts")}
            >
              <Phone size={18} /> Contact Me
            </button>
          </div>
        </div>
      </div>

      <div className={styles.contacts} id="contacts">
        <h2 className={styles.heading}>Get in touch</h2>
        <div className={styles.links}>
          <a href="https://wa.me/..." className={`${styles.link} ${styles.whatsapp}`}>
            <MessageCircle size={20} /> <span>Whatsapp</span>
          </a>
          <a href="mailto:..." className={`${styles.link} ${styles.email}`}>
            <Mail size={20} /> <span>Email</span>
          </a>
          <a href="https://linkedin.com/..." className={`${styles.link} ${styles.linkedin}`}>
            <Linkedin size={20} /> <span>LinkedIn</span>
          </a>
          <a href="https://github.com/..." className={`${styles.link} ${styles.github}`}>
            <Github size={20} /> <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;