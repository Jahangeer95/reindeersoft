import { Container } from "react-bootstrap";
import * as data from "./motionPlanningData";
import RightServiceDescription from "@/components/custom/serviceDescription/leftImageRightText";

const MotionPlanning = () => {
  return <RightServiceDescription title={data.title} content={data.content} />;
};

export default MotionPlanning;
