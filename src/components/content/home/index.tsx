import React from "react";
// import HomeBanner from "./banner/HomeBanner";
import ContactUsSection from "@/components/custom/contactUsSection";
import Banner from "./banner";
import About from "./about";
import OurServices from "./services";
import HowWeWork from "./how-we-work";
import QualityAssuranceProcess from "./quality-assurance-process";

const HomeContent = () => {
  return (
    <>
      {/* <HomeBanner /> */}

      <Banner />

      <About />

      <OurServices />

      <HowWeWork />

      <QualityAssuranceProcess />

      <ContactUsSection />
    </>
  );
};

export default HomeContent;
