import roboticsHardware from "@/assets/images/robotics-and-autonomy/robotics-hardware.png";
import motionPlanning from "@/assets/images/robotics-and-autonomy/motion-planning.png";
import complianceControl from "@/assets/images/robotics-and-autonomy/compliance-control.png";
import manipulation from "@/assets/images/robotics-and-autonomy/manipulation.png";
import simulation from "@/assets/images/robotics-and-autonomy/simulation.png";
import computerVision from "@/assets/images/robotics-and-autonomy/computer-vision.png";
import integration from "@/assets/images/robotics-and-autonomy/integration.png";

import {
  RoboticsAutonomyServicesArrayType,
  RoboticsAutonomyServicesTitleType,
} from "@/types/roboticsAndAutonomy.type";

export const title: RoboticsAutonomyServicesTitleType =
  "Robotics and Autonomy Services";
export const roboticServicesArray: RoboticsAutonomyServicesArrayType = [
  {
    id: "robotics-app-one",
    value: "Robotics Hardware",
    image: roboticsHardware,
  },
  {
    id: "robotics-app-two",
    value: "Motion Planning",
    image: motionPlanning,
  },
  {
    id: "robotics-app-three",
    value: "Manipulation",
    image: manipulation,
  },
  {
    id: "robotics-app-four",
    value: "Real-Time Safety Compliant Control",
    image: complianceControl,
  },
  {
    id: "robotics-app-five",
    value: "Simulation",
    image: simulation,
  },
  {
    id: "robotics-app-six",
    value: "Computer Vision",
    image: computerVision,
  },
  {
    id: "robotics-app-seven",
    value: "Integration",
    image: integration,
  },
];
