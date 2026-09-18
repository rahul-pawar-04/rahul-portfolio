import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaArrowRight,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">

      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <span className="section-tag">LET'S CONNECT</span>

        <h2>Let’s Build Something With Data.</h2>

        <p className="contact-intro">
          Have a project, opportunity, or idea? I’m always open to
          connecting and exploring how data can create meaningful solutions.
        </p>

        <div className="contact-links">

          {/* EMAIL */}
          <a
            href="mailto:rahulpawar200604@gmail.com"
            className="contact-card"
          >
            <div className="contact-icon">
              <FaEnvelope />
            </div>

            <div>
              <span>EMAIL</span>
              <strong>rahulpawar200604@gmail.com</strong>
            </div>

            <FaArrowRight className="contact-arrow" />
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/rahul-pawar-04"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <div className="contact-icon">
              <FaGithub />
            </div>

            <div>
              <span>GITHUB</span>
              <strong>rahul-pawar-04</strong>
            </div>

            <FaArrowRight className="contact-arrow" />
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <div className="contact-icon">
              <FaLinkedinIn />
            </div>

            <div>
              <span>LINKEDIN</span>
              <strong>Connect with me</strong>
            </div>

            <FaArrowRight className="contact-arrow" />
          </a>

        </div>

        <motion.div
          className="contact-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>
            Open to internships, entry-level opportunities, and
            data-driven collaborations.
          </p>
        </motion.div>

      </motion.div>

    </section>
  );
}

export default Contact;