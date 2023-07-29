import {
  waterfallDevelopmentContentType,
  waterfallDevelopmentTitleType,
} from "@/types/qaAndTestAutomation.type";

export const title: waterfallDevelopmentTitleType =
  "Quality Assurance in waterfall software development";

export const content: waterfallDevelopmentContentType = {
  paragraph1:
    "The waterfall software development model represents a structured breakdown of project activities into linear sequential phases, where each phase is dependent on the deliverables of the previous one. This approach corresponds to specialized tasks for each phase and follows a top-down flow of development. In the context of waterfall development, Quality Assurance (QA) is a distinct and crucial stage that follows the development phase. The primary responsibility of the QA team is to ensure that the final software product meets the required quality standards and performs as expected. Here are some key ways in which QA is typically implemented in the waterfall development model:",
  list: [
    {
      title: "Requirements Analysis",
      description:
        "During this stage, the software requirements are identified and documented before proceeding with the development phase. The QA team plays a crucial role in reviewing these requirements to ensure their clarity, completeness, and testability.",
    },
    {
      title: "Test Planning",
      description:
        " In this stage, the QA team creates comprehensive test plans based on the finalized requirements and design specifications. These detailed test plans outline the testing objectives, scope, strategies, and acceptance criteria for each phase of the development lifecycle. Test plans ensure that functional testing, integration testing, system testing and performance testing are thoroughly covered for the software.",
    },
    {
      title: "Test Development",
      description:
        "In this stage, the QA team creates detailed test cases and test scripts, aligning them with the test plan. These tests are strategically designed to verify that the software meets all specified requirements and performs flawlessly as expected.",
    },
    {
      title: "Test Execution",
      description:
        "In this stage, the software undergoes rigorous testing using the previously created test cases and scripts. Any identified defects are promptly reported, tracked, and meticulously fixed to ensure the software's optimal performance and reliability. The QA team collaborates with the development team to address and resolve these issues promptly.",
    },
    {
      title: "Final Validation",
      description:
        "Before deployment, the QA team performs final validation and acceptance testing to ensure that the software is ready for production use and aligns with customer expectations.",
    },
  ],
};
