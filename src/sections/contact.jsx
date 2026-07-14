import { motion } from "framer-motion";

function Contact() {
  return (
    <section id="contact" className="contact">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Contact Me
      </motion.h2>

      <p>
        Interested in working together? Feel free to contact me.
      </p>

      <div className="contact-info">
        <p>📧 rahulpawar200604@gmail.com</p>

        <a
          href="https://github.com/rahul-pawar-04"
          target="_blank"
          rel="noreferrer"
        >
          🐙 GitHub Profile
        </a>
      </div>
    </section>
  );
}

export default Contact;