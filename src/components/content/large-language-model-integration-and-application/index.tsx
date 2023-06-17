import React from "react";
import Banner from "./banner";
import ServiceOverview from "./service-overview";
import LLMServices from "./llm-services";

const LLM = () => {
  return (
    <>
      <Banner />

      <ServiceOverview />

      <LLMServices />
    </>
  );
};

export default LLM;
