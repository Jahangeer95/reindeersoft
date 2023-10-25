import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>

        <meta property="title" content="ReindeerSoft" />
        <meta
          name="description"
          content="Reindeersoft is a dedicated team of professionals committed to
          delivering exceptional solutions to our clients. We strive to exceed
          expectations and build long-lasting partnerships."
        />
        <link rel="canonical" href="https://www.reindeersoft.com/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="ReindeerSoft" />
        <meta
          property="og:description"
          content="Reindeersoft is a dedicated team of professionals committed to
          delivering exceptional solutions to our clients. We strive to exceed
          expectations and build long-lasting partnerships."
        />
        <meta property="og:url" content="https://www.reindeersoft.com/" />
        <meta property="og:site_name" content="EMI Fusion" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
