import React from "react";
import dynamic from "next/dynamic";
import Loading from "@/components/animations/loading";
import MetaInformation from "@/utils/meta";

const CloudApplicationDevelopment = dynamic(
  () => import("@/components/routes/cloud-application-development"),
  {
    loading: () => <Loading />,
  }
);

const CloudAppDevelopemntPage = () => {
  return (
    <>
      <MetaInformation
        title="Cloud Application Development - ReindeerSoft"
        description="This page is related to the Cloud Application Development services provided by ReindeerSoft"
      />
      <CloudApplicationDevelopment />
    </>
  );
};

export default CloudAppDevelopemntPage;
