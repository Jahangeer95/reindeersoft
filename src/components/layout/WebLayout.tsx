import React, { Fragment } from "react";
import { Footer } from "../template/footer";
import Header from "../template/header/Header";
import { useRouter } from "next/router";

export function WebLayout(props: React.PropsWithChildren | any) {
  const { pathname } = useRouter();

  if (pathname === "/sitemap.xml") {
    return props.children;
  }

  return (
    <Fragment>
      <Header />

      <main>{props.children}</main>

      <Footer />
    </Fragment>
  );
}
