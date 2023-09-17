import React from "react";
import Banner from "./banner";
import DDTServiceOverview from "./ddtServiceOverview";
import DDTBenifits from "./benefits";
import DDTServices from "./ddt-services";
import TeamExtension from "./services/team-extension";
import DedicatedTeam from "./services/dedicated-team";
import ContactUsSection from "@/components/custom/contactUsSection";

const DedicatedDevelopmentTeam = () => {
  return (
    <>
      <Banner />

      <DDTServiceOverview />

      <DDTBenifits />

      <DDTServices />

      <TeamExtension />

      <DedicatedTeam />

      <ContactUsSection />
    </>
  );
};

export default DedicatedDevelopmentTeam;
