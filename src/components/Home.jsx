import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faArrowDown, faCircleQuestion, faSearch, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";


import Navbar from "./Navbar";
import profileImg from "../assets/images/profile.webp";
import codingImg from "../assets/images/programming-developer.svg";
import falcosendImg from "../assets/images/falcosend.svg";
import ellypadImg from "../assets/images/ellypad.svg";
import Footer from "./Footer";
import services from "../constants/services";
import skillsConstant from "../constants/skills";

const Home = () => {
  const skills = ['Software Engineer', 'Full-Stack Developer', 'Machine Learning Engineer', 'System Architect'];
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
      const fullText = skills[idx];

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
        skillIndexRef.current = (skillIndexRef.current + 1) % skills.length;
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
    <>
      <Navbar />
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
              <article className="card" key={i}>
                <div className="icon">
                  <FontAwesomeIcon icon={s.icon} className="icon large" />
                </div>
                <h3 className="title">{s.title}</h3>
                <p className="description">{s.text}</p>
              </article>
            ))}
          </div>
        </div>

        {/* ----- Tools & Technologies ----- */}
        {/* <div className="technologies" id="technologies" aria-labelledby="technologies-heading">
          <h2 id="technologies-heading" className="title">Tools and Technologies</h2>

          <div className="grid">
            {technologies.map((s, i) => (
              <article className="card" key={i}>
                <div className="icon">
                  <FontAwesomeIcon icon={s.icon} className="icon large" />
                </div>
                <h3 className="title">{s.title}</h3>
                <p className="description">{s.text}</p>
              </article>
            ))}
          </div>
        </div> */}

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
                  Falcosend is a developer-focused platform that bridges static websites with powerful backend features
                  such as form handling, data storage, analytics, and real-time alerts without writing server code. 
                  It's built for simplicity, speed, and seamless integration, empowering developers to create dynamic 
                  experiences while keeping their sites lightweight and easy to manage.
                </p>
                <div className="skills">
                  <span className="skill">Python</span>
                  <span className="skill">Django</span>
                  <span className="skill">Django REST Framework</span>
                  <span className="skill">React</span>
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

            <div className="card">
              <div className="image">
                <img src={ellypadImg} alt="Ellypad Logo" />
              </div>
              <div className="meta">
                <h2 className="title">Ellypad</h2>
                <p className="description">
                  Ellypad is a collaborative project management platform built to streamline software development 
                  workflows. It empowers teams to plan projects, assign and track tasks, and manage proposals all 
                  in one intuitive interface. With secure user authentication and a clean, responsive design, Ellypad 
                  brings structure, clarity, and efficiency to every stage of your development process.
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

        {/* ----- Skills Preview ----- */}
        <div className="skills-preview" id="skills">
          <h2 className="section-title">Skills & Tech</h2>

          <div className="skills-grid">
            {skillsConstant.map((s, i) => (
              <div className="skill-badge" key={i} role="group" aria-label={`${s.name} proficiency`}>
                <div className="skill-row">
                  <span className="skill-name">{s.name}</span>
                  <span className="skill-percent">{s.level}%</span>
                </div>
                <div className="skill-bar" aria-hidden>
                  <div className="skill-fill" style={{ width: `${s.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ----- CTA ----- */}
        <div className="cta" id="cta">
          <div className="cta-inner">
            <div>
              <h3>Like what you see?</h3>
              <p>Check out my projects or get in touch to build something great together.</p>
            </div>

            <div className="cta-buttons">
              <a href="/projects" className="btn btn-primary">See Projects</a>
              <a href="/contact" className="btn btn-ghost">Hire Me</a>
            </div>
          </div>
        </div>
      <Footer />
      </section>
    </>
  );
};

export default Home;
