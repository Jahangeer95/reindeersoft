import React from "react";
import * as data from "./iotDevelopmentData";
import LeftServiceDescription from "@/components/custom/serviceDescription/leftTextRightImage";

const IoTDevelopment = () => {
  return (
    <LeftServiceDescription
      title={data.IoTDevelopmentTitle}
      content={data.IoTDevelopmentContent}
    />
  );
};

export default IoTDevelopment;
