import Iot from "@/components/content/iot";
import Head from "next/head";

export default function IoTPage() {
  return (
    <>
      <Head>
        <title>IOT - ReindeerSoft</title>
        <meta name="description" content="IOT" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Iot />
    </>
  );
}
