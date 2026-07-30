function Resume() {
  return (
    <section id="resume">

      <div className="container">

        <div className="section-head reveal">

          <p className="section-label">
            Resume
          </p>

          <h2 className="section-title">
            My Resume
          </h2>

          <p className="section-sub">
            Download my latest resume or preview my professional profile below.
          </p>

        </div>

        <div className="resume-card reveal">

          <div className="resume-left">

            <div className="resume-icon">
              📄
            </div>

            <div>

              <h3>
                Sudarshan Sharma
              </h3>

              <p>
                Machine Learning Engineer • Python Developer • AI Enthusiast
              </p>

            </div>

          </div>

          <div className="resume-right">

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              Preview Resume
            </a>

            <a
              href="/resume.pdf"
              download
              className="btn-primary"
            >
              Download PDF
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Resume;