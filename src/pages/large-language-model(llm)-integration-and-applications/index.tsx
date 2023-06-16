import LLM from "@/components/content/large-language-model-integration-and-application";
import Head from "next/head";

export default function LLMPage() {
  return (
    <>
      <Head>
        <title>
          Large Language Model Integration and Application - ReindeerSoft
        </title>
        <meta
          name="description"
          content="Large Language Model Integration and Application"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LLM />
    </>
  );
}
