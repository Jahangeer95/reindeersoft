import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import MetaInformation from "@/utils/meta";
import { HOME_PATHNAME } from "@/constants";
import Loading from "@/components/animations/loading";
import { websiteMetaDeta } from "@/constants/metaData";

const inter = Inter({ subsets: ["latin"] });

const HomeContent = dynamic(() => import("@/components/routes/home"), {
  loading: () => <Loading />,
});

export default function Home() {
  const { title, description, chononicalUrl } = websiteMetaDeta[HOME_PATHNAME];

  return (
    <>
      <MetaInformation
        title={title}
        description={description}
        chononicalUrl={chononicalUrl}
      />
      <HomeContent />
    </>
  );
}
