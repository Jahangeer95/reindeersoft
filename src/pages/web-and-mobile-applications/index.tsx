import dynamic from "next/dynamic";
import MetaInformation from "@/utils/meta";
import Loading from "@/components/animations/loading";
import { websiteMetaDeta } from "@/constants/metaData";
import { WEB_AND_APP_PATHNAME } from "@/constants";

const WebAppDevelopment = dynamic(
  () => import("@/components/routes/web-and-mobile-applications"),
  {
    loading: () => <Loading />,
  }
);

export default function mobileAndAppDevelopmentPage() {
  const { title, description, chononicalUrl } =
    websiteMetaDeta[WEB_AND_APP_PATHNAME];

  return (
    <>
      <MetaInformation
        title={title}
        description={description}
        chononicalUrl={chononicalUrl}
      />
      <WebAppDevelopment />
    </>
  );
}
