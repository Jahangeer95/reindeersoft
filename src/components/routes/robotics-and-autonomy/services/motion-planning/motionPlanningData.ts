import {
  RoboticsAutonomyServiceContentType,
  RoboticsAutonomyServiceTitleType,
} from "@/types/roboticsAndAutonomy.type";

import MotionPlanningImage from "@/assets/images/robotics-and-autonomy/robotics-motion-planning-image.jpg";

export const title: RoboticsAutonomyServiceTitleType =
  "Robot Motion Planning & Control ";

export const content: RoboticsAutonomyServiceContentType = {
  description: [
    "Motion planning plays a critical and indispensable role in the functionality of any robust robotic system, enabling seamless navigation and interaction with the environment while ensuring safety and efficiency. It encompasses a meticulous process of determining precise action sequences that guide a robot towards achieving specific goals, all while intelligently avoiding obstacles and potential hazards.",
    "We take pride in our extensive expertise across a wide range of motion planning techniques. From Geometric motion planning and Kinematic motion planning to Trajectory Optimization and Task level motion planning, we possess the knowledge and skills to tackle diverse challenges. By leveraging advanced tools and cutting-edge research methodologies, we develop tailored solutions that address the unique needs of our clients. Whether you require motion planning algorithms for a new robotic system from the ground up or seek to enhance the performance of an existing one, our team of seasoned experts is dedicated to helping you achieve your objectives.",
  ],
  image: MotionPlanningImage,
};
