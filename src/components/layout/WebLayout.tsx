import React, { Fragment, useState, useEffect } from "react";
import Footer from "../template/footer";
import Header from "../template/header/Header";

const WebLayout: React.FC<React.PropsWithChildren> = (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Fragment>
      {loading ? (
        <p>Loading...</p>
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
