import React from "react";
import Banner from "./banner";
import DDTServiceOverview from "./ddtServiceOverview";
import DDTBenifits from "./benefits";
import DDTServices from "./ddt-services";
import TeamExtension from "./services/team-extension";

const DedicatedDevelopmentTeam = () => {
  return (
    <>
      <Banner />

      <DDTServiceOverview />

      <DDTBenifits />

      <DDTServices />

      <TeamExtension />
    </>
  );
};

export default DedicatedDevelopmentTeam;
