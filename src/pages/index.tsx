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
        title="Reindeersoft"
        description="A dedicated team of professionals committed to delivering exceptional solutions to our clients. We strive to exceed expectations and build long-lasting partnerships."
      />
      <HomeContent />
    </>
  );
}
