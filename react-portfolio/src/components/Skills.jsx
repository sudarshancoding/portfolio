function Skills() {
  return (
    <section id="skills">
      <div className="container">

        <div className="section-head reveal">
          <p className="section-label">Expertise</p>

          <h2 className="section-title">
            Technical Skills
          </h2>

          <p className="section-sub">
            My core technologies, programming languages and tools used for
            building Machine Learning, AI and Full Stack applications.
          </p>
        </div>

        <div className="skills-grid">

          {/* Programming */}

          <div className="skill-card reveal">

            <div className="skill-icon">💻</div>

            <h3>Programming</h3>

            <div className="skill-tags">

              <span>Python</span>

              <span>SQL</span>

              <span>JavaScript</span>

              <span>HTML5</span>

              <span>CSS3</span>

              <span>React</span>

              <span>Node.js</span>

              <span>Express.js</span>

            </div>

          </div>

          {/* Machine Learning */}

          <div className="skill-card reveal">

            <div className="skill-icon">🤖</div>

            <h3>Machine Learning</h3>

            <div className="skill-tags">

              <span>Scikit-learn</span>

              <span>Regression</span>

              <span>Classification</span>

              <span>Clustering</span>

              <span>SVM</span>

              <span>Decision Trees</span>

              <span>Random Forest</span>

              <span>XGBoost</span>

            </div>

          </div>

          {/* Deep Learning */}

          <div className="skill-card reveal">

            <div className="skill-icon">🧠</div>

            <h3>Deep Learning</h3>

            <div className="skill-tags">

              <span>TensorFlow</span>

              <span>Keras</span>

              <span>CNN</span>

              <span>ANN</span>

              <span>Transfer Learning</span>

              <span>Computer Vision</span>

            </div>

          </div>

          {/* Python Libraries */}

          <div className="skill-card reveal">

            <div className="skill-icon">📊</div>

            <h3>Python Libraries</h3>

            <div className="skill-tags">

              <span>Pandas</span>

              <span>NumPy</span>

              <span>Matplotlib</span>

              <span>Seaborn</span>

              <span>OpenCV</span>

            </div>

          </div>

          {/* Databases */}

          <div className="skill-card reveal">

            <div className="skill-icon">🗄️</div>

            <h3>Databases</h3>

            <div className="skill-tags">

              <span>MySQL</span>

              <span>MongoDB</span>

              <span>SQL Server</span>

            </div>

          </div>

          {/* Tools */}

          <div className="skill-card reveal">

            <div className="skill-icon">⚙️</div>

            <h3>Tools</h3>

            <div className="skill-tags">

              <span>Git</span>

              <span>GitHub</span>

              <span>VS Code</span>

              <span>Jupyter Notebook</span>

              <span>Google Colab</span>

              <span>Postman</span>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;