import React from "react";
import Head from "next/head";
import { MetaInformationPropTypes } from "@/types/custom.type";

const MetaInformation = (props: MetaInformationPropTypes) => {
  const { title, description } = props;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      {/* <link rel="preload" href="../assets/images/home/Liqq.gif" as="image" /> */}
    </Head>
  );
};

export default MetaInformation;
