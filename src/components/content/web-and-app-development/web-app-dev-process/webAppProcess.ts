import {
  WebAppDevProcessArrayType,
  WebAppDevProcessDescriptionType,
  WebAppDevProcessTitleType,
} from "@/types/webAndAppDevelopment.type";

export const title: WebAppDevProcessTitleType =
  "Web And App Development Process";

export const description: WebAppDevProcessDescriptionType =
  "Our company specializes in web and app development services that are tailored to meet the unique needs of each of our clients. We offer a full range of development services, from initial concept and planning, to design, development, testing, and deployment. ";

export const qualityAssuranceProcessArray: WebAppDevProcessArrayType = [
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
    heading: "UX/UI Design",
    list: [
      "Thorough Research",
      "Focus on Content",
      "Define testing matrix",
      "Define testing strategy",
      "Complete test plan",
    ],
  },
  {
    id: 3,
    heading: "Design Review & Approval",
    list: [
      "Internal review of the test plan",
      "Customer review of the test plan",
      "Updates in the test plan as per the feedback",
      "Customer approval on the test plan",
    ],
  },
  {
    id: 4,
    heading: "Coding & Development",
    list: [
      "Test execution",
      "Bug reporting",
      "Product's release stability tracking",
      "Weekly status sharing with customer",
    ],
  },
  {
    id: 5,
    heading: "Testing & Deployment",
    list: [
      "Compile report of final testing status",
      "Share the report with customer",
      "Review the report with customer",
    ],
  },
];
