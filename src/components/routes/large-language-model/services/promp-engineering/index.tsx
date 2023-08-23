import * as data from "./promptEngineeringData";
import RightServiceDescription from "@/components/custom/serviceDescription/leftImageRightText";

const PromptEngineering = () => {
  return <RightServiceDescription title={data.title} content={data.content} />;
};

export default PromptEngineering;
