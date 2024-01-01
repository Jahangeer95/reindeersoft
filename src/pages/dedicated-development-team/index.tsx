import dynamic from "next/dynamic";
import Loading from "@/components/animations/loading";
import { websiteMetaDeta } from "@/constants/metaData";
import MetaInformation from "@/utils/meta";
import { DEDICATED_DEVELOPMENT_TEAM_PATHNAME } from "@/constants";

const DedicatedDevelopmentTeam = dynamic(
  () => import("@/components/routes/dedicated-development-team"),
  {
    loading: () => <Loading />,
  }
);

export default function DedicatedDevelopmentTeamPage() {
  const { title, description, chononicalUrl } =
    websiteMetaDeta[DEDICATED_DEVELOPMENT_TEAM_PATHNAME];

  return (
    <>
      <MetaInformation
        title={title}
        description={description}
        chononicalUrl={chononicalUrl}
      />
      <DedicatedDevelopmentTeam />
    </>
  );
}
