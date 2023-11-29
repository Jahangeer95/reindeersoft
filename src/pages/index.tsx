import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import MetaInformation from "@/utils/meta";
import Loading from "@/components/animations/loading";

const inter = Inter({ subsets: ["latin"] });

const HomeContent = dynamic(() => import("@/components/routes/home"), {
  loading: () => <Loading />,
});

export default function Home() {
  return (
    <>
      <MetaInformation
        title="IT Services | Digital Solutions - ReindeerSoft"
        description="A dedicated team of professionals committed to delivering exceptional IT services and digital solutions. Explore excellence in technology with us."
        chononicalUrl="https://reindeersoft.com/"
      />
      <HomeContent />
    </>
  );
}
