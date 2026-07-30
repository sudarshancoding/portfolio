function Education() {
  return (
    <section id="education">
      <div className="container">

        <div className="section-head reveal">

          <p className="section-label">
            Background
          </p>

          <h2 className="section-title">
            Education
          </h2>

          <p className="section-sub">
            My academic background, relevant coursework and professional certifications.
          </p>

        </div>

        <div className="education-grid">

          {/* Education */}

          <div className="edu-card reveal">

            <div className="edu-icon">
              🎓
            </div>

            <div className="edu-content">

              <div className="edu-top">

                <div>

                  <h3>
                    Bachelor of Technology
                  </h3>

                  <h4>
                    Computer Science & Engineering
                  </h4>

                </div>

                <span className="edu-year">
                  2017 – 2021
                </span>

              </div>

              <p className="edu-college">
                Chandigarh Group of Colleges, Jhanjeri
              </p>

              <p className="edu-cgpa">
                <strong>CGPA:</strong> 7.88
              </p>

              <div className="edu-coursework">

                <h5>Relevant Coursework</h5>

                <div className="edu-tags">

                  <span>Data Structures</span>

                  <span>Algorithms</span>

                  <span>DBMS</span>

                  <span>Machine Learning</span>

                  <span>Artificial Intelligence</span>

                  <span>Statistics</span>

                  <span>Python</span>

                  <span>Object Oriented Programming</span>

                </div>

              </div>

            </div>

          </div>

          {/* Certifications */}

          <div className="edu-card reveal">

            <div className="edu-icon">
              🏆
            </div>

            <div className="edu-content">

              <h3>
                Certifications
              </h3>

              <ul className="certification-list">

                <li>
                  Python Programming — Udemy
                </li>

                <li>
                  Python (Basic) — HackerRank
                </li>

                <li>
                  SQL (Basic) — HackerRank
                </li>

                <li>
                  SQL (Intermediate) — HackerRank
                </li>

                <li>
                  SQL (Advanced) — HackerRank
                </li>

                <li>
                  Python for Data Science & AI — Coursera
                </li>

                <li>
                  Supervised Machine Learning — Coursera
                </li>

              </ul>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;