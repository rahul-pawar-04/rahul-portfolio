import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

import air from "../assets/projects/air.png";
import telco from "../assets/projects/telco.png";

const projects = [
 {
  title: "Telco Customer Churn Prediction",
  image: telco,
  tech: "Python • Pandas • Scikit-learn",
  desc: "Machine Learning model to predict customer churn.",
  github: "https://github.com/rahul-pawar-04"
},
  {
  title: "Air Quality Analysis Dashboard",
  image: air,
  tech: "Python • Pandas • Matplotlib",
  desc: "Air quality analysis using real-world environmental data.",
  github: "https://github.com/rahul-pawar-04"
}
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Featured Projects
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            className="project-card"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <h3>{project.title}</h3>

            <p>{project.desc}</p>

            <small>{project.tech}</small>
            <div className="project-buttons">
  <a
    href={project.github}
    target="_blank"
    rel="noreferrer"
    className="github-btn"
  >
    GitHub
  </a>
</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;