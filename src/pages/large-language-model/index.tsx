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
        title="Robotics And Autonomy - ReindeerSoft"
        description="This page is related to the Robotics And Autonomy services provided by ReindeerSoft"
      />
      <LLM />
    </>
  );
}
