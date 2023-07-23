import React from "react";
import * as data from "./aboutUsOverviewData";
import ImportanceOrOverview from "@/components/custom/importanceOrOverview";

const AboutUsOverview = () => {
  return (
    <ImportanceOrOverview title={data.title} contentArray={data.contentArray} />
  );
};

export default AboutUsOverview;
