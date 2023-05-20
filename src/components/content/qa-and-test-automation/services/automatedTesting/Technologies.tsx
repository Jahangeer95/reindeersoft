import React from "react";
import {
  FaJenkins,
  FaPython,
  FaGuilded,
  FaExternalLinkAlt,
  FaKiwiBird,
} from "react-icons/fa";
import { BsGit } from "react-icons/bs";
import { VscTerminalBash } from "react-icons/vsc";

const Technologies = (props: string) => {
  switch (props) {
    case "Jenkins":
      return <FaJenkins />;
    case "Git":
      return <BsGit />;
    case "Bash":
      return <VscTerminalBash />;
    case "Python":
      return <FaPython />;
    case "Squish":
      return <FaGuilded />;
    case "Testlink":
      return <FaExternalLinkAlt />;
    case "Kivi":
      return <FaKiwiBird />;
    default:
      return <FaJenkins />;
  }
};

export default Technologies;
