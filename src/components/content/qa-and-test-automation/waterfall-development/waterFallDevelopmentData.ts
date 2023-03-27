import {
  waterfallDevelopmentContentType,
  waterfallDevelopmentTitleType,
} from "@/types/qaAndTestAutomation.type";

export const title: waterfallDevelopmentTitleType =
  "Quality Assurance in waterfall development";

export const content: waterfallDevelopmentContentType = {
  paragraph1:
    "In waterfall development, Quality Assurance (QA) is a separate stage of development that comes after the development phase. The QA team is responsible for ensuring that the final software product meets the required quality standards and performs as expected. Here are some ways that QA is typically implemented in waterfall development:",
  list: [
    {
      title: "Requirements Analysis",
      description:
        "In this stage, the requirements for the software are identified and documented. The QA team is involved in reviewing the requirements to ensure that they are clear, complete, and testable.",
    },
    {
      title: "Test Planning",
      description:
        "In this stage, the QA team creates a test plan that outlines the testing strategy, test objectives, and test cases. This plan is used to guide the testing process and ensure that all aspects of the software are tested. ",
    },
    {
      title: "Test Design",
      description:
        "In this stage, the QA team creates detailed test cases and test scripts based on the test plan. These tests are designed to ensure that the software meets the requirements and performs as expected.",
    },
    {
      title: "Test Execution",
      description:
        " In this stage, the software is tested using the test cases and scripts created in the previous stage. Any defects identified during testing are reported, tracked, and fixed.",
    },
    {
      title: "Test Closure",
      description:
        "In this stage, the QA team reviews the test results and prepares a final test report. This report is used to evaluate the quality of the software and determine if it is ready for release. While waterfall development provides a structured approach to software development, it can also lead to longer development cycles and make it difficult to respond to changing requirements.",
    },
  ],
  paragraph2:
    "Agile development, which integrates QA into the development process itself, is becoming increasingly popular as a more flexible and efficient approach to software development.",
};
