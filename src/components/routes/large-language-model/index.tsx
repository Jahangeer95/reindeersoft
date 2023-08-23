import React from "react";
import Banner from "./banner";
import ServiceOverview from "./service-overview";
import LLMServices from "./llm-services";
import Integrations from "./services/integrations";
import PromptEngineering from "./services/promp-engineering";
import TrainingAndCustomization from "./services/training-and-customization";
import ConsultationAndSupport from "./services/consultation-and-support";
import ContactUsSection from "@/components/custom/contactUsSection";
import LLMApplications from "./applications";

const LLM = () => {
  return (
    <>
      <Banner />

      <ServiceOverview />

      <LLMServices />

      <Integrations />

      <PromptEngineering />

      <TrainingAndCustomization />

      <ConsultationAndSupport />

      <LLMApplications />

      <ContactUsSection />
    </>
  );
};

export default LLM;
