import React from "react";
import ContactUsSection from "@/components/custom/contactUsSection";
import Banner from "./banner";
import MissionStatement from "./mission";
import OurServices from "./services";
import HowWeWork from "./how-we-work";
import QualityAssuranceProcess from "./quality-assurance-process";
import Faqs from "./faq";

const HomeContent = () => {
  return (
    <>
      <Banner />

      {/* <MissionStatement /> */}

      <OurServices />

      <HowWeWork />

      <QualityAssuranceProcess />

      <Faqs />

      <ContactUsSection />
    </>
  );
};

export default HomeContent;
