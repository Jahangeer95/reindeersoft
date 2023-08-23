import * as data from "./consultationAndSupportData";
import RightServiceDescription from "@/components/custom/serviceDescription/leftImageRightText";

const ConsultationAndSupport = () => {
  return <RightServiceDescription title={data.title} content={data.content} />;
};

export default ConsultationAndSupport;
