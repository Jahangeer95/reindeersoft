import React from "react";
import * as data from "./QualityAssuranceImportanceData";
import ImportanceOrOverview from "@/components/custom/importanceOrOverview";

const QualityAssuranceImportance = () => {
  return (
    <ImportanceOrOverview title={data.title} contentArray={data.contentArray} />
  );
};

export default QualityAssuranceImportance;
