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
            I love the process of turning a raw idea into a website or product
            that impacts lives. 
            <br />
            I want to do work that challenges me as a
            developer and work I can be proud of.
            <br />
            <br />
            I am currently working on a few projects in the <b>MERN</b> stack.
            <br />
            I plan to learn <b>Next.js</b>, <b>Three.js</b>, and{" "}
            <b>TypeScript</b> in the near future.
            <br />
            <br />
            Also, I love <b>coffee</b>{" "}
            <CiCoffeeCup style={{ transform: "scale(1.5) rotate(15deg)" }} />
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