import React from "react";
import * as data from "./ddtServiceOverviewData";
import ImportanceOrOverview from "@/components/custom/importanceOrOverview";

const DDTServiceOverview = () => {
  return (
    <ImportanceOrOverview title={data.title} contentArray={data.contentArray} />
  );
};

export default DDTServiceOverview;
