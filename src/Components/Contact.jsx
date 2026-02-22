
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        
        <h1 className="contact-title">
          Let’s <span>Connect</span>
        </h1>
        <p className="contact-subtitle">
          Have a project, internship, or just want to say hi?  
          My inbox is always open 💜
        </p>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required />
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-socials">
          <a href="mailto:yourmail@gmail.com">
            <FaEnvelope />
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;