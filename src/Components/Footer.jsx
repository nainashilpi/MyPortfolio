import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="FooterContent">
        <h4>
          Designed & Built by <span>Nainu</span>
        </h4>
        <h4>© {new Date().getFullYear()} All rights reserved</h4>

        <div className="footerLinks">
          <a
            href="https://github.com/nainashilpi"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:your-email@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <GrMail />
          </a>

          <a
            href="https://leetcode.com/"
            target="_blank"
            rel="noreferrer"
          >
            <SiLeetcode />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;