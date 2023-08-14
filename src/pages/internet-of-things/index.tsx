import dynamic from "next/dynamic";
import Loading from "@/components/animations/loading";
import MetaInformation from "@/utils/meta";

const Iot = dynamic(() => import("@/components/routes/iot"), {
  loading: () => <Loading />,
});

export default function IoTPage() {
  return (
    <>
      <MetaInformation
        title="Internet of Things - ReindeerSoft"
        description="This page is related to the IoT services provided by ReindeerSoft"
      />
      <Iot />
    </>
  );
}
