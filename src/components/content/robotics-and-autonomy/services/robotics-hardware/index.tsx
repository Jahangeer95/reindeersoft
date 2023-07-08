import * as data from "./roboticsHardwareData";
import LeftServiceDescription from "@/components/custom/serviceDescription/leftTextRightImage";

const RoboticsHardware = () => {
  return <LeftServiceDescription title={data.title} content={data.content} />;
};

export default RoboticsHardware;
