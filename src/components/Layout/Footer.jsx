import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <h2>Created By Cihan Yüksel with ❤️ | All Rigths Reserved</h2>
      <h3>
        <a href="mailto:cihan_yuksel26@hotmail.com">
          cihan_yuksel26@hotmail.com
        </a>
      </h3>
      <h3>
        <a href="https://www.linkedin.com/in/cihan-yuksel/">
          <div className="linked-in-button">
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
        </a>
      </h3>
    </footer>
  );
};

export default Footer;
