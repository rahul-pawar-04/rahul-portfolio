import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="about">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Hello! I'm <strong>Rahul Dadasaheb Pawar</strong>, a B.Sc. Data
        Science student at <strong>S.K. Tilak College, Nerul</strong>,
        affiliated with Mumbai University.

        <br /><br />

        I enjoy solving real-world problems using data. My interests include
        Data Analysis, SQL, Python, Power BI, Machine Learning and Data
        Visualization.

        <br /><br />

        My goal is to become a professional Data Analyst and build impactful,
        data-driven solutions.
      </motion.p>

    </section>
  );
};

export default About;