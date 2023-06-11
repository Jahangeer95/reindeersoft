import AboutUs from "@/components/content/about-us";
import Head from "next/head";

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
