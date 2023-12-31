import waterfall from "@/assets/images/qa-and-automation-testing/qa-services/waterFall.png";
import manualTesting from "@/assets/images/qa-and-automation-testing/qa-services/manual-testing.png";
import consultancy from "@/assets/images/qa-and-automation-testing/qa-services/consultancy.png";
import automationTesting from "@/assets/images/qa-and-automation-testing/qa-services/automation-testing.png";
import agile from "@/assets/images/qa-and-automation-testing/qa-services/agile.png";

import {
  QaServicesArrayType,
  QaServicesTitleType,
} from "@/types/qaAndTestAutomation.type";

export const title: QaServicesTitleType = "Quality Assurance Services ";
export const qaServicesArray: QaServicesArrayType = [
  {
    id: "one",
    value: "Quality Assurance in Waterfall Software Development ",
    image: waterfall,
  },
  {
    id: "two",
    value: "Quality Assurance in Agile Software Development ",
    image: agile,
  },
  {
    id: "three",
    value: "Testing Service ",
    image: manualTesting,
  },
  {
    id: "four",
    value: "Test Automation & CI/CD Integration ",
    image: automationTesting,
  },
  {
    id: "five",
    value: "Consultancy & Training ",
    image: consultancy,
  },
];
