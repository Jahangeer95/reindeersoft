import React from "react";
import * as data from "./roboticsAutonomyData";
import ImportanceOrOverview from "@/components/custom/importanceOrOverview";

const RoboticsAutonomyImportance = () => {
  return (
    <ImportanceOrOverview title={data.title} contentArray={data.contentArray} />
  );
};

export default RoboticsAutonomyImportance;
