import React from "react";
import Head from "next/head";
import { MetaInformationPropTypes } from "@/types/custom.type";

const MetaInformation = (props: MetaInformationPropTypes) => {
  const { title, description, chononicalUrl } = props;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={chononicalUrl} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" /> */}
      <link rel="icon" href="/logo.png" />
      {/* <link rel="icon" href="/favicon.ico" /> */}
      {/* <link rel="preload" href="../assets/images/home/Liqq.gif" as="image" /> */}
    </Head>
  );
};

export default MetaInformation;
