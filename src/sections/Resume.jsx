import { motion } from "framer-motion";
import {
  FaDownload,
  FaEnvelope,
  FaFileAlt,
  FaArrowRight,
} from "react-icons/fa";

function Resume() {
  return (
    <section id="resume" className="resume-section">
      <motion.div
        className="resume-card"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="resume-icon">
          <FaFileAlt />
        </div>

        <span className="section-tag">PROFESSIONAL PROFILE</span>

        <h2>Ready to Make an Impact With Data.</h2>

        <p className="resume-intro">
          Explore my academic background, technical expertise, selected
          projects, and career interests in Data Science and Analytics.
        </p>

        <div className="resume-info">
          <div>
            <span>EDUCATION</span>
            <strong>B.Sc. Data Science</strong>
          </div>

          <div>
            <span>ROLE</span>
            <strong>Aspiring Data Analyst</strong>
          </div>

          <div>
            <span>CORE SKILLS</span>
            <strong>Python • SQL • Power BI • Excel</strong>
          </div>
        </div>

        <div className="resume-buttons">
          <a
            href="mailto:rahulpawar200604@gmail.com"
            className="resume-btn primary"
          >
            <FaEnvelope />
            Get In Touch
            <FaArrowRight />
          </a>

          <a
            href="https://github.com/rahul-pawar-04"
            target="_blank"
            rel="noreferrer"
            className="resume-btn secondary"
          >
            <FaDownload />
            View GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Resume;