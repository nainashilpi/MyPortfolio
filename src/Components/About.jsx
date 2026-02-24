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
            Hi, I’m <b>Naina</b>, a B.Tech student in <b>Information Technology</b> at
            <b> UIT RGPV, Bhopal</b>.
            <br />
            <br />
            I am a passionate and results-driven developer with strong expertise in
            <b> MERN stack development</b>, <br /> having built multiple real-world projects
            focused on clean architecture, responsiveness,<br /> and user-centric design.
 
           <br />
           Alongside development, I have a strong foundation in
           <b> Data Structures and Algorithms</b>. <br /> I have solved
           <b> 500+ DSA problems</b> across multiple platforms and hold a
           <b> 2★ rating on CodeChef</b>, <br />  demonstrating consistent problem-solving
           ability and logical thinking.
          <br />
          <br />
          I am actively preparing for internships and full-time opportunities by
          strengthening my core <br />  computer science fundamentals and building impactful
          projects.
          </p>

{/* EDUCATION SECTION */}
<div className="EducationBox">
  <h2>Education</h2>

  <div className="EducationItem">
    <h3>Bachelor of Technology (B.Tech)</h3>
    <p>Information Technology</p>
    <span>
      University Institute of Technology, RGPV, Bhopal
    </span>
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
