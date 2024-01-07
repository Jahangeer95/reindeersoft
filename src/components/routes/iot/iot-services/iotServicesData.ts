import iotIntegration from "@/assets/images/iot/iot-services/iot-integration.png";
import iotSecurity from "@/assets/images/iot/iot-services/iot-security.png";
import iotAnalytics from "@/assets/images/iot/iot-services/iot-analytics.png";
import iotDevelopment from "@/assets/images/iot/iot-services/iot-development.png";
import { IoTServicesArrayType, IoTServicesTitleType } from "@/types/iot.type";

export const title: IoTServicesTitleType = "IoT Services";
export const iotServicesArray: IoTServicesArrayType = [
  {
    id: "iot-one",
    value: "IoT Development ",
    image: iotDevelopment,
  },
  {
    id: "iot-two",
    value: "IoT Integration ",
    image: iotIntegration,
  },
  {
    id: "iot-three",
    value: "IoT Security ",
    image: iotSecurity,
  },
  {
    id: "iot-four",
    value: "IoT Analytics ",
    image: iotAnalytics,
  },
];
