import React from "react";
import Banner from "./banner";
import CloudComputingImportance from "./cloud-computing-importance";
import QaServices from "./cloud-application-services";
import CloudNativeApplications from "./services/cloud-native-applications";
import CloudMigrations from "./services/cloud-migration";
import CloudIntegration from "./services/cloud-integration";
import ServerlessComputing from "./services/serverless-computing";
import DistributedSystems from "./services/distributed-systems";
import ContactUsSection from "@/components/custom/contactUsSection";

const CloudApplicationDevelopment = () => {
  return (
    <>
      <Banner />

      <CloudComputingImportance />

      <QaServices />

      <CloudNativeApplications />

      <CloudMigrations />

      <CloudIntegration />

      <ServerlessComputing />

      <DistributedSystems />

      <ContactUsSection />
    </>
  );
};

export default CloudApplicationDevelopment;
