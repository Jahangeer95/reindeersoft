import MetaInformation from "@/utils/meta";
import ContactUs from "@/components/routes/contact-us";

export default function ContactUsPage() {
  return (
    <>
      <MetaInformation
        title="ReindeerSoft - Contact us"
        description="This page is related to ReindeerSoft contact details"
      />

      <ContactUs />
    </>
  );
}
