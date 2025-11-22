import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faCircleQuestion, faSearch, faArrowUpRightFromSquare, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faWhatsapp, faGithub } from "@fortawesome/free-brands-svg-icons";

import profileImg from "../assets/images/profile.webp";
import tshirtImg from "../assets/images/me.webp";
import codingImg from "../assets/images/programming-developer.svg";
import falcosendImg from "../assets/images/falcosend.webp";
import ellypadImg from "../assets/images/ellypad.webp";
import BallCanvas from "./BallCanvas";
import { services, technologies } from '../constants';
import ServiceCard from "./ServiceCard";

const Home = () => {
  const typingAnimationSkills = ['Software Engineer', 'Full-Stack Developer', 'Machine Learning Engineer', 'System Architect'];
  const [currentText, setCurrentText] = useState("");
  const skillIndexRef = useRef(0);
  const isDeletingRef = useRef(false);
  const currTextRef = useRef("");   // <--- holds the current text (always up-to-date)
  const timeoutRef = useRef(null);

  useEffect(() => {
    const TYPING_SPEED = 100;
    const FULL_PAUSE = 500;
    const EMPTY_PAUSE = 200;

    function tick() {
      const idx = skillIndexRef.current;
      const fullText = typingAnimationSkills[idx];

      let newText;
      if (isDeletingRef.current) {
        newText = fullText.substring(0, Math.max(0, currTextRef.current.length - 1));
      } else {
        newText = fullText.substring(0, currTextRef.current.length + 1);
      }

      currTextRef.current = newText;
      setCurrentText(newText);

      let delay = TYPING_SPEED;
      if (isDeletingRef.current) delay = Math.floor(TYPING_SPEED / 2);

      if (!isDeletingRef.current && newText === fullText) {
        isDeletingRef.current = true;
        delay = FULL_PAUSE;
      } else if (isDeletingRef.current && newText === "") {
        isDeletingRef.current = false;
        skillIndexRef.current = (skillIndexRef.current + 1) % typingAnimationSkills.length;
        delay = EMPTY_PAUSE;
      }

      timeoutRef.current = window.setTimeout(tick, delay);
    }

    timeoutRef.current = window.setTimeout(tick, 1500);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="home" id="home">
      <div className="hero">
        <div className="background" aria-hidden>
          <svg className="hero-blobs" viewBox="0 0 1200 600" preserveAspectRatio="none">
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

            <path className="blob-left" d="" />
            <path className="blob-right" d="" />
          </svg>
        </div>

        <div className="content">
          <div className="left">
            <div className="medium">Hello, I'm</div>
            <h1 className="name">Elkana Maina</h1>
            <div className="medium">
              And I'm a{" "}
              <span className="skill" aria-live="polite" aria-atomic="true">
                {currentText}
              </span>
            </div>
            <div
              className="hero-cta"
              onClick={() => scrollTo("about")}
              aria-label="Scroll to about section"
            >
              <FontAwesomeIcon icon={faSearch} /> Get to know me
            </div>

            <div className="scroll-down" aria-hidden>
              <span className="scroller">
                <FontAwesomeIcon icon={faArrowDown} className="icon" />
              </span>
            </div>
          </div>

          <div className="right">
            <img src={profileImg} alt="Image - Elkana Maina" className="image" />
          </div>
        </div>
      </div>

      <div className="about" id="about">
        <div className="left">
          <img src={codingImg} alt="Coding Image" className="image" />
        </div>
        <div className="right">
          <div className="heading">
            Who am I {" "}
            <FontAwesomeIcon icon={faCircleQuestion} className="icon" />
          </div>
          <div className="description">
            I am a passionate Software Engineer who loves turning ideas into powerful, 
            user-friendly digital experiences. From dynamic websites and APIs to complete business 
            systems, I enjoy building tools that make everyday work simpler, faster, and smarter.
          </div>
        </div>
      </div>

      {/* ----- Services / What I Build ----- */}
      <div className="services" id="services" aria-labelledby="services-heading">
        <h2 id="services-heading" className="title">What I build</h2>

        <div className="grid">
          {services.map((s, i) => (
            <ServiceCard index={i} key={s.title} {...s} />
          ))}
        </div>
      </div>

      {/* ----- Tools & Technologies ----- */}
      <div className="technologies-section">
        <h2 className="title">Technologies</h2>
        <div className="technologies">
          {technologies.map((technology) => {
            return <div className="technology" key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          })}
        </div>
      </div>

      {/* ----- Projects Preview ----- */}
      <div className="projects-preview" id="projects-preview">
        <h2 className="projects-title">My Project Catalog</h2>
        <div className="projects">
          <div className="card">
            <div className="image">
              <img src={falcosendImg} alt="Falcosend Logo" />
            </div>
            <div className="meta">
              <h2 className="title">Falcosend</h2>
              <p className="description">
                A developer-focused platform that bridges static websites with powerful backend features 
                such as form handling, data storage, analytics, and real-time alerts.  It enables 
                developers to handle form submissions in static websites and applications without writing 
                server code. The interface for the API is currently in development.
              </p>
              <div className="skills">
                <span className="skill">Python</span>
                <span className="skill">Django</span>
                <span className="skill">Django REST Framework</span>
                <span className="skill">React</span>
                <span className="skill">CSS 3</span>
              </div>
              <div className="links">
                <div className="link">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon" />
                  Visit Website
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="image">
              <img src={ellypadImg} alt="Ellypad Logo" />
            </div>
            <div className="meta">
              <h2 className="title">Ellypad</h2>
              <p className="description">
                A project management software that tracks software projects in all stages of development. 
                It facilitates project proposal submissions by clients. It also offers project team management
                tools as well as task assignment and management tools. The interface for the platform is 
                currently in development.
              </p>
              <div className="skills">
                <span className="skill">Python</span>
                <span className="skill">Django</span>
                <span className="skill">Django REST Framework</span>
                <span className="skill">Next Js</span>
                <span className="skill">CSS 3</span>
              </div>
              <div className="links">
                <a href="#" target="_blank" className="link">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon" />
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ----- CTA ----- */}
      <div className="cta" id="cta">
        <div className="image-section">
          <div className="background"></div>
          <img src={tshirtImg} alt="Elkana's Image" className="image" />
        </div>
        <div className="cta-content">
          <div>
            <h3 className="question">
              Like what you see {" "}
              <FontAwesomeIcon icon={faCircleQuestion} className="icon" />
            </h3>
            <p>Check out my projects or get in touch to build something great together.</p>
          </div>

          <div className="cta-buttons">
            <a href="/projects" className="btn btn-primary">See Projects</a>
            <span className="separator">Or</span>
            <div
              className="btn btn-contact"
              onClick={() => scrollTo("contacts")}
              aria-label="Scroll to contact section"
            >
              <FontAwesomeIcon icon={faPhone} /> Contact Me
            </div>
          </div>
        </div>
      </div>

      {/* ----- CONTACT ----- */}
      <div className="contacts" id="contacts">
        <h2 className="heading">Get in touch</h2>
        <div className="links">
          <a
            href="https://wa.me/+254757241621?text=Hello!%20I%20would%20like%20to%20inquire%20about..."
            className="link whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="icon" />
            <span className="text">Whatsapp</span>
          </a>
          <a
            href="mailto:elisoft.engineer@gmail.com"
            className="link email"
            aria-label="Email"
          >
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <span className="text">Email</span>
          </a>
          <a
            href="https://www.linkedin.com/in/elkana-maina-ab54851a0/"
            className="link linkedin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
            <span className="text">LinkedIn</span>
          </a>

          <a
            href="https://github.com/elisoft-engineer/"
            className="link github"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} className="icon" />
            <span className="text">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
