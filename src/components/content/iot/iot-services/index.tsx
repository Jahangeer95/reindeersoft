import React from "react";
import * as data from "./iotServicesData";
import Services from "@/components/custom/process";

const IoTServices = () => {
  return <Services title={data.title} servicesArray={data.iotServicesArray} />;
};

export default IoTServices;
