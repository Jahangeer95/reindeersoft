import RightServiceDescription from "@/components/custom/serviceDescription/leftImageRightText";
import * as data from "./eventDrivenApplicationData";

const EventDrivenApplications = () => {
  return (
    <RightServiceDescription
      title={data.eventDrivenApplicationsTitle}
      content={data.eventDrivenApplicationsContent}
    />
  );
};

export default EventDrivenApplications;
