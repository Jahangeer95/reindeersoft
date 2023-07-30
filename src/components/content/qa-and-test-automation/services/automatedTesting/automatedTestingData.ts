import images from "@/assets/images/qa-and-automation-testing/automation-testing/star1.png";
import automation from "@/assets/images/qa-and-automation-testing/automation-testing/automationTesting.jpg";
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

export const title: AutomatedTestingTitleType =
  "Test automation & CI/CD Integration";
export const content: AutomatedTestingContentType = {
  paragraph1:
    "Automated testing utilizes software tools to execute pre-scripted tests on a software application or system, ensuring compliance with required quality standards. It holds immense significance in software development, bolstering testing speed, precision, and overall quality. The importance of automated testing stems from its ability to streamline repetitive tasks, achieve consistent test execution, and broaden test coverage. Moreover, it expedites regression testing, proves cost-effective over time, seamlessly integrates with Continuous Integration / Continuous Delivery (CI/CD) pipelines, and scales efficiently to handle complex projects. Some compelling reasons for automated testing are given below:",
  list: [
    {
      title: "Efficiency and Speed",
    },
    {
      title: "Scalability",
    },
    {
      title: "Cost-Effectiveness",
    },
    {
      title: "Consistent Test Results",
    },
    {
      title: "Broader Test Coverage",
    },
    {
      title: "Regression Testing",
    },
    {
      title: "Continuous Integration and Continuous Delivery (CI/CD)",
    },
  ],
};

export const automationServicesTitle: AutomationServicesTitleType =
  "Services Offering in Test Automation";

export const automationServicesDescription: AutomationServicesDescriptionType =
  "We possess over a decade of experience in designing and implementing frameworks for User Interface (UI) and Command Line Interface (CLI) test automation, automating manual procedures, optimizing test automation practices, and maintaining test scripts. Additionally, we excel in seamlessly integrating testing into CI/CD pipelines.";
export const automationServicesdata: AutomationServicesArrayType = [
  {
    image: images,
    title: "Off the Shelf Tools Evaluation & Comparison",
  },
  {
    image: images,
    title: "Custom Test Framework Design & Implementation",
  },
  {
    image: images,
    title: "Workflow Script Development",
  },
  {
    image: images,
    title: "Automated Test Development & Regression Testing",
  },
  {
    image: images,
    title: "Test Integration In CI/CD",
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
