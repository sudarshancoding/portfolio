function Projects() {
  const projects = [
    {
      title: "Diabetes Prediction Using SVM",
      description:
        "Built a Machine Learning model using Support Vector Machine (SVM) to predict diabetes based on the Pima Indians Diabetes Dataset. Included preprocessing, feature scaling, training, and evaluation.",
      tech: [
        "Python",
        "Scikit-learn",
        "SVM",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
      ],
      github:
        "https://github.com/sudarshancoding/ml-projects/tree/main/Classification%20Project/Diabetes%20Prediction%20Project%20-%20SVM%20Project",
    },

    {
      title: "Regression Projects",
      description:
        "Developed multiple regression models including Linear Regression, Ridge Regression and Polynomial Regression to predict continuous values such as house prices and salaries.",
      tech: [
        "Python",
        "Scikit-learn",
        "Regression",
        "Pandas",
        "Matplotlib",
        "Seaborn",
      ],
      github:
        "https://github.com/sudarshancoding/ml-projects/tree/main/Regression%20Projects",
    },

    {
      title: "Customer Churn Prediction",
      description:
        "Built a Deep Learning model using TensorFlow and Keras to predict telecom customer churn. Performed preprocessing, feature engineering and model evaluation.",
      tech: [
        "TensorFlow",
        "Keras",
        "Python",
        "Pandas",
        "NumPy",
      ],
      github:
        "https://github.com/sudarshancoding",
    },

    {
      title: "Smart Parking System",
      description:
        "Computer Vision based parking space detection using OpenCV. Detects vacant parking slots from CCTV images in real time.",
      tech: [
        "Python",
        "OpenCV",
        "Computer Vision",
        "NumPy",
      ],
      github:
        "https://github.com/sudarshancoding",
    },

    {
      title: "Portfolio Website",
      description:
        "Responsive portfolio built using React, Vite and modern CSS featuring animations, dark mode and responsive layouts.",
      tech: [
        "React",
        "Vite",
        "JavaScript",
        "CSS",
      ],
      github:
        "https://github.com/sudarshancoding",
    },

    {
      title: "Weather Application",
      description:
        "Desktop weather application developed in Python using PyQt5 with real-time weather API integration.",
      tech: [
        "Python",
        "PyQt5",
        "API",
      ],
      github:
        "https://github.com/sudarshancoding",
    },
  ];

  return (
    <section id="projects">
      <div className="container">

        <div className="section-head reveal">
          <p className="section-label">
            Portfolio
          </p>

          <h2 className="section-title">
            Featured Projects
          </h2>

          <p className="section-sub">
            Machine Learning, Deep Learning, Computer Vision and Python projects
            demonstrating practical AI solutions.
          </p>
        </div>

        <div className="projects-grid">

          {projects.map((project, index) => (
            <div
              className="project-card reveal"
              key={index}
            >
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">

                {project.tech.map((item) => (
                  <span key={item}>
                    {item}
                  </span>
                ))}

              </div>

              <div className="project-links">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline"
                >
                  View on GitHub
                </a>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;