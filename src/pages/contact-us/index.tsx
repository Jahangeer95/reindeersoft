import ContactUs from "@/components/content/contact-us";
import Head from "next/head";

export default function IoTPage() {
  return (
    <>
      <Head>
        <title>Contact us - ReindeerSoft</title>
        <meta name="description" content="Contact us - ReindeerSoft" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ContactUs />
    </>
  );
}
