import {
  ClientResponsibilityObjectType,
  OurResponsibilityObjectType,
  TeamExtensionDEscriptionType,
  TeamExtensionTitleType,
} from "@/types/dedicatedDevelopmentTeam.type";

export const teamExtensionTitle: TeamExtensionTitleType = "Team Extension";
export const teamExtensionDescription: TeamExtensionDEscriptionType =
  "We understand that building a highly skilled and cohesive software development team is crucial for the success of any project. Our team extension service offers you the flexibility to augment your existing team with our seasoned professionals who seamlessly integrate into your workflow. Whether you need additional expertise for a specific project or want to scale your team for ongoing development needs, our team extension service ensures you have the right talent at the right time. We also guarantee that there are overlapping working hours to promote seamless collaboration and effective project coordination. This collaborative approach not only enhances project efficiency but also accelerates your product's time-to-market, all while maintaining cost-effectiveness. With our team extension service, you get the benefits of an extended team without the complexities of recruitment, allowing you to focus on innovation and achieving your business goals.";

export const ourResponsibilityData: OurResponsibilityObjectType = {
  mainTitle: "Our Responsibility",
  content: [
    {
      title: "Skilled Engineers",
      description:
        "Provide you with qualified engineers who match your project's needs.",
    },
    {
      title: "Resource Support",
      description:
        "Ensure our engineers have all the resources and tools necessary for their roles.",
    },
    {
      title: "Flexible Team",
      description:
        "Offer you the flexibility to adjust the team size according to your project requirements.",
    },
    {
      title: "Overlapping Hours",
      description:
        "Ensure that overlapping working hours are maintained for efficient collaboration.",
    },
  ],
};

export const clientResponsibilityData: ClientResponsibilityObjectType = {
  mainTitle: "Client Responsibility",
  content: [
    {
      title: "Development Planning",
      description:
        "Plan and strategize the development process, defining objectives and goals.",
    },
    {
      title: "Team Management",
      description:
        "Oversee the management of the team, including workload and resource management.",
    },
    {
      title: "Feedback",
      description:
        "Provide timely feedback on our team's performance and communicate any changes or updates in project objectives.",
    },
    {
      title: "Resource Provision",
      description:
        "Provide necessary project resources, access to tools, and data required for our team to work effectively.",
    },
    {
      title: "Scaling Requirements",
      description:
        "Communicate any needs for scaling the team, whether for expansion or reduction.",
    },
  ],
};
