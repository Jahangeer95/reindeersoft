import dynamic from "next/dynamic";
import MetaInformation from "@/utils/meta";
import Loading from "@/components/animations/loading";

const WebAppDevelopment = dynamic(
  () => import("@/components/routes/web-and-mobile-applications"),
  {
    loading: () => <Loading />,
  }
);

export default function mobileAndAppDevelopmentPage() {
  return (
    <>
      <MetaInformation
        title="Web And Mobile Applications - ReindeerSoft"
        description="This page is related to the web and mobile application services provided by ReindeerSoft"
        chononicalUrl="https://reindeersoft.com/web-and-mobile-applications"
      />
      <WebAppDevelopment />
    </>
  );
}
