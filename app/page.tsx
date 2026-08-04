"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faWhatsapp,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  ArrowUpRight,
  Mail,
  ShieldCheck,
  Gauge,
  Cpu,
  Check,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";

import styles from "./page.module.css";
import profileImg from "@/assets/images/profile.webp";
import falcosendImg from "@/assets/images/falcosend.png";
import ellypadImg from "@/assets/images/ellypad.webp";
import BallCanvas from "./components/BallCanvas";
import { technologies } from "@/app/constants";

// --- DATA DEFINITIONS ---

const valuePoints = [
  {
    icon: Gauge,
    title: "High Performance",
    subtitle: "Speed & Efficiency",
    description:
      "Systems engineered for high throughput and low latency under heavy load.",
  },
  {
    icon: ShieldCheck,
    title: "Robust Architecture",
    subtitle: "Security & Stability",
    description:
      "Built with fault tolerance, dependable data storage, and strict access control.",
  },
  {
    icon: Cpu,
    title: "End-to-End Delivery",
    subtitle: "Concept to Production",
    description:
      "Complete execution from system design and technical specs down to live deployment.",
  },
];

const differentiators = [
  {
    num: "01",
    title: "Focus on Business Goals",
    desc: "Code is a tool to solve problems. I build features that directly help your project launch on time, reduce costs, or acquire users.",
  },
  {
    num: "02",
    title: "Clean, Maintainable Code",
    desc: "I write clear, well-documented code that any engineer can easily understand, maintain, or expand in the future.",
  },
  {
    num: "03",
    title: "Clear Communication",
    desc: "No technical gatekeeping. I explain choices in plain English and keep you updated at every stage of development.",
  },
  {
    num: "04",
    title: "Full Product Ownership",
    desc: "From database setup down to button micro-interactions, I take total responsibility for delivering a complete, polished product.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Planning & Architecture",
    desc: "We map out what needs to be built, defining user flows and system requirements before writing any code.",
  },
  {
    step: "02",
    title: "Backend & API Building",
    desc: "I build secure databases and fast API services that form the core engine of your application.",
  },
  {
    step: "03",
    title: "Frontend Development",
    desc: "Designing and connecting responsive, accessible web and mobile interfaces that feel effortless to use.",
  },
  {
    step: "04",
    title: "Testing & Launch",
    desc: "Thorough testing for bugs, performance tuning, and smooth deployment to live production servers.",
  },
];

const featuredItems = [
  {
    title: "Falcosend",
    role: "Creator & Lead Engineer",
    bullets: [
      "Engineered a zero-backend form submission and management platform.",
      "Built real-time payload routing, spam filtering, and instant notifications.",
      "Allows developers to plug in form endpoints without writing backend code.",
    ],
    image: falcosendImg,
    link: "https://falcosend.ellypad.com",
  },
  {
    title: "Ellypad Tech",
    role: "Software Engineer",
    bullets: [
      "Architected custom enterprise platforms, POS tools, and booking systems.",
      "Built automated operational dashboards to digitize manual workflows.",
      "Engineered resilient backend architecture focused on uptime and speed.",
    ],
    image: ellypadImg,
    link: "https://www.ellypad.com",
  },
];

// --- SECTION COMPONENTS ---

export const HeroSection = ({
  scrollTo,
}: {
  scrollTo: (id: string) => void;
}) => (
  <section className={styles.heroSection}>
    <div className={styles.heroGrid}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Engineering software systems that scale.
        </h1>

        <p className={styles.heroBio}>
          Hi, I'm <strong>Elkana Maina</strong>. I'm a software engineer who
          turns complex requirements into clean, reliable products and robust
          backend systems.
        </p>

        <div className={styles.heroActions}>
          <button
            onClick={() => scrollTo("featured")}
            className={styles.btnPrimary}
          >
            See My Work <ArrowUpRight size={18} />
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className={styles.btnSecondary}
          >
            Get in Touch
          </button>
        </div>

        <div className={styles.heroTrustGrid}>
          <div className={styles.trustCard}>
            <span className={styles.trustVal}>Full-Stack</span>
            <span className={styles.trustDesc}>End-to-End Delivery</span>
          </div>
          <div className={styles.trustCard}>
            <span className={styles.trustVal}>Production Ready</span>
            <span className={styles.trustDesc}>Clean, Maintainable Code</span>
          </div>
          <div className={styles.trustCard}>
            <span className={styles.trustVal}>Scalable</span>
            <span className={styles.trustDesc}>Architected for Growth</span>
          </div>
        </div>
      </div>

      <div className={styles.heroVisual}>
        <div className={styles.portraitBox}>
          <Image
            src={profileImg}
            alt="Elkana Maina"
            className={styles.portraitImg}
            priority
            width={400}
            height={500}
          />
        </div>
      </div>
    </div>
  </section>
);

