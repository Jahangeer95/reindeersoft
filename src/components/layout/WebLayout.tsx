import React, { Fragment } from "react";
import Footer from "../template/footer";
import Header from "../template/header/Header";

const WebLayout: React.FC<React.PropsWithChildren> = (props) => {
  return (
    <Fragment>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default WebLayout;
