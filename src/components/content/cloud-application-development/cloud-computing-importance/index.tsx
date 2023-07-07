import React from "react";
import * as data from "./cloudComputingImportanceData";
import ImportanceOrOverview from "@/components/custom/importanceOrOverview";

const CloudComputingImportance = () => {
  return (
    <ImportanceOrOverview title={data.title} contentArray={data.contentArray} />
  );
};

export default CloudComputingImportance;
