import teamExtension from "@/assets/images/dedicated-development-team/dedicated-team-development-services/team-extension.png";
import dedicatedTeam from "@/assets/images/dedicated-development-team/dedicated-team-development-services/dedicated-development-team.png";

import {
  DDTServicesTitleType,
  DDtServicesArrayType,
} from "@/types/dedicatedDevelopmentTeam.type";

export const title: DDTServicesTitleType =
  "Dedicated Development Team Services";
export const qaServicesArray: DDtServicesArrayType = [
  {
    id: "one",
    value: "Team Extension",
    image: teamExtension,
  },
  {
    id: "two",
    value: "Dedicated Team",
    image: dedicatedTeam,
  },
];
