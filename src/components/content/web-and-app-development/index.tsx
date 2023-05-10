import React from "react";
import Banner from "./banner";
import WebAndAppDevProcess from "./web-app-dev-process";
import WebAppDevImportance from "./web-app-dev-importance";
import WebDevelopmentServices from "./services/web-development";
import AppDevelopment from "./services/app-development";
import IntegratedAppDevelopment from "./services/integrated-app-development";

const WebAppDevelopment = () => {
  return (
    <>
      <Banner />

      <WebAppDevImportance />

      <WebAndAppDevProcess />

      <WebDevelopmentServices />

      <AppDevelopment />

      <IntegratedAppDevelopment />
    </>
  );
};

export default WebAppDevelopment;
