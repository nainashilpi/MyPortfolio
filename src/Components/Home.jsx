import Lottie from "lottie-react";
import Tilt from "react-parallax-tilt";
import { CiCoffeeCup } from "react-icons/ci";

import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Avatar from "../images/Avatar.png";
import Typed from "./Typed";

const Home = () => {
  return (
    <div>
      <div className="HomePage">
        <div className="HomeText">
          <h1>Hi There!</h1>
          <h1>
            I&apos;M <b>NAINA SHILPI</b>
          </h1>
          <Typed />
        </div>

        <Lottie
          className="illustration"
          animationData={SpaceBoy}
          loop
        />
      </div>

      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Brief <b>introduction</b>
          </h1>
          <p>
            3rd-year Information Technology Student | Aspiring Software Developer
            <br />
            I am a Full Stack Developer with a deep passion for turning raw ideas into functional, <br/>
            high-impact digital products. 
            <br />
            My core expertise lies in the MERN Stack, where I focus on building scalable web applications <br /> that solve real-world problems.
            <br />
            <br />
            I love the process of building products from scratch and am constantly looking for challenges <br /> that push my technical boundaries.
             <br />
            Currently seeking Summer Internships and Software Development roles to apply my skills <br /> in a professional environment.
            <br />
            <br />
          </p>
        </div>

        <Tilt>
          <img className="Avatar2" src={Avatar} alt="Avatar" />
        </Tilt>
      </div>
    </div>
  );
};

export default Home;
