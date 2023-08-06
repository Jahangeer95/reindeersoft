import React from "react";
import Banner from "./banner";
import CloudComputingImportance from "./cloud-computing-importance";
import QaServices from "./cloud-application-services";
import CloudNativeApplications from "./services/cloud-native-applications";
import CloudMigrations from "./services/cloud-migration";
import ServerlessComputing from "./services/serverless-computing";
import ContactUsSection from "@/components/custom/contactUsSection";
import EventDrivenApplications from "./services/event-driven-applications";

const CloudApplicationDevelopment = () => {
  return (
    <>
      <Banner />

      <CloudComputingImportance />

      <QaServices />

      <CloudNativeApplications />

      <CloudMigrations />

      <ServerlessComputing />

      <EventDrivenApplications />

      <ContactUsSection />
    </>
  );
};

export default CloudApplicationDevelopment;
