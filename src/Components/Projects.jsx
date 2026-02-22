import ProjectBox from "./ProjectBox";

import AlgoPulseImage from "../images/AlgoPulseImage.png";
import AirbnbImage from "../images/AirbnbImage.png";
import TicTacToeImage from "../images/TicTacToeImage.png";
import CurrencyConverterImage from "../images/CurrencyConverterImage.png";
import PortfolioImage from "../images/PortfolioImage.png";
import SpotifyImage from "../images/SpotifyImage.png";
import HealthBmiImage from "../images/HealthBmiImage.png";

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>

      <div className="project">
        <ProjectBox projectPhoto={AlgoPulseImage} projectName="AlgoPulse" />
        <ProjectBox projectPhoto={AirbnbImage} projectName="Airbnb" />
        <ProjectBox projectPhoto={CurrencyConverterImage} projectName="CurrencyConverter" />
        <ProjectBox projectPhoto={TicTacToeImage} projectName="TicTacToe" />
        <ProjectBox projectPhoto={PortfolioImage} projectName="Portfolio" />
        <ProjectBox projectPhoto={SpotifyImage} projectName="Spotify" />
        <ProjectBox projectPhoto={HealthBmiImage} projectName="HealthBmi" />
      </div>

      <div style={{ textAlign: "center", marginTop: "60px" }}>
  <a
    href="https://github.com/nainashilpi"
    target="_blank"
    rel="noreferrer"
  >
    <button className="projectbtn" style={{ fontSize: "20px", padding: "12px 24px" }}>
      View More Projects →
    </button>
  </a>
</div>

    </div>
  );
};

export default Projects;