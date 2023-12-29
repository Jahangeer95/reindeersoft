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
        title="Cloud Computing & Application Development Services"
        description="Empower business with our <strong>cloud application development</strong> services. Explore robust solutions for cloud native app, serverless <strong>cloud computing</strong>, and more."
        chononicalUrl="https://reindeersoft.com/cloud-application-development"
      />
      <CloudApplicationDevelopment />
    </>
  );
};

export default CloudAppDevelopemntPage;
