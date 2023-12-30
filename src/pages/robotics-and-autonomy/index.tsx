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
        title="Autonomous Robots Services & Software Solutions"
        description="Innovate for the future with our autonomous robots services. Explore software solutions in robotic manipulation, hardware, motion planning, and beyond."
        chononicalUrl="https://reindeersoft.com/robotics-and-autonomy"
      />
      <RoboticsAndAutonomy />
    </>
  );
}
