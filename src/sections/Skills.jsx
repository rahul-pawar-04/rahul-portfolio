import { motion } from "framer-motion";

const skills = [
  { name: "Python", icon: "🐍" },
  { name: "SQL", icon: "🗄️" },
  { name: "Power BI", icon: "📊" },
  { name: "Tableau", icon: "📈" },
  { name: "R Studio", icon: "📉" },
  { name: "Excel", icon: "📑" },
  { name: "Machine Learning", icon: "🤖" },
  { name: "Pandas", icon: "🐼" },
  { name: "NumPy", icon: "🔢" },
  { name: "GitHub", icon: "🐙" },
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className="skill-card"
            whileHover={{ scale: 1.05 }}
          >
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;