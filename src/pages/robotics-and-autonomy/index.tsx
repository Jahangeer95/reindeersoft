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
        title="Autonomous Robots Software & Operating Solutions"
        description="Experience the future of robotics with cutting-edge <strong>software</strong> and <strong>operating solutions</strong>, empowering <strong>autonomous robots</strong> to redefine efficiency and adaptability."
        chononicalUrl="https://reindeersoft.com/robotics-and-autonomy"
      />
      <RoboticsAndAutonomy />
    </>
  );
}
