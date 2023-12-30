import dynamic from "next/dynamic";
import Loading from "@/components/animations/loading";
import MetaInformation from "@/utils/meta";

const LLM = dynamic(() => import("@/components/routes/large-language-model"), {
  loading: () => <Loading />,
});

export default function LLMPage() {
  return (
    <>
      <MetaInformation
        title="Large language Model Integration & Generative AI Services"
        description="This page is related to the Robotics And Autonomy services provided by ReindeerSoft"
        chononicalUrl="https://reindeersoft.com/large-language-model"
      />
      <LLM />
    </>
  );
}
