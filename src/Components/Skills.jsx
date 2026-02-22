import { CgCPlusPlus } from "react-icons/cg";
import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaFigma,
  FaBootstrap,
} from "react-icons/fa";
import { DiNodejs, DiJavascript1 } from "react-icons/di";
import {
  SiExpress,
  SiMongodb,
  SiPostman,
  SiVercel,
} from "react-icons/si";

const Skills = ({ skill }) => {
  const icons = {
    "C++": <CgCPlusPlus />,
    React: <FaReact />,
    Javascript: <DiJavascript1 />,
    Node: <DiNodejs />,
    Express: <SiExpress />,
    MongoDb: <SiMongodb />,
    Git: <FaGitAlt />,
    Github: <FaGithub />,
    Npm: <FaNpm />,
    Figma: <FaFigma />,
    Bootstrap: <FaBootstrap />,
    Postman: <SiPostman />,
    Vercel: <SiVercel />,
  };

  return (
    <div className="SkillBox" title={skill}>
      {icons[skill]}
    </div>
  );
};

export default Skills;