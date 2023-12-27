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
        description="Innovate for the future with our <strong>autonomous robots</strong> services. Explore <strong>software solutions</strong> in robotic manipulation, hardware, motion planning, and beyond."
        chononicalUrl="https://reindeersoft.com/robotics-and-autonomy"
      />
      <RoboticsAndAutonomy />
    </>
  );
}
