import dynamic from "next/dynamic";
import Loading from "@/components/animations/loading";
import MetaInformation from "@/utils/meta";
import { websiteMetaDeta } from "@/constants/metaData";
import { LARGE_LANGUAGE_MODEL_PATHNAME } from "@/constants";

const LLM = dynamic(() => import("@/components/routes/large-language-model"), {
  loading: () => <Loading />,
});

export default function LLMPage() {
  const { title, description, chononicalUrl } =
    websiteMetaDeta[LARGE_LANGUAGE_MODEL_PATHNAME];

  return (
    <>
      <MetaInformation
        title={title}
        description={description}
        chononicalUrl={chononicalUrl}
      />
      <LLM />
    </>
  );
}
