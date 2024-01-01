import dynamic from "next/dynamic";
import Loading from "@/components/animations/loading";
import MetaInformation from "@/utils/meta";
import { websiteMetaDeta } from "@/constants/metaData";
import { QA_AND_TEST_AUTOMATION_PATHNAME } from "@/constants";

const QaAndTestAutomation = dynamic(
  () => import("@/components/routes/qa-and-test-automation"),
  {
    loading: () => <Loading />,
  }
);

export default function QaAndTestAutomationPage() {
  const { title, description, chononicalUrl } =
    websiteMetaDeta[QA_AND_TEST_AUTOMATION_PATHNAME];

  return (
    <>
      <MetaInformation
        title={title}
        description={description}
        chononicalUrl={chononicalUrl}
      />
      <QaAndTestAutomation />
    </>
  );
}
