import React from "react";
import * as data from "./cloudNativeApplicationData";
import LeftServiceDescription from "@/components/custom/serviceDescription/leftTextRightImage";

const CloudNativeApplications = () => {
  return (
    <LeftServiceDescription
      title={data.cloudNativeApplicationTitle}
      content={data.cloudNativeApplicationContent}
    />
  );
};

export default CloudNativeApplications;
