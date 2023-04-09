import {
  RoboticsAutonomyServiceContentType,
  RoboticsAutonomyServicesTitleType,
} from "@/types/roboticsAndAutonomy.type";

import ManipulationImage from "@/assets/images/robotics-and-autonomy/manipulation-image.png";

export const title: RoboticsAutonomyServicesTitleType = "Manipulation";

export const content: RoboticsAutonomyServiceContentType = {
  description: [
    "Manipulation is a critical component of robotics that enables robots to interact with the world around them in a precise and controlled manner. From manufacturing to healthcare to agriculture, manipulation is used in a wide range of industries to perform tasks that would be difficult or impossible for humans to do on their own.",
    "At the heart of manipulation is the ability to control the movement and orientation of an object in a specific way to achieve a desired goal. This requires a deep understanding of the kinematics and dynamics of the robot and its environment.",
    "At our company, we specialize in developing cutting-edge solutions for manipulation in robotic systems, including advanced techniques for inverse kinematics and inverse dynamics. Our team of experts has years of experience in this field, and we are dedicated to delivering innovative and effective solutions that meet the needs of our clients.",
  ],
  image: ManipulationImage,
};
