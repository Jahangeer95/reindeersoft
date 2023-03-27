import {
  AgileDevelopmentContentType,
  AgileDevelopmentTitleType,
} from "@/types/qaAndTestAutomation.type";

export const title: AgileDevelopmentTitleType =
  "Quality Assurance in agile development";
export const agileContent: AgileDevelopmentContentType = {
  paragraph1:
    "Quality Assurance (QA) is an important aspect of software development that ensures that the final software product is of high quality and meets the required standards. In agile development, QA is integrated into the development process itself, rather than being a separate stage of development. Here are some ways that QA is integrated into Agile Development:",
  list: [
    {
      title: "Continuous Testing",
      description:
        "Agile development emphasizes continuous testing throughout the development process, rather than waiting until the end of development to test the software. This helps to identify issues early on, when they are easier and less expensive to fix. ",
    },
    {
      title: "Test-Driven Development (TDD)",
      description:
        " TDD is a development approach that emphasizes writing tests before writing code. This helps to ensure that the code meets the requirements and that any issues are identified early on.",
    },
    {
      title: "Automation",
      description:
        " Automation is used extensively in agile development to help speed up testing and ensure that the software product is of high quality. This includes automated test scripts, continuous integration, and continuous delivery. ",
    },
    {
      title: " Collaboration",
      description:
        "Agile development emphasizes collaboration between different teams and stakeholders, including developers, testers, and customers. This helps to ensure that everyone is on the same page and that the software product meets the requirements.",
    },
    {
      title: "Continuous Improvement",
      description:
        " Agile development is an iterative process that emphasizes continuous improvement. This includes continuous testing and feedback, as well as regular retrospectives to identify areas for improvement. By integrating QA into the development process itself, agile development helps to ensure that the final software product is of high quality and meets the required standards.",
    },
  ],
};
