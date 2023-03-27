import images from "../../../../assets/images/qa-and-automation-testing/automation-testing/star1.png";
import automation from "../../../../assets/images/qa-and-automation-testing/automation-testing/automationTesting.jpg";
import {
  AutomatedTestingContentType,
  AutomatedTestingTitleType,
  AutomationImageType,
  AutomationServicesArrayType,
  AutomationServicesDescriptionType,
  AutomationServicesTitleType,
  TechnologiesArrayType,
  TechnologiesTitleType,
} from "@/types/qaAndTestAutomation.type";

export const title: AutomatedTestingTitleType = "Automated Testing";
export const content: AutomatedTestingContentType = {
  paragraph1:
    "Automated testing is the process of using software tools to run pre-scripted tests on a software application or system to ensure it meets the required quality standards. It is an essential part of software development that helps to improve the speed, quality, and accuracy of testing. Here are some of the reasons why automated testing is so important:",
  list: [
    {
      title: "Faster Testing",
      description:
        "Automated testing can execute tests much faster than manual testing, which can help to speed up the development process and reduce the time-to-market.",
    },
    {
      title: "Consistency",
      description:
        "Automated testing ensures that the same tests are run consistently every time, which helps to reduce the risk of human error and increase the accuracy of the testing process.",
    },
    {
      title: "Reusability",
      description:
        "Automated test scripts can be reused across different versions of the software, which can save time, reduce costs, and improve the efficiency of testing.",
    },
    {
      title: "Increased Test Coverage",
      description:
        "Automated testing can cover a wider range of test cases than manual testing, which helps to improve the overall quality of the software and reduce the risk of defects.",
    },
    {
      title: "Scalability",
      description:
        "Automated testing can be easily scaled up or down to meet the changing needs of the project, which makes it a flexible and adaptable testing solution.",
    },
  ],
};

export const automationServicesTitle: AutomationServicesTitleType =
  "Services we are offering in Test Automation";

export const automationServicesDescription: AutomationServicesDescriptionType =
  "We have more than ten years of experience in designing and implementing frameworks for UI and CLI test automation, automating manual procedures, effective use of test automation, and test script maintenance, as well as test integration in CI/CD.";
export const automationServicesdata: AutomationServicesArrayType = [
  {
    image: images,
    title: "Tool Evaluation & Comparison of Tools",
  },
  {
    image: images,
    title: "Framework Design & Implementation",
  },
  {
    image: images,
    title: "Automated Test development",
  },
  {
    image: images,
    title: "Script Development",
  },
  {
    image: images,
    title: "Test Integration in CI/CD",
  },
  {
    image: images,
    title: "Execution and maintenance of test scripts",
  },
  {
    image: images,
    title: "Automated Regression testing",
  },
];

export const techTitle: TechnologiesTitleType = "Technologies";

export const techData: TechnologiesArrayType = [
  {
    title: "Jenkins",
  },
  {
    title: "Git",
  },
  {
    title: "Bash",
  },
  {
    title: "Python",
  },
  {
    title: "Squish",
  },
  {
    title: "Testlink",
  },
  {
    title: "Kivi",
  },
];

export const automationImage: AutomationImageType = automation;
