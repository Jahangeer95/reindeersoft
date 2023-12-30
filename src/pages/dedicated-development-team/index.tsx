import dynamic from "next/dynamic";
import Loading from "@/components/animations/loading";
import MetaInformation from "@/utils/meta";

const DedicatedDevelopmentTeam = dynamic(
  () => import("@/components/routes/dedicated-development-team"),
  {
    loading: () => <Loading />,
  }
);

export default function DedicatedDevelopmentTeamPage() {
  return (
    <>
      <MetaInformation
        title="Dedicated Development Team Services"
        description="This page is related to the Dedicated and Development Team services provided by ReindeerSoft"
        chononicalUrl="https://reindeersoft.com/dedicated-development-team"
      />
      <DedicatedDevelopmentTeam />
    </>
  );
}
