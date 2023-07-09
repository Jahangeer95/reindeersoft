import * as data from "./ciotIntegrationsData";
import RightServiceDescription from "@/components/custom/serviceDescription/leftImageRightText";

const IoTIntegrations = () => {
  return (
    <RightServiceDescription
      title={data.IoTIntegrationsTitle}
      content={data.IoTIntegrationsContent}
    />
  );
};

export default IoTIntegrations;
