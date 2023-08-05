import React from "react";
import Banner from "./banner";
import RoboticsAutonomyImportance from "./robotics-and-autonomy-importance";
import RoboticsAutonomyServices from "./robotics-autonomy-services";
import RoboticsHardware from "./services/robotics-hardware";
import MotionPlanning from "./services/motion-planning";
import Manipulation from "./services/manipulation";
import SafetyCompliantControl from "./services/real-time-safety-compliant-control";
import Simulation from "./services/simulation";
import ComputerVision from "./services/computer-vision";
import Integration from "./services/integration";
import ContactUsSection from "@/components/custom/contactUsSection";

const RoboticsAndAutonomy = () => {
  return (
    <>
      <Banner />

      <RoboticsAutonomyImportance />

      <RoboticsAutonomyServices />

      {/* ***************************
        Robotics and Autonomy Services Details
        ******************************
      */}

      <RoboticsHardware />

      <MotionPlanning />

      <Manipulation />

      <SafetyCompliantControl />

      <Simulation />

      <ComputerVision />

      <Integration />

      {/* ***************************
        Robotics and Autonomy Services Details
        ******************************
      */}

      <ContactUsSection />
    </>
  );
};

export default RoboticsAndAutonomy;
