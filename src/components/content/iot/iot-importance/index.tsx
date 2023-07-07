import React from "react";
import * as data from "./IotOverviewData";
import ImportanceOrOverview from "@/components/custom/importanceOrOverview";

const IoTServicesOverview = () => {
  return (
    <ImportanceOrOverview title={data.title} contentArray={data.contentArray} />
  );
};

export default IoTServicesOverview;
