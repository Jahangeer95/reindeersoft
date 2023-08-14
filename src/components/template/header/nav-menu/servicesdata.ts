import webAppImage from "@/assets/images/web-and-app-development/web-app-development.jpg";
import dedicatedTeam from "@/assets/images/web-and-app-development/web-app-development.jpg";
import roboticsAndAutonomy from "@/assets/images/robotics-and-autonomy/robotics-and-autonomy.jpg";
import qaAndTestAutomation from "@/assets/images/qa-and-automation-testing/qa-and-test-automation.jpg";
import cloudApplicationDevelopment from "@/assets/images/cloud-application-development/cloud-application-development.jpg";
import llmImage from "@/assets/images/llm/large-language-model.jpg";
import iotImage from "@/assets/images/iot/iot.jpg";
import { StaticImageData } from "next/image";

export const servicesDataArray: {
  heading: string;
  bannerImage: StaticImageData;
}[] = [
  {
    heading: "Web and Mobile Applications",
    bannerImage: webAppImage,
  },
  {
    heading: "Dedicated Development Team",
    bannerImage: dedicatedTeam,
  },
  {
    heading: "Robotics and Autonomy",
    bannerImage: roboticsAndAutonomy,
  },
  {
    heading: "QA and Test Automation",
    bannerImage: qaAndTestAutomation,
  },
  {
    heading: "Cloud Application Development",
    bannerImage: cloudApplicationDevelopment,
  },
  {
    heading: "Internet of Things",
    bannerImage: iotImage,
  },
  {
    heading: "Large Language Model",
    bannerImage: llmImage,
  },
];
