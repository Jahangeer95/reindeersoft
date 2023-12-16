import {
  qualityAssuranceProcessArrayType,
  QualityAssuranceProcessDescriptionType,
  QualityAssuranceProcessTitleType,
} from "@/types/qaAndTestAutomation.type";

export const title: QualityAssuranceProcessTitleType =
  "Engagement and Development Process";

export const description: QualityAssuranceProcessDescriptionType =
  "Our engagement and development process ensures a smooth journey from conceptualization to successful deployment while maintaining communication and adaptability.";

export const qualityAssuranceProcessArray: qualityAssuranceProcessArrayType = [
  {
    id: 1,
    heading: "Discovery & Analysis ",
    list: [
      "In-depth understanding of project requirements.",
      "Identification of goals and challenges.",
      "Tailoring a strategy aligned with your vision.",
    ],
  },
  {
    id: 2,
    heading: "Planning & Design ",
    list: [
      "Collaborative mapping of the project roadmap.",
      "Defining milestones, tasks, and timelines.",
      "Creation of a visual and functional blueprint.",
    ],
  },
  {
    id: 3,
    heading: "Development & Iteration ",
    list: [
      "Skilled developers bring the project to life.",
      "Iterative cycles for continuous improvement.",
      "Regular updates and reviews for transparency.",
    ],
  },
  {
    id: 4,
    heading: "Testing & Quality Assurance ",
    list: [
      "Comprehensive evaluation of functionality.",
      "Rigorous testing for usability and security.",
      "Ensuring industry-standard compliance.",
    ],
  },
  {
    id: 5,
    heading: "Delivery & Support ",
    list: [
      "Project delivery upon perfection.",
      "Post-launch support for ongoing evolution.",
      "Adaptation based on user feedback and needs.",
    ],
  },
];
