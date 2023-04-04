import React from "react";
import Banner from "./banner";
import RoboticsAutonomyImportance from "./robotics-and-autonomy-importance";
import RoboticsAutonomyServices from "./robotics-autonomy-services";
import RoboticsHardware from "./robotics-hardware";
import MotionPlanning from "./motion-planning";
import Manipulation from "./manipulation";

const RoboticsAndAutonomy = () => {
  return (
    <>
      <Banner />
      <RoboticsAutonomyImportance />

      <RoboticsAutonomyServices />

      <RoboticsHardware />

      <MotionPlanning />

      <Manipulation />
    </>
  );
};

export default RoboticsAndAutonomy;
