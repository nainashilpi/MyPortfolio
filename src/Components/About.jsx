import Tilt from "react-parallax-tilt";

import Skills from "./Skills";
import Avatar from "../images/Avatar.png";

const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>

          <p className="AboutPara">
            Hi, my name is <b>Nainu</b> and I am currently pursuing a{" "}
            <b>B.Tech in Information Technology</b>. 
            <br />
            I am a passionate college
            student with a strong interest in <b>web development</b> and
            software engineering.
            <br />
            <br />
            I enjoy transforming ideas into clean, responsive, and
            user-friendly web interfaces.
            <br />
             I am currently working with{" "}
            <b>React</b> and gradually exploring the <b>MERN</b> stack
            <br />
             to
            strengthen both my frontend and backend development skills.
            <br />
            <br />
            Alongside development,
              <br />
             I am consistently improving my
            problem-solving skills and building a strong foundation
            <br />
             in core
            computer science concepts to prepare myself for internships and
            future placements.
          </p>

          {/* EDUCATION SECTION */}
          <div className="EducationBox">
            <h2>Education</h2>

            <div className="EducationItem">
              <h3>Bachelor of Technology (B.Tech)</h3>
              <p>Information Technology</p>
              <span>Undergraduate Student</span>
            </div>
          </div>
        </div>

        <div className="AboutIllustration">
          <Tilt>
          <img className="Avatar" src={Avatar} alt="Avatar" />
        </Tilt>
        </div>
      </div>

      <h1 className="SkillsHeading">Professional Skillset</h1>

      <div className="skills">
        <Skills skill="React" />
        <Skills skill="Node" />
        <Skills skill="Express" />
        <Skills skill="MongoDb" />
        <Skills skill="Git" />
        <Skills skill="Github" />
        <Skills skill="Javascript" />
        <Skills skill="C++" />
        <Skills skill="Postman" />
        <Skills skill="Figma" />
        <Skills skill="Vercel" />
        <Skills skill="Npm" />
        <Skills skill="Bootstrap" />
      </div>
    </>
  );
};

export default About;