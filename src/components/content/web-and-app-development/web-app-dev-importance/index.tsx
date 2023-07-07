import React from "react";
import * as data from "./webAppImportanceData";
import ImportanceOrOverview from "@/components/custom/importanceOrOverview";

const WebAppDevImportance = () => {
  return (
    <ImportanceOrOverview title={data.title} contentArray={data.contentArray} />
  );
};

export default WebAppDevImportance;
