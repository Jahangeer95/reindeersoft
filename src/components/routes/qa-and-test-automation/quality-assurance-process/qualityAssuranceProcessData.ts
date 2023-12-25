import {
  qualityAssuranceProcessArrayType,
  QualityAssuranceProcessDescriptionType,
  QualityAssuranceProcessTitleType,
} from "@/types/qaAndTestAutomation.type";

export const title: QualityAssuranceProcessTitleType =
  "Quality assurance Process ";

export const description: QualityAssuranceProcessDescriptionType =
  "Our Quality Assurance Process is characterized by transparency and meticulous traceability at every phase, ensuring that each step is well-documented and easily traceable for thorough evaluation and accountability.";

export const qualityAssuranceProcessArray: qualityAssuranceProcessArrayType = [
  {
    id: 1,
    heading: "Requirement Analysis ",
    list: [
      "Correct understanding of the requirements",
      "Remove ambiguities from the requirements",
      "Raise open questions",
    ],
  },
  {
    id: 2,
    heading: "Test Planning & Strategy ",
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
    heading: "Test Plan Review & Approval ",
    list: [
      "Internal review of the test plan",
      "Client review of the test plan",
      "Updates in the test plan as per the feedback",
      "Client approval on the test plan",
    ],
  },
  {
    id: 4,
    heading: "Test Execution & Bug Reporting ",
    list: [
      "Test execution",
      "Bug reporting",
      "Product's release stability tracking",
      "Weekly status sharing with client",
    ],
  },
  {
    id: 5,
    heading: "Reporting and Final Review ",
    list: [
      "Compile report of final testing status",
      "Share the report with client",
      "Review the report with client",
    ],
  },
];
