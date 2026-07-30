import {
  FaGithub,
  FaLinkedin,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {

  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer id="footer">

      <div className="container">

        <div className="footer-content">

          <div className="footer-left">

            <h3>
              Sudarshan<span>.</span>
            </h3>

            <p>
              Machine Learning Engineer • Python Developer • AI Enthusiast
            </p>

          </div>

          <div className="footer-socials">

            <a
              href="https://github.com/sudarshancoding"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/sudarshan-sharma-08/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

          </div>

          <button
            className="scroll-top"
            onClick={scrollToTop}
          >
            <FaArrowUp />
          </button>

        </div>

        <div className="footer-bottom">

          <p>
            © {year} Sudarshan Sharma. All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;