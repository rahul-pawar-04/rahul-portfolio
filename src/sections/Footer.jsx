import { FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <h3>Rahul Dadasaheb Pawar</h3>

      <p>B.Sc. Data Science Student | Aspiring Data Analyst</p>

      <div className="footer-links">
        <a
          href="https://github.com/rahul-pawar-04"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub /> GitHub
        </a>

        <a href="mailto:rahulpawar200604@gmail.com">
          <FaEnvelope /> Email
        </a>
      </div>

      <p className="copyright">
        © 2026 Rahul Dadasaheb Pawar. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;