import webAppDevelopment from "@/assets/images/home/web-and-app-development.png";
import dedicatedDevelopmentTeam from "@/assets/images/home/dadicated-development-team.png";
import roboticAndAutonomy from "@/assets/images/home/robotics-and-autonomy.png";
import qaAndTestAutomation from "@/assets/images/home/qa-and-test-automation.png";
import cloudApplicationDevelopment from "@/assets/images/home/cloud-application-development.png";
import iot from "@/assets/images/home/iot.png";

import {
  OurServiceListType,
  OurServicesParagraphType,
  OurServicesTitleType,
} from "@/types/home.type";

export const title: OurServicesTitleType = "Our Services";

export const paragraph: OurServicesParagraphType =
  "At our company, we are dedicated to delivering the best services to our customers. With a focus on excellence, we strive to provide tailored solutions that meet their unique needs. Our commitment to surpassing expectations ensures an exceptional experience for every client we serve.";

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
];
