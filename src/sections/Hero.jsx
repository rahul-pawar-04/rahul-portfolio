import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <motion.p
        className="hero-role"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        B.Sc. Data Science Student
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Rahul Dadasaheb Pawar
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Aspiring Data Analyst
      </motion.h2>

      <motion.p
        className="hero-desc"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        Passionate about Data Analytics, SQL, Python, Power BI, Tableau,
        R Studio and Machine Learning. I build interactive dashboards and
        transform raw data into meaningful business insights.
      </motion.p>

      <motion.div
        className="hero-buttons"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <a href="#projects" className="primary-btn">
          🚀 View Projects
        </a>

        <a
          href="/Rahul_Dadasaheb_Pawar_Resume.pdf"
          download
          className="secondary-btn"
        >
          📄 Download Resume
        </a>

        <a
          href="https://github.com/rahul-pawar-04"
          target="_blank"
          rel="noreferrer"
          className="github-btn-hero"
        >
          🐙 GitHub
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;