import LeftServiceDescription from "@/components/custom/serviceDescription/leftTextRightImage";
import * as data from "./serverlessComputingData";

const ServerlessComputing = () => {
  return (
    <LeftServiceDescription
      title={data.serverlessComputingTitle}
      content={data.serverlessComputingContent}
    />
  );
};

export default ServerlessComputing;
