import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faArrowDown } from "@fortawesome/free-solid-svg-icons";

import Navbar from "./Navbar";
import profileImg from "../assets/images/profile.webp";

const Home = () => {
  const skills = ['Software Engineer', 'Web Developer', 'UI/UX Designer', 'Data Analyst'];
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

  return (
    <>
      <Navbar />
      <section className="home" id="home">
        <div className="background" aria-hidden>
          <svg className="home-blobs" viewBox="0 0 1200 600" preserveAspectRatio="none">
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

            <div className="links" aria-label="social links">
              <a
                href="https://www.linkedin.com/in/elkana-maina-ab54851a0/"
                className="link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} className="icon" />
              </a>

              <a
                href="https://github.com/elisoft-engineer/"
                className="link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} className="icon" />
              </a>

              <a href="mailto:elisoft.engineer@gmail.com" className="link" aria-label="Email">
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
              </a>

              <a
                href="https://wa.me/+254757241621?text=Hello!%20I%20would%20like%20to%20inquire%20about..."
                className="link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="icon" />
              </a>
            </div>

            <button type="button" className="cv" id="cv" onClick={() => {}} aria-label="Download CV">
              Download CV
            </button>

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
      </section>
    </>
  );
};

export default Home;
