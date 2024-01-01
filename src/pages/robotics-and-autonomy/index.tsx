import dynamic from "next/dynamic";
import Loading from "@/components/animations/loading";
import { websiteMetaDeta } from "@/constants/metaData";
import MetaInformation from "@/utils/meta";
import { ROBOTICS_AND_AUTONOMY_PATHNAME } from "@/constants";

const RoboticsAndAutonomy = dynamic(
  () => import("@/components/routes/robotics-and-autonomy"),
  {
    loading: () => <Loading />,
  }
);

export default function RoboticsAndAnotomyServicesPage() {
  const { title, description, chononicalUrl } =
    websiteMetaDeta[ROBOTICS_AND_AUTONOMY_PATHNAME];

  return (
    <>
      <MetaInformation
        title={title}
        description={description}
        chononicalUrl={chononicalUrl}
      />
      <RoboticsAndAutonomy />
    </>
  );
}
