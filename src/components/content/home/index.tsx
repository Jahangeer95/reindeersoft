import React from "react";
// import HomeBanner from "./banner/HomeBanner";
import ContactUsSection from "@/components/custom/contactUsSection";
import Banner from "./banner";
import About from "./about";
import OurServices from "./services";

const HomeContent = () => {
  return (
    <>
      {/* <HomeBanner /> */}

      <Banner />

      <About />

      <OurServices />

      <ContactUsSection />
    </>
  );
};

export default HomeContent;
