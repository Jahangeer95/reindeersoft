import {
  RoboticsAutonomyServiceContentType,
  RoboticsAutonomyServiceTitleType,
} from "@/types/roboticsAndAutonomy.type";

import SimulationImage from "@/assets/images/robotics-and-autonomy/robotics-simulation-image.jpg";

export const title: RoboticsAutonomyServiceTitleType = "Simulation";

export const content: RoboticsAutonomyServiceContentType = {
  description: [
    "A robotic simulation is a powerful tool that empowers companies to thoroughly test and refine their robotics designs prior to physical implementation. By leveraging a sophisticated physics-based simulator, we can create a realistic virtual environment that accurately replicates robotic movements and behaviors. This enables us to identify potential issues, explore various scenarios, and optimize designs for optimal performance and efficiency.",
    "Our team utilizes state-of-the-art physics-based simulation software, enabling you to test your robotics systems with unparalleled accuracy and precision. Through rigorous simulation and validation, we ensure that your robotics designs meet the highest standards of quality and performance.",
  ],
  image: SimulationImage,
};
