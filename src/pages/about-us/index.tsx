import dynamic from "next/dynamic";
import MetaInformation from "@/utils/meta";
import Loading from "@/components/animations/loading";

const AboutUs = dynamic(() => import("@/components/routes/about-us"), {
  loading: () => <Loading />,
});

// deployment testing...

export default function AboutUsPage() {
  return (
    <>
      <MetaInformation
        title="About us - ReindeerSoft"
        description="This page is about all the details related to ReindeerSoft"
      />

      <AboutUs />
    </>
  );
}
