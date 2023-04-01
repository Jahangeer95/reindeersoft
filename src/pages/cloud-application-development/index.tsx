import CloudApplicationDevelopment from "@/components/content/cloud-application-development";
import Head from "next/head";
import React from "react";

const CloudAppDevelopemntPage = () => {
  return (
    <>
      <Head>
        <title>Cloud Application Development - ReindeerSoft</title>
        <meta name="description" content="Cloud Application Development" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CloudApplicationDevelopment />
    </>
  );
};

export default CloudAppDevelopemntPage;
