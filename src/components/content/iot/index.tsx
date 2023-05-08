import React from "react";
import Banner from "./banner";
import IoTServicesOverview from "./iot-importance";
import IoTServices from "./iot-services";

const Iot = () => {
  return (
    <>
      <Banner />

      <IoTServicesOverview />

      <IoTServices />
    </>
  );
};

export default Iot;
