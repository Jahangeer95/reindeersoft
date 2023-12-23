import roboticsHardware from "@/assets/images/robotics-and-autonomy/robotics-and-autonomy-services/robotics-hardware.png";
import motionPlanning from "@/assets/images/robotics-and-autonomy/robotics-and-autonomy-services/motion-planning.png";
import complianceControl from "@/assets/images/robotics-and-autonomy/robotics-and-autonomy-services/compliance-control.png";
import manipulation from "@/assets/images/robotics-and-autonomy/robotics-and-autonomy-services/manipulation.png";
import simulation from "@/assets/images/robotics-and-autonomy/robotics-and-autonomy-services/simulation.png";
import computerVision from "@/assets/images/robotics-and-autonomy/robotics-and-autonomy-services/computer-vision.png";
import integration from "@/assets/images/robotics-and-autonomy/robotics-and-autonomy-services/integration.png";

import {
  RoboticsAutonomyServicesArrayType,
  RoboticsAutonomyServicesTitleType,
} from "@/types/roboticsAndAutonomy.type";

export const title: RoboticsAutonomyServicesTitleType =
  "Autonomous Robots Services";
export const roboticServicesArray: RoboticsAutonomyServicesArrayType = [
  {
    id: "robotics-app-one",
    value: "Robot Hardware ",
    image: roboticsHardware,
  },
  {
    id: "robotics-app-two",
    value: "Robot Motion Planning & Control ",
    image: motionPlanning,
  },
  {
    id: "robotics-app-three",
    value: "Robotic Manipulation ",
    image: manipulation,
  },
  {
    id: "robotics-app-four",
    value: "Real-Time Safety Compliance Software ",
    image: complianceControl,
  },
  {
    id: "robotics-app-five",
    value: "Robotic Simulation Software  ",
    image: simulation,
  },
  {
    id: "robotics-app-six",
    value: "Computer Vision for Robots ",
    image: computerVision,
  },
  {
    id: "robotics-app-seven",
    value: "Robotic System Integration ",
    image: integration,
  },
];
