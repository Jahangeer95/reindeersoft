import React from "react";
import Banner from "./banner";
import IoTServicesOverview from "./iot-importance";
import IoTServices from "./iot-services";
import IoTDevelopment from "./services/iot-development";
import IoTIntegrations from "./services/iot-integrations";
import IoTSecurity from "./services/iot-security";
import IoTAnalytics from "./services/iot-analytics";

const Iot = () => {
  return (
    <>
      <Banner />

      <IoTServicesOverview />

      <IoTServices />

      <IoTDevelopment />

      <IoTIntegrations />

      <IoTSecurity />

      <IoTAnalytics />
    </>
  );
};

export default Iot;
