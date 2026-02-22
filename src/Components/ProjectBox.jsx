import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
const desc = {
  AlgoPulseDesc:
    "AlgoPulse is a DSA Progress Tracker designed to help students stay consistent with problem-solving. It allows users to track daily practice, monitor topic-wise progress, and visualize performance over time. The project focuses on building discipline and accountability while preparing for coding interviews.",
  AlgoPulseGithub: "https://github.com/nainashilpi/AlgoPulse-DSA-Tracker",
  AlgoPulseWebsite: "https://algopulse-frontend.onrender.com/",

  AirbnbDesc:
    "A full-stack Airbnb clone that replicates core features such as property listings, user authentication, and booking flow. This project helped me understand backend integration, REST APIs, database modeling, and building scalable full-stack applications.",
  AirbnbGithub: "https://github.com/nainashilpi/Airbnb-Fullstack-Project",
  AirbnbWebsite: "https://airbnb-fullstack-project-d1sb.onrender.com/",

  CurrencyConverterDesc:
    "A real-time currency converter built using APIs to fetch live exchange rates. The project focuses on API integration, asynchronous JavaScript, and creating a clean, responsive user interface for accurate conversions.",
  CurrencyConverterGithub: "https://github.com/nainashilpi/Currency-Converter",
  CurrencyConverterWebsite:
    "https://currency-converter-mu-sepia-58.vercel.app/",

  TicTacToeDesc:
    "A classic Tic Tac Toe game built with JavaScript focusing on game logic, state management, and user interaction. This project helped strengthen my understanding of DOM manipulation and basic game development concepts.",
  TicTacToeGithub: "https://github.com/nainashilpi/Tic-Tac-Toe-game",
  TicTacToeWebsite: "https://tic-tac-toe-game-smoky-mu.vercel.app/",

  PortfolioDesc:
    "My personal developer portfolio built with React to showcase my projects, skills, and resume. The website is fully responsive and focuses on clean UI, smooth navigation, and modern frontend practices.",
  PortfolioGithub: "https://github.com/nainashilpi/Portfolio",
  PortfolioWebsite: "https://tic-tac-toe-game-smoky-mu.vercel.app/",

  SpotifyDesc:
    "A Spotify-inspired frontend application that replicates the UI and basic functionality of a music streaming platform. This project focuses on component-based design, responsive layouts, and frontend performance optimization.",
  SpotifyGithub: "https://github.com/nainashilpi/Spotify-",
  SpotifyWebsite: "https://spotify-eight-sable.vercel.app/",

  HealthBmiDesc:
    "Health BMI is a web application that helps users calculate their Body Mass Index (BMI) based on height and weight. It provides instant results along with BMI category insights, focusing on clean UI, responsive design, and basic health awareness. This project helped me practice JavaScript logic, form handling, and building user-friendly interfaces.",
  HealthBmiGithub: "https://github.com/nainashilpi/health-bmi-web",
  HealthBmiWebsite: "https://health-bmi-web.vercel.app/",
  
};

  const showGithub = desc[`${projectName}Github`] !== "";

  return (
    <div className="projectBox">
      <img
        className="projectPhoto"
        src={projectPhoto}
        alt={`${projectName} project`}
      />

      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[`${projectName}Desc`]}
        <br />

        {showGithub && (
          <a
            href={desc[`${projectName}Github`]}
            target="_blank"
            rel="noreferrer"
          >
            <button className="projectbtn">
              <FaGithub /> Github
            </button>
          </a>
        )}

        <a
          href={desc[`${projectName}Website`]}
          target="_blank"
          rel="noreferrer"
        >
          <button className="projectbtn">
            <CgFileDocument /> Live
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;