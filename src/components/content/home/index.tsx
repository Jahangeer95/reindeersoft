import React from "react";
import HomeBanner from "./banner/HomeBanner";
import ContactUsSection from "@/components/custom/contactUsSection";
import Banner from "./banner";

const HomeContent = () => {
  return (
    <>
      {/* <HomeBanner /> */}

      <Banner />

      <ContactUsSection />
    </>
  );
};

export default HomeContent;
