import webAppDevelopment from "@/assets/images/home/web-and-app-development.png";
import dedicatedDevelopmentTeam from "@/assets/images/home/dadicated-development-team.png";
import roboticAndAutonomy from "@/assets/images/home/robotics-and-autonomy.png";
import qaAndTestAutomation from "@/assets/images/home/qa-and-test-automation.png";
import cloudApplicationDevelopment from "@/assets/images/home/cloud-application-development.png";
import iot from "@/assets/images/home/iot.png";
import llm from "@/assets/images/home/llm.png";

import { OurServiceListType, OurServicesTitleType } from "@/types/home.type";

export const title: OurServicesTitleType = "Service Offerings";

export const ourServicesList: OurServiceListType = [
  {
    icon: webAppDevelopment,
    title: "Web and App Development",
  },
  {
    icon: dedicatedDevelopmentTeam,
    title: "Dedicated Development Team",
  },
  {
    icon: roboticAndAutonomy,
    title: "Robotics and Autonomy",
  },
  {
    icon: qaAndTestAutomation,
    title: "QA and Test Automation",
  },
  {
    icon: cloudApplicationDevelopment,
    title: "Cloud Application Development",
  },
  {
    icon: iot,
    title: "Internet of Things",
  },
  {
    icon: llm,
    title: "Large Language Model(LLM) Integration and Applications",
  },
];
