import dynamic from "next/dynamic";
import Loading from "@/components/animations/loading";
import MetaInformation from "@/utils/meta";

const RoboticsAndAutonomy = dynamic(
  () => import("@/components/routes/robotics-and-autonomy"),
  {
    loading: () => <Loading />,
  }
);

export default function RoboticsAndAnotomyServicesPage() {
  return (
    <>
      <MetaInformation
        title="Robotics And Autonomy - ReindeerSoft"
        description="This page is related to the Robotics And Autonomy services provided by ReindeerSoft"
      />
      <RoboticsAndAutonomy />
    </>
  );
}
