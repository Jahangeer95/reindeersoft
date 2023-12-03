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

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="IT Services | Digital Solutions - ReindeerSoft"
        />
        <meta
          property="og:description"
          content="A dedicated team of professionals committed to delivering exceptional IT services and digital solutions. Explore excellence in technology with us."
        />
        <meta
          property="og:image"
          content="https://www.reindeersoft.com/logo.png"
        />
        <meta property="og:url" content="https://www.reindeersoft.com/" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta property="og:site_name" content="Reindeersoft" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
