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
        description="Expertise in crafting robust, secure, and scalable web and mobile applications. From concept to deployment, experience seamless innovation with us."
        chononicalUrl="https://reindeersoft.com/web-and-mobile-applications"
      />
      <WebAppDevelopment />
    </>
  );
}
