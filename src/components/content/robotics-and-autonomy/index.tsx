import React from "react";
import Banner from "./banner";
import RoboticsAutonomyImportance from "./robotics-and-autonomy-importance";
import RoboticsAutonomyServices from "./robotics-autonomy-services";
import RoboticsHardware from "./robotics-hardware";
import MotionPlanning from "./motion-planning";
import Manipulation from "./manipulation";
import SafetyCompliantControl from "./real-time-safety-compliant-control";
import Simulation from "./simulation";
import ComputerVision from "./computer-vision";
import Integration from "./integration";

const RoboticsAndAutonomy = () => {
  return (
    <>
      <Banner />
      <RoboticsAutonomyImportance />

      <RoboticsAutonomyServices />

      <RoboticsHardware />

      <MotionPlanning />

      <Manipulation />

      <SafetyCompliantControl />

      <Simulation />

      <ComputerVision />

      <Integration />
    </>
  );
};

export default RoboticsAndAutonomy;
