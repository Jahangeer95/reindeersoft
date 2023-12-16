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
        description="Efficient and scalable solutions are at the core of our <strong>application development services</strong for web and mobile apps."
        chononicalUrl="https://reindeersoft.com/web-and-mobile-applications"
      />
      <WebAppDevelopment />
    </>
  );
}
