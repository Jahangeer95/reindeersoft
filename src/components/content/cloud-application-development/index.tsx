import React from "react";
import Banner from "./banner";
import CloudComputingImportance from "./cloud-computing-importance";
import QaServices from "./cloud-application-services";
import CloudNativeApplications from "./cloud-native-applications";
import CloudMigrations from "./cloud-migration";
import CloudIntegration from "./cloud-integration";
import ServerlessComputing from "./serverless-computing";
import DistributedSystems from "./distributed-systems";

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
    </>
  );
};

export default CloudApplicationDevelopment;
