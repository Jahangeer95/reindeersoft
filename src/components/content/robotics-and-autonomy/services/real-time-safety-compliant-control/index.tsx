import * as data from "./safetyCompliantControlData";
import RightServiceDescription from "@/components/custom/serviceDescription/leftImageRightText";

const SafetyCompliantControl = () => {
  return <RightServiceDescription title={data.title} content={data.content} />;
};

export default SafetyCompliantControl;
