import dynamic from "next/dynamic";
import MetaInformation from "@/utils/meta";
import Loading from "@/components/animations/loading";

const ContactUs = dynamic(() => import("@/components/routes/contact-us"), {
  loading: () => <Loading />,
});

export default function ContactUsPage() {
  return (
    <>
      <MetaInformation
        title="ReindeerSoft - Contact us"
        description="This page is related to ReindeerSoft contact details"
        chononicalUrl="https://reindeersoft.com/contact-us"
      />

      <ContactUs />
    </>
  );
}
