import {
  ClientResponsibilityObjectType,
  DedicatedTeamDEscriptionType,
  DedicatedTeamTitleType,
  OurResponsibilityObjectType,
} from "@/types/dedicatedDevelopmentTeam.type";

export const teamExtensionTitle: DedicatedTeamTitleType = "Dedicated Team ";
export const teamExtensionDescription: DedicatedTeamDEscriptionType =
  "Our Dedicated Team service provides you with an entire team of highly skilled professionals, carefully selected to align with your project's unique requirements and vision. This model empowers you to concentrate solely on strategic decisions, while our experienced developers, designers, and project managers handle the execution and technical aspects. Whether you need to expand or reduce your team, we are here to accommodate your needs, allowing you to focus on innovation and achieving your business objectives. Our Dedicated Team ensures that your project thrives, consistently delivering exceptional results while you retain full control and oversight. With our Dedicated Development Team service, you can expect expertise, flexibility, and a collaborative partnership that drives your projects to success.";

export const ourResponsibilityData: OurResponsibilityObjectType = {
  mainTitle: "Our Responsibility ",
  content: [
    {
      title: "Team Composition ",
      description:
        "Assemble a development team tailored to your project's specific requirements.",
    },
    {
      title: "Knowledge Management ",
      description:
        "Oversee knowledge transfer, day-to-day development activities, and internal communication within the team.",
    },
    {
      title: "Performance Monitoring ",
      description:
        "Monitor the progress and performance of our team members, providing regular updates and feedback.",
    },
    {
      title: "Overlapping Hours ",
      description:
        "Ensure that overlapping working hours are maintained for efficient collaboration.",
    },
    {
      title: "Scalability Support ",
      description:
        "Provide reporting and accommodate any needs related to scaling the team, whether expanding or reducing its size.",
    },
  ],
};

export const clientResponsibilityData: ClientResponsibilityObjectType = {
  mainTitle: "Client Responsibility ",
  content: [
    {
      title: "Project Vision ",
      description:
        "Offer a clear project vision, along with necessary documentation and requirements.",
    },
    {
      title: "Communication Management ",
      description:
        "Receive reports and manage communication with the dedicated development team.",
    },
    {
      title: "Feedback ",
      description:
        "Offer timely feedback on our team's performance and communicate any changes or updates in project objectives.",
    },
    {
      title: "Business Focus ",
      description:
        "Concentrate on the business and product aspects, leaving the technical side to the dedicated development team.",
    },
  ],
};
