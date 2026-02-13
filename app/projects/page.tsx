import { projects } from '../constants';
import styles from './page.module.css';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Elkana Maina - Full-Stack Engineer',
  description: 'A showcase of technical projects ranging from developer tools to scalable web applications. Explore the architecture and code behind my latest builds.',
  keywords: [
    'Elkana Maina Projects', 
    'Full Stack Portfolio', 
    'Backend Developer',
    'Django Developer',
    'Flutter Developer',
    'React Next.js Developer', 
    'BaaS Development', 
    'Software Architecture',
    'Static Site Backend Tools'
  ],
}

const Projects = () => {
  return (
    <section className={styles.projectSection}>
      {projects.map((project, index) => {
        return <div className={styles.card} key={index}>
          <Image src={project.image} width={610} alt={project.title + " image"} />
          <div className={styles.meta}>
            <h2 className={styles.title}>{project.title}</h2>
            <p className={styles.description}>{project.description}</p>
            <div className={styles.skills}>
              {project.technologies.map((skill, index) => {
                return <span className={styles.skill} key={index}>{skill}</span>
              })}
              
            </div>
            <div className={styles.links}>
              {project.active && 
              <div className={styles.statusBadge}>
                <span className={styles.statusDot}></span>
                <span className={styles.statusText}>Systems Operational</span>
              </div>}
              {project.launchingSoon && 
              <div className={styles.statusBadge}>
                <span className={styles.statusDot}></span>
                <span className={styles.statusText}>Launching Soon</span>
              </div>}
              {project.link && 
              <a href={project.link} target="_blank" className={styles.link}>
                <ExternalLink size={20} />
                Visit Website
              </a>}
            </div>
          </div>
        </div>
      })}
    </section>
  );
}

export default Projects;