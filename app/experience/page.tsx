import { Metadata } from 'next';
import styles from './page.module.css';
import ellypadImg from '@/assets/icons/ellypad.svg';
import falcosendImg from '@/assets/icons/falcosend.svg';
import Image, { StaticImageData } from 'next/image';
import { ExternalLink, Rocket, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Experience | Elkana - Co-founder & CEO at Ellypad Tech',
  description: 'Executive experience of Elkana, driving innovation at Ellypad Tech and Falcosend.',
  keywords: ['Elkana', 'CEO', 'Ellypad Tech', 'Falcosend', 'Tech Founder', 'Software Architecture'],
};

const experiences = [
  {
    company: "Ellypad Tech",
    role: "Co-founder & CEO",
    period: "Oct 2023 - Present",
    description: "Co-founded and scaled a specialized software firm from the ground up. I oversee our technical direction and lead a team dedicated to shipping high-performance digital products for global clients.",
    link: "https://ellypad.com",
    logo: ellypadImg,
  },
  {
    company: "Falcosend",
    role: "Founder",
    period: "June 2025 - Present",
    description: "Engineering a developer-centric platform that bridges static sites with dynamic backend capabilities. Built to handle complex form logic, data persistence, and real-time analytics, it allows developers to deploy full-stack features without writing server-side code.",
    logo: falcosendImg,
  }
];

export default function ExperiencePage() {
  return (
    <div className={styles.pageWrapper}>
      {/* THE TECH CANVAS */}
      <div className={styles.canvas}>
        <div className={styles.gridPerspective}></div>
        <div className={styles.spotlight}></div>
      </div>

      <main className={styles.content}>
        <header className={styles.header}>
          <h1 className={styles.heroTitle}>Executive <span className={styles.accent}>Experience</span></h1>
        </header>

        <section className={styles.timelineSection}>
          {experiences.map((exp, i) => (
            <div key={i} className={styles.experienceCard}>
              <div className={styles.cardGlow}></div>
              
              <div className={styles.cardHeader}>
                <div className={styles.logoContainer}>
                  <Image src={exp.logo} alt={exp.company} width={48} height={48} />
                </div>
                <div className={styles.titles}>
                  <h2 className={styles.companyName}>{exp.company}</h2>
                  <p className={styles.roleTitle}>{exp.role}</p>
                </div>
                <div className={styles.timeTag}>{exp.period}</div>
              </div>

              <p className={styles.description}>{exp.description}</p>

              <div className={styles.footer}>
                {exp.link ? (
                  <a href={exp.link} className={styles.actionBtn}>
                    Visit Firm <ExternalLink size={14} />
                  </a>
                ) : (
                  <span className={styles.status}>
                    <Rocket size={14} className={styles.pulseIcon} /> System Initializing (2025)
                  </span>
                )}
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}