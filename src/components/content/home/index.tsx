import React from "react";
// import HomeBanner from "./banner/HomeBanner";
import ContactUsSection from "@/components/custom/contactUsSection";
import Banner from "./banner";
import About from "./mission";
import OurServices from "./services";
import HowWeWork from "./how-we-work";
import QualityAssuranceProcess from "./quality-assurance-process";
import Faqs from "./faq";

const HomeContent = () => {
  return (
    <>
      {/* <HomeBanner /> */}

      <Banner />

      <About />

      <OurServices />

      <HowWeWork />

      <QualityAssuranceProcess />

      <Faqs />

      <ContactUsSection />
    </>
  );
};

export default HomeContent;
