import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/"); // redirect to home
  };

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

        <form className="contact-form" onSubmit={handleSubmit}>
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

          <a
            href="https://www.instagram.com/_niyo__neta____/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;
