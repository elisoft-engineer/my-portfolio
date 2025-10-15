import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faArrowDown, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";


import Navbar from "./Navbar";
import profileImg from "../assets/images/profile.webp";
import codingImg from "../assets/images/programming-developer.svg"

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

        <div className="about">
          <div className="left">
            <img src={codingImg} alt="Coding Image" className="image" />
          </div>
          <div className="description">
            I am a passionate Software Engineer who loves turning ideas into powerful, 
            user-friendly digital experiences. From dynamic websites and APIs to complete business 
            systems, I enjoy building tools that make everyday work simpler, faster, and smarter.
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
