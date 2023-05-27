import React from "react";
import * as data from "./qaServicesData";
import Services from "@/components/custom/process";

const QaServices = () => {
  return <Services title={data.title} servicesArray={data.qaServicesArray} />;
};

export default QaServices;
