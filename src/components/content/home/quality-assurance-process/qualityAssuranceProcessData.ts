import {
  qualityAssuranceProcessArrayType,
  QualityAssuranceProcessDescriptionType,
  QualityAssuranceProcessTitleType,
} from "@/types/qaAndTestAutomation.type";

export const title: QualityAssuranceProcessTitleType =
  "Our Quality assurance Process";

export const description: QualityAssuranceProcessDescriptionType =
  "Our Quality Assurance Process is transparent and offers full traceability throughout all phases.";

export const qualityAssuranceProcessArray: qualityAssuranceProcessArrayType = [
  {
    id: 1,
    heading: "Requirement Analysis",
    list: [
      "Correct understanding of the requirements",
      "Remove ambiguities from the requirements",
      "Raise open questions",
    ],
  },
  {
    id: 2,
    heading: "Test Planning & Strategy",
    list: [
      "Define use cases",
      "Identify testing environment",
      "Define testing matrix",
      "Define testing strategy",
      "Complete test plan",
    ],
  },
  {
    id: 3,
    heading: "Test Plan Review & Approval",
    list: [
      "Internal review of the test plan",
      "Customer review of the test plan",
      "Updates in the test plan as per the feedback",
      "Customer approval on the test plan",
    ],
  },
  {
    id: 4,
    heading: "Test Execution & Bug Reporting",
    list: [
      "Test execution",
      "Bug reporting",
      "Product's release stability tracking",
      "Weekly status sharing with customer",
    ],
  },
  {
    id: 5,
    heading: "Reporting and Final Review",
    list: [
      "Compile report of final testing status",
      "Share the report with customer",
      "Review the report with customer",
    ],
  },
];
