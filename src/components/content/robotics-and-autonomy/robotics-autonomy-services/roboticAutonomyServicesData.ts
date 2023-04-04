import cloudMigration from "@/assets/images/cloud-application-development/cloud-application-services/cloud-migration.png";
import cloudIntegration from "@/assets/images/cloud-application-development/cloud-application-services/cloud-integration.png";
import serverlessComputing from "@/assets/images/cloud-application-development/cloud-application-services/serverless-computing.png";
import distributedSystem from "@/assets/images/cloud-application-development/cloud-application-services/distributed-system.png";
import cloudNativeApp from "@/assets/images/cloud-application-development/cloud-application-services/cloud-nativ-app.png";
import {
  RoboticsAutonomyServicesArrayType,
  RoboticsAutonomyServicesTitleType,
} from "@/types/roboticsAndAutonomy.type";

export const title: RoboticsAutonomyServicesTitleType =
  "Robotics and Autonomy Services";
export const qaServicesArray: RoboticsAutonomyServicesArrayType = [
  {
    id: "robotics-app-one",
    value: "Robotics Hardware",
    image: cloudNativeApp,
  },
  {
    id: "robotics-app-two",
    value: "Motion Planning",
    image: cloudMigration,
  },
  {
    id: "robotics-app-three",
    value: "Manipulation",
    image: cloudIntegration,
  },
  {
    id: "robotics-app-four",
    value: "Real Time Safety Compliant Control",
    image: serverlessComputing,
  },
  {
    id: "cloud-app-five",
    value: "Simulation",
    image: distributedSystem,
  },
  {
    id: "cloud-app-five",
    value: "Integration",
    image: distributedSystem,
  },
];
