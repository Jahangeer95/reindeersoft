import React, { Fragment } from "react";
import Head from "next/head";
import Footer from "../template/footer";
import Header from "../template/header/Header";

const WebLayout: React.FC<React.PropsWithChildren> = (props) => {
  return (
    <Fragment>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <Header />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default WebLayout;
