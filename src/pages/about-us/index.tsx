// import AboutUs from "@/components/content/about-us";
import dynamic from "next/dynamic";
import Head from "next/head";
import { Spinner } from "react-bootstrap";

const AboutUs = dynamic(() => import("@/components/routes/about-us"), {
  loading: () => (
    <div
      style={{ height: "70vh", marginTop: "120px" }}
      className="d-flex align-items-center justify-content-center"
    >
      <Spinner variant="primary" animation="border" />
    </div>
  ),
});

export default function AboutUsPage() {
  return (
    <>
      <Head>
        <title>About us - ReindeerSoft</title>
        <meta name="description" content="About us - ReindeerSoft" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AboutUs />
    </>
  );
}
