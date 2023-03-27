import React from "react";
import Banner from "./banner";
import QualityAssurance from "./quality-assurance-importance";
import Quality from "./quality-assurance-process";
// import QaServices from "./qa-services";
import AgileDevelopment from "./agile-development";
import WaterfallDevelopment from "./waterfall-development";
// import AutomatedTesting from "./automatedTesting";
// import ConsultancyServices from "./consultancy";

// import UniqueTesting from "./unique-testing";

const QaAndTestAutomation = () => {
  return (
    <>
      <Banner />

      <QualityAssurance />

      <Quality />

      {/* <QaServices /> */}

      <WaterfallDevelopment />

      <AgileDevelopment />

      {/* <ManualTesting /> */}
      {/* <UniqueTesting />

      <AutomatedTesting />

      <ConsultancyServices /> */}
    </>
  );
};

export default QaAndTestAutomation;
