import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">

        {/* LEFT CONTENT */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="about-tag">ABOUT ME</span>

          <h2>Turning Data Into Meaningful Insights.</h2>

          <p>
            I’m <strong>Rahul Dadasaheb Pawar</strong>, a B.Sc. Data Science
            student with a strong interest in Data Analytics, Business
            Intelligence, and Machine Learning.
          </p>

          <p>
            I work with real-world datasets to discover patterns, generate
            insights, and transform complex information into clear,
            data-driven solutions.
          </p>

          <p>
            My current focus is building practical expertise in{" "}
            <strong>Python, SQL, Power BI, Excel, and Data Visualization</strong>,
            while continuously developing projects that solve practical
            problems.
          </p>

          <div className="about-highlights">

            <div className="about-box">
              <span className="about-box-icon">🎓</span>
              <div>
                <small>EDUCATION</small>
                <strong>B.Sc. Data Science</strong>
              </div>
            </div>

            <div className="about-box">
              <span className="about-box-icon">📊</span>
              <div>
                <small>FOCUS</small>
                <strong>Data Analytics & BI</strong>
              </div>
            </div>

            <div className="about-box">
              <span className="about-box-icon">⚡</span>
              <div>
                <small>APPROACH</small>
                <strong>Data → Insights → Impact</strong>
              </div>
            </div>

          </div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          className="about-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="about-orb">
            <div className="orb-ring ring-one"></div>
            <div className="orb-ring ring-two"></div>

            <div className="orb-inner">
              <span>DATA</span>
              <strong>SCIENCE</strong>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;