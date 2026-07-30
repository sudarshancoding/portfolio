import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";

import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg">
        <div className="hero-grid"></div>

        <div className="hero-orb hero-orb-1"></div>

        <div className="hero-orb hero-orb-2"></div>
      </div>

      <div className="container hero-inner">
        {/* LEFT */}

        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>

            AVAILABLE FOR WORK
          </div>

          <h1 className="hero-name">
            Sudarshan{" "}
            <span className="hero-name-accent">
              Sharma
            </span>
          </h1>

          <p className="hero-title">
            Machine Learning Engineer • Python Developer • AI Enthusiast
          </p>

          <p className="hero-about">
            Passionate about Machine Learning, Deep Learning,
            Computer Vision, Python Development and building
            intelligent applications using modern technologies.
          </p>

          <div className="hero-cta">
            <a href="#projects" className="btn-primary">
              View Projects

              <FaArrowRight />
            </a>

            <a
              href="/resume.pdf"
              className="btn-outline"
              target="_blank"
              rel="noreferrer"
            >
              Download Resume

              <FaDownload />
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/sudarshancoding"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/sudarshan-sharma-08"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:sudarshan.office.sharma@gmail.com"
              className="social-link"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* RIGHT */}

        <div className="hero-photo-wrap">
          <div className="hero-photo-ring">
            <img
              src={profile}
              alt="Sudarshan Sharma"
              className="hero-photo"
            />
          </div>

          <div className="hero-location">
            <FaMapMarkerAlt />

            Punjab, India
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;