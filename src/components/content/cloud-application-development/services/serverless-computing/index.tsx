import * as data from "./serverlessComputingData";
import RightServiceDescription from "@/components/custom/serviceDescription/leftImageRightText";

const ServerlessComputing = () => {
  return (
    <RightServiceDescription
      title={data.serverlessComputingTitle}
      content={data.serverlessComputingContent}
    />
  );
};

export default ServerlessComputing;
