import * as data from "./iotSecurityData";
import LeftServiceDescription from "@/components/custom/serviceDescription/leftTextRightImage";

const IoTSecurity = () => {
  return (
    <LeftServiceDescription
      title={data.IoTSecurityTitle}
      content={data.IoTSecurityContent}
    />
  );
};

export default IoTSecurity;
