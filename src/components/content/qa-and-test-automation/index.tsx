import React from "react";
import Banner from "./banner";
import QualityAssurance from "./quality-assurance-importance";
import Quality from "./quality-assurance-process";
import QaServices from "./qa-services";
import AgileDevelopment from "./services/agile-development";
import WaterfallDevelopment from "./services/waterfall-development";
import AutomatedTesting from "./services/automatedTesting";
import ConsultancyServices from "./services/consultancy";
import UniqueTesting from "./services/unique-testing";

const QaAndTestAutomation = () => {
  return (
    <>
      <Banner />

      <QualityAssurance />

      <Quality />

      <QaServices />

      <WaterfallDevelopment />

      <AgileDevelopment />

      <UniqueTesting />

      <AutomatedTesting />

      <ConsultancyServices />
    </>
  );
};

export default QaAndTestAutomation;
