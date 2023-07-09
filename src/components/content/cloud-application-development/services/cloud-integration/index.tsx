import * as data from "./cloudIntegrationData";
import LeftServiceDescription from "@/components/custom/serviceDescription/leftTextRightImage";

const CloudIntegration = () => {
  return (
    <LeftServiceDescription
      title={data.cloudIntegrationTitle}
      content={data.cloudIntegrationContent}
    />
  );
};

export default CloudIntegration;