export const ValueSection = () => (
  <section className={styles.sectionBlock} id="value">
    <div className={styles.sectionHeader}>
      <h2 className={styles.sectionTitle}>What I Bring to Your Project</h2>
      <p className={styles.sectionDescription}>
        Direct, reliable execution focused on performance, security, and scale.
      </p>
    </div>

    <div className={styles.valueGrid}>
      {valuePoints.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div className={styles.valueCard} key={idx}>
            <div className={styles.valueIconBox}>
              <Icon size={22} />
            </div>
            <h3 className={styles.valueTitle}>{item.title}</h3>
            <span className={styles.valueSubtitle}>{item.subtitle}</span>
            <p className={styles.valueText}>{item.description}</p>
          </div>
        );
      })}
    </div>
  </section>
);

export const FeaturedSection = () => (
  <section className={styles.sectionBlock} id="featured">
    <div className={styles.sectionHeader}>
      <h2 className={styles.sectionTitle}>Featured</h2>
    </div>

    <div className={styles.showcaseStack}>
      {featuredItems.map((item, idx) => (
        <div className={styles.showcaseCard} key={idx}>
          <div className={styles.imageWrapper}>
            <Image
              src={item.image}
              alt={item.title}
              className={styles.projectImage}
              priority={idx === 0}
            />
            <div className={styles.imageOverlay} />
          </div>

          <div className={styles.cardContent}>
            <span className={styles.roleTag}>{item.role}</span>
            <div className={styles.titleRow}>
              <h3 className={styles.projectTitle}>{item.title}</h3>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkIcon}
                aria-label={`Visit ${item.title}`}
              >
                <ExternalLink size={18} />
              </a>
            </div>

            <ul className={styles.bulletList}>
              {item.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className={styles.bulletItem}>
                  <Check size={16} className={styles.checkIcon} />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export const WhyMeSection = () => (
  <section className={styles.sectionBlock} id="why-me">
    <div className={styles.sectionHeader}>
      <h2 className={styles.sectionTitle}>Why Work With Me</h2>
      <p className={styles.sectionDescription}>
        What you can expect when collaborating on a project or bringing me onto
        your engineering team.
      </p>
    </div>

    <div className={styles.diffGrid}>
      {differentiators.map((diff) => (
        <div key={diff.num} className={styles.diffCard}>
          <span className={styles.diffNum}>{diff.num}</span>
          <h3 className={styles.diffTitle}>{diff.title}</h3>
          <p className={styles.diffDesc}>{diff.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export const SkillsSection = () => (
  <section className={styles.sectionBlock} id="skills">
    <div className={styles.sectionHeader}>
      <h2 className={styles.sectionTitle}>Technologies & Tools</h2>
      <p className={styles.sectionDescription}>
        The primary frameworks, languages, and tools I use to build software.
      </p>
    </div>

    <div className={styles.skillsPanel}>
      <div className={styles.ballsGrid}>
        {technologies.map((tech) => (
          <div className={styles.ballWrapper} key={tech.name}>
            <div className={styles.ballContainer}>
              <BallCanvas icon={tech.icon} />
            </div>
            <span className={styles.ballLabel}>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const ProcessSection = () => (
  <section className={styles.sectionBlock} id="process">
    <div className={styles.sectionHeader}>
      <h2 className={styles.sectionTitle}>How I Work</h2>
      <p className={styles.sectionDescription}>
        A clear development process ensuring smooth execution from start to
        finish.
      </p>
    </div>

    <div className={styles.processGrid}>
      {processSteps.map((step) => (
        <div key={step.step} className={styles.processCard}>
          <span className={styles.stepNum}>{step.step}</span>
          <h3 className={styles.processTitle}>{step.title}</h3>
          <p className={styles.processDesc}>{step.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export const ContactSection = () => (
  <section className={styles.contactSection} id="contact">
    <div className={styles.contactCard}>
      <h2 className={styles.contactTitle}>
        Let's talk about your next project.
      </h2>
      <p className={styles.contactDesc}>
        Whether you have an upcoming software build, need technical guidance, or
        want to explore working together, feel free to reach out directly.
      </p>

      <div className={styles.contactButtons}>
        <a
          href="mailto:elisoft.engineer@gmail.com"
          className={styles.btnPrimary}
        >
          <Mail size={18} /> Send an Email
        </a>
        <a
          href="https://wa.me/+254757241621"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btnSecondary}
        >
          <FontAwesomeIcon icon={faWhatsapp} size="lg" /> Chat on WhatsApp
        </a>
      </div>

      <div className={styles.socialRow}>
        <a
          href="https://github.com/elisoft-engineer/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>
        <span className={styles.dot}>•</span>
        <a
          href="https://www.linkedin.com/in/elkana-maina-ab54851a0/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
      </div>
    </div>
  </section>
);

// --- MAIN PAGE COMPONENT ---

const LandingPage = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className={styles.landingContainer}>
      <HeroSection scrollTo={scrollTo} />
      <ValueSection />
      <FeaturedSection />
      <WhyMeSection />
      <SkillsSection />
      <ProcessSection />
      <ContactSection />
    </div>
  );
};

export default LandingPage;
