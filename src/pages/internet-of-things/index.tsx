import dynamic from "next/dynamic";
import Loading from "@/components/animations/loading";
import MetaInformation from "@/utils/meta";
import { websiteMetaDeta } from "@/constants/metaData";
import { INTERNET_OF_THINGS_PATHNAME } from "@/constants";

const Iot = dynamic(() => import("@/components/routes/iot"), {
  loading: () => <Loading />,
});

export default function IoTPage() {
  const { title, description, chononicalUrl } =
    websiteMetaDeta[INTERNET_OF_THINGS_PATHNAME];

  return (
    <>
      <MetaInformation
        title={title}
        description={description}
        chononicalUrl={chononicalUrl}
      />
      <Iot />
    </>
  );
}
