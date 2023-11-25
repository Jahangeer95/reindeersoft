import dynamic from "next/dynamic";
import Loading from "@/components/animations/loading";
import MetaInformation from "@/utils/meta";

const QaAndTestAutomation = dynamic(
  () => import("@/components/routes/qa-and-test-automation"),
  {
    loading: () => <Loading />,
  }
);

export default function QaAndTestAutomationPage() {
  return (
    <>
      <MetaInformation
        title="Qa And Test Automation - ReindeerSoft"
        description="This page is related to the qa and test automation services provided by ReindeerSoft"
        chononicalUrl="https://reindeersoft.com/qa-and-test-automation"
      />
      <QaAndTestAutomation />
    </>
  );
}
