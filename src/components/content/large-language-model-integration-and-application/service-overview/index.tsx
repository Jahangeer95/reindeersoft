import React from "react";
import * as data from "./serviceOverviewData";
import ImportanceOrOverview from "@/components/custom/importanceOrOverview";

const ServiceOverview = () => {
  return (
    <ImportanceOrOverview
      title={data.ServiceOverViewTitle}
      contentArray={data.ServiceOverviewDescription}
    />
  );
};

export default ServiceOverview;
