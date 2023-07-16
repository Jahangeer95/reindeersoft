import WebAppDevelopment from "@/components/content/web-and-app-development";
import Head from "next/head";

export default function mobileAndAppDevelopmentPage() {
  return (
    <>
      <Head>
        <title>Web and App Development - ReindeerSoft</title>
        <meta name="description" content="Web and App Development" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WebAppDevelopment />
    </>
  );
}
