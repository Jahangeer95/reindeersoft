import React, { Fragment, useState, useEffect } from "react";
import Footer from "../template/footer";
import Header from "../template/header/Header";
import LetterAnimate from "../animations/letterAnimate";
import { useRouter } from "next/router";

const WebLayout: React.FC<React.PropsWithChildren | any> = (props) => {
  const { pathname } = useRouter();
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);

  // let titleArray = "REINDEERSOFT".split("");

  if (pathname === "/sitemap.xml") {
    return props.children;
  }

  return (
    <Fragment>
      {/* {loading ? (
        <LetterAnimate strArray={titleArray} />
      ) : (
        <> */}
      <Header />
      <main>{props.children}</main>
      <Footer />
      {/* </>
      )} */}
    </Fragment>
  );
};

export default WebLayout;
