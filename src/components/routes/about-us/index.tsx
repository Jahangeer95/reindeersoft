import React from "react";
import Banner from "./banner";
import AboutUsOverview from "./about-us-overview";
import OurCoreValues from "./core-values";
import ModalAndServiceOffering from "./modal-and-services";

const AboutUs = () => {
  return (
    <>
      <Banner />

      <AboutUsOverview />

      <OurCoreValues />

      <ModalAndServiceOffering />
    </>
  );
};

export default AboutUs;
