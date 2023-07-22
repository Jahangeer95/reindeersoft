import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import MetaInformation from "@/utils/meta";
import { Spinner } from "react-bootstrap";

const inter = Inter({ subsets: ["latin"] });

const HomeContent = dynamic(() => import("@/components/routes/home"), {
  loading: () => (
    <div
      style={{ height: "70vh", marginTop: "120px" }}
      className="d-flex align-items-center justify-content-center"
    >
      <Spinner variant="primary" animation="border" />
    </div>
  ),
});

export default function Home() {
  return (
    <>
      <MetaInformation
        title="Reindeersoft - A dedicated team of professionals committed to delivering exceptional solutions to our clients. We strive to exceed expectations and build long-lasting partnerships."
        description="This page is about ReindeerSoft"
      />
      <HomeContent />
    </>
  );
}
