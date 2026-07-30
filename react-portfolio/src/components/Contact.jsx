import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact">

      <div className="container">

        <div className="section-head reveal">

          <p className="section-label">
            Contact
          </p>

          <h2 className="section-title">
            Get In Touch
          </h2>

          <p className="section-sub">
            Looking for a Machine Learning Engineer, Python Developer or AI
            enthusiast? Let's connect!
          </p>

        </div>

        <div className="contact-wrapper">

          {/* Left Side */}

          <div className="contact-info reveal">

            <div className="contact-card">

              <FaEnvelope className="contact-icon" />

              <div>

                <h4>Email</h4>

                <a href="mailto:sudarshan.office.sharma@gmail.com">
                  sudarshan.office.sharma@gmail.com
                </a>

              </div>

            </div>

            <div className="contact-card">

              <FaPhoneAlt className="contact-icon" />

              <div>

                <h4>Phone</h4>

                <a href="tel:+918360865769">
                  +91 8360865769
                </a>

              </div>

            </div>

            <div className="contact-card">

              <FaMapMarkerAlt className="contact-icon" />

              <div>

                <h4>Location</h4>

                <p>
                  Mohali, Punjab, India
                </p>

              </div>

            </div>

            <div className="contact-socials">

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

          </div>

          {/* Right Side */}

          <form className="contact-form reveal">

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
            ></textarea>

            <button
              type="submit"
              className="btn-primary"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;