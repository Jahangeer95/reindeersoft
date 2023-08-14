import * as data from "./iotAnalyticsData";
import RightServiceDescription from "@/components/custom/serviceDescription/leftImageRightText";

const IoTAnalytics = () => {
  return (
    <RightServiceDescription
      title={data.IoTAnalyticsTitle}
      content={data.IoTAnalyticsContent}
    />
  );
};

export default IoTAnalytics;
