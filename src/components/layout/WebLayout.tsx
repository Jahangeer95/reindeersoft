import React, { Fragment, useState, useEffect } from "react";
import Footer from "../template/footer";
import Header from "../template/header/Header";
import LetterAnimate from "../animations/letterAnimate";

const WebLayout: React.FC<React.PropsWithChildren> = (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  let titleArray = "REINDEERSOFT".split("");

  return (
    <Fragment>
      {loading ? (
        <LetterAnimate strArray={titleArray} />
      ) : (
        <>
          <Header />
          <main>{props.children}</main>
          <Footer />
        </>
      )}
    </Fragment>
  );
};

export default WebLayout;
