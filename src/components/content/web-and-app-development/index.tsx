import React from "react";
import Banner from "./banner";
import WebAndAppDevProcess from "./web-app-dev-process";
import WebAppDevOverview from "./service-overview";
import WebDevelopmentServices from "./services/fullstack-web-development";
import AppDevelopment from "./services/app-development";
import IntegratedAppDevelopment from "./services/integrated-app-development";
import ContactUsSection from "@/components/custom/contactUsSection";
import WebMobileApplicationServices from "./web-and-mobile-application-services";
import NativeMobileApplications from "./services/native-mobile-applications";

const WebAppDevelopment = () => {
  return (
    <>
      <Banner />

      <WebAppDevOverview />

      <WebMobileApplicationServices />

      <WebDevelopmentServices />

      <NativeMobileApplications />

      <AppDevelopment />

      <IntegratedAppDevelopment />

      <WebAndAppDevProcess />

      <ContactUsSection />
    </>
  );
};

export default WebAppDevelopment;
