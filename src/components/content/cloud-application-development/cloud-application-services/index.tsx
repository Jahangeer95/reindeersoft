import Image from "next/image";
import React from "react";
import * as data from "./cloudAppServicesData";
import Services from "@/components/custom/process";

const CloudApplicationServices = () => {
  return (
    <>
      <Services title={data.title} servicesArray={data.qaServicesArray} />
    </>
  );
};

export default CloudApplicationServices;
