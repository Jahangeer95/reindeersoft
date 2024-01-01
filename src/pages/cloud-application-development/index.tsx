import React from "react";
import dynamic from "next/dynamic";
import Loading from "@/components/animations/loading";
import MetaInformation from "@/utils/meta";
import { websiteMetaDeta } from "@/constants/metaData";
import { CLOUD_APPLICATION_DEVELOPMENT_PATHNAME } from "@/constants";

const CloudApplicationDevelopment = dynamic(
  () => import("@/components/routes/cloud-application-development"),
  {
    loading: () => <Loading />,
  }
);

const CloudAppDevelopemntPage = () => {
  const { title, description, chononicalUrl } =
    websiteMetaDeta[CLOUD_APPLICATION_DEVELOPMENT_PATHNAME];

  return (
    <>
      <MetaInformation
        title={title}
        description={description}
        chononicalUrl={chononicalUrl}
      />
      <CloudApplicationDevelopment />
    </>
  );
};

export default CloudAppDevelopemntPage;
