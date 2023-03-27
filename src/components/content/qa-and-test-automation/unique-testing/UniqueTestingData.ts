import functionalTesting from "@/assets/images/qa-and-automation-testing/unique-testing/functional-testing.png";
import performanceTesting from "@/assets/images/qa-and-automation-testing/unique-testing/performance-testing.png";
import securityTesting from "@/assets/images/qa-and-automation-testing/unique-testing/security-testing.png";
import usabilityTesting from "@/assets/images/qa-and-automation-testing/unique-testing/usability-testing.png";
import compatibilityTesting from "@/assets/images/qa-and-automation-testing/unique-testing/compatibility-testing.png";
import mobileAppTesting from "@/assets/images/qa-and-automation-testing/unique-testing/mobileApp-testing.png";
import {
  UniqueTestingArrType,
  UniqueTestingTitleType,
} from "@/types/qaAndTestAutomation.type";

export const title: UniqueTestingTitleType = "Unique Testing Offering";
export const UniqueTestingArr: UniqueTestingArrType = [
  {
    image: functionalTesting,
    title: "Functional Testing",
    description:
      "Functional testing is a type of software testing that verifies the functionality of an application or system against intended requirements. It checks the external behavior of the software and identifies defects or bugs early in the development cycle, improving quality and user experience. It is crucial for compliance and regulatory purposes, ensuring the software meets required standards and is safe for use. Functional testing reduces the cost and time required to fix defects later in the development cycle.",
  },
  {
    image: performanceTesting,
    title: "Pereformance Testing",
    description:
      "Performance testing is a type of software testing that measures the speed, stability, and scalability of an application or system under different workloads. It simulates real-world scenarios to identify performance bottlenecks, such as slow response times, high resource utilization, and system crashes. It helps to optimize system performance, enhance user experience, and ensure system reliability and stability under heavy loads. Performance testing is essential for ensuring that the system can handle the expected load and scale to meet future requirements.",
  },
  {
    image: securityTesting,
    title: "Security Testing",
    description:
      "Security testing is a type of software testing that identifies vulnerabilities and weaknesses in an application or system that can be exploited by unauthorized users. It checks the system's ability to protect data, prevent unauthorized access, and maintain confidentiality, integrity, and availability of information. It helps to ensure compliance with regulatory requirements and protect against potential security breaches that can result in financial loss, damage to reputation, and legal liabilities. Security testing includes various techniques such as penetration testing, vulnerability scanning, and risk assessment.",
  },
  {
    image: usabilityTesting,
    title: "Usability Testing",
    description:
      "Usability testing is a type of software testing that measures the ease of use and user-friendliness of an application or system. It evaluates the system's ability to meet user requirements, expectations, and preferences. It helps to identify user interface issues, usability problems, and design flaws that can hinder user experience and reduce productivity. Usability testing involves various techniques such as user surveys, user interviews, and task-based evaluations to improve the overall user experience.",
  },
  {
    image: compatibilityTesting,
    title: "Compatibility Testing",
    description:
      "Compatibility testing is a type of software testing that checks the behavior of an application or system across different platforms, devices, operating systems, and browsers. It ensures that the system functions as expected even in diverse environments and configurations. It helps to identify compatibility issues, such as software conflicts, hardware limitations, and interoperability problems, that can affect the system's performance and user experience. Compatibility testing involves various techniques such as cross-browser testing, cross-device testing, and cross-platform testing.",
  },
  {
    image: mobileAppTesting,
    title: "Mobile App Testing",
    description:
      "Mobile app testing is a type of software testing that checks the functionality, usability, and performance of a mobile application across different devices, operating systems, and network conditions. It ensures that the app meets user requirements, works as expected, and provides a seamless user experience. It helps to identify defects, errors, and performance issues that can affect the app's quality and user satisfaction. Mobile app testing involves various techniques such as functional testing, usability testing, performance testing, and security testing.",
  },
];
