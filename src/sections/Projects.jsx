import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import air from "../assets/projects/air.png";
import telco from "../assets/projects/telco.png";

const projects = [
  {
    title: "Telco Customer Churn Prediction",
    image: telco,
    tech: "Python • Pandas • Scikit-learn",
    desc: "A machine learning project focused on identifying customers at risk of churn and understanding the key factors influencing customer retention.",
    github: "https://github.com/rahul-pawar-04",
    type: "MACHINE LEARNING",
  },

  {
    title: "Air Quality Analysis Dashboard",
    image: air,
    tech: "Python • Pandas • Matplotlib",
    desc: "An environmental data analysis project exploring pollution patterns, air-quality trends, and changes across different time periods.",
    github: "https://github.com/rahul-pawar-04",
    type: "DATA ANALYTICS",
  },

  {
    title: "Netflix Data Analysis Dashboard",
    icon: "🎬",
    tech: "Power BI • Excel • Data Visualization",
    desc: "An interactive dashboard designed to analyze Netflix content across genres, ratings, countries, content types, and release trends.",
    github: "https://github.com/rahul-pawar-04",
    type: "BUSINESS INTELLIGENCE",
  },

  {
    title: "IPL Data Analysis",
    icon: "🏏",
    tech: "Python • Pandas • Power BI",
    desc: "A sports analytics project uncovering team performance, player statistics, match outcomes, and tournament-level trends.",
    github: "https://github.com/rahul-pawar-04",
    type: "DATA ANALYTICS",
  },

  {
    title: "College Data Dashboard",
    icon: "📊",
    tech: "Power BI • Excel • Data Cleaning",
    desc: "An interactive institutional dashboard transforming raw college data into meaningful performance indicators and visual insights.",
    github: "https://github.com/rahul-pawar-04",
    type: "POWER BI",
  },

  {
    title: "Agriculture Water Usage Analysis",
    icon: "🌱",
    tech: "Python • Pandas • Machine Learning",
    desc: "A data-driven analysis of irrigation and agricultural water usage aimed at identifying patterns and supporting efficient resource management.",
    github: "https://github.com/rahul-pawar-04",
    type: "DATA SCIENCE",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">

      {/* SECTION HEADER */}
      <motion.div
        className="projects-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <span className="section-tag">SELECTED WORK</span>

        <h2>Projects That Turn Data Into Impact.</h2>

        <p>
          A selection of data-driven projects built to explore real-world
          problems, uncover insights, and demonstrate practical analytical
          skills.
        </p>
      </motion.div>

      {/* PROJECT GRID */}
      <div className="projects-grid">

        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.08,
            }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >

            {/* PROJECT VISUAL */}
            {project.image ? (
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              </div>
            ) : (
              <div className="project-placeholder">
                <span>{project.icon}</span>
              </div>
            )}

            {/* CONTENT */}
            <div className="project-content">

              <span className="project-type">
                {project.type}
              </span>

              <h3>{project.title}</h3>

              <p>{project.desc}</p>

              <div className="project-tech">
                {project.tech}
              </div>

              {/* BUTTONS */}
              <div className="project-buttons">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="github-btn"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-view-btn"
                >
                  View Project
                  <FaExternalLinkAlt />
                </a>

              </div>

            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Projects;