import React from "react";
import * as data from "./roboticAutonomyServicesData";
import Services from "@/components/custom/process";

const RoboticsAutonomyServices = () => {
  return (
    <>
      <Services title={data.title} servicesArray={data.roboticServicesArray} />
    </>
  );
};

export default RoboticsAutonomyServices;
