import * as data from "./simulationData";
import LeftServiceDescription from "@/components/custom/serviceDescription/leftTextRightImage";

const Simulation = () => {
  return <LeftServiceDescription title={data.title} content={data.content} />;
};

export default Simulation;
