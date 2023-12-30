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
        title="Application Development Services | Web & Mobile App"
        // description="Achieve digital brilliance effortlessly with our web and mobile application development services, tailored for optimal performance and user satisfaction."
        description="Expertise in crafting robust, secure, and scalable web and mobile apps. Experience seamless innovation through our application development services."
        chononicalUrl="https://reindeersoft.com/web-and-mobile-applications"
      />
      <WebAppDevelopment />
    </>
  );
}
