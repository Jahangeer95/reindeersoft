import functionalTesting from "@/assets/images/qa-and-automation-testing/unique-testing/functional-testing.jpg";
import performanceTesting from "@/assets/images/qa-and-automation-testing/unique-testing/performance-testing.jpg";
import securityTesting from "@/assets/images/qa-and-automation-testing/unique-testing/security-testing.jpg";
import usabilityTesting from "@/assets/images/qa-and-automation-testing/unique-testing/usability-testing.jpg";
import compatibilityTesting from "@/assets/images/qa-and-automation-testing/unique-testing/compatibility-testing.jpg";
import mobileAppTesting from "@/assets/images/qa-and-automation-testing/unique-testing/mobileApp-testing.jpg";
import {
  UniqueTestingArrType,
  UniqueTestingTitleType,
} from "@/types/qaAndTestAutomation.type";

export const title: UniqueTestingTitleType = "Testing Service ";
export const UniqueTestingArr: UniqueTestingArrType = [
  {
    image: functionalTesting,
    title: "Functional Testing ",
    description:
      "Functional testing examines the application or system's functionality against the intended requirements. By scrutinizing the external behavior of the software, this testing method promptly identifies defects in the development cycle, thereby enhancing overall quality and user experience, and ensuring that the software meets essential standards and safety requirements. By detecting and resolving issues early on, functional testing substantially reduces the cost and time needed for rectifications in later stages of development.",
  },
  {
    image: performanceTesting,
    title: "Performance Testing ",
    description:
      "Performance testing measures the speed, stability, and scalability of an application or system across various workloads. It simulates real-world scenarios to identify performance bottlenecks, such as slow response times, high resource utilization, and system crashes. It helps to optimize system performance, enhance user experience, and ensure system reliability and stability under heavy loads. It plays a vital role in verifying the system's capacity to handle anticipated loads and scale for future demands.",
  },
  {
    image: securityTesting,
    title: "Security Testing ",
    description:
      "Security testing uncovers vulnerabilities and weaknesses in an application or system, making it resilient against unauthorized access and potential exploits.  It checks the system's ability to protect data, prevent unauthorized access, and maintain confidentiality, integrity, and availability of information. It helps to ensure compliance with regulatory requirements and protect against potential security breaches that can result in financial loss, reputational damage, and legal consequences. Comprehensive security testing includes techniques like penetration testing, vulnerability scanning, and risk assessment.",
  },
  {
    image: usabilityTesting,
    title: "Usability Testing ",
    description:
      "Usability testing assesses the user-friendliness and ease of use of an application or system. It evaluates the system's ability to meet user requirements, expectations, and preferences. It helps to identify user interface issues, usability problems, and design flaws that can hinder user experience and reduce productivity.  Usability testing employs diverse techniques, including user surveys, interviews, and task-based evaluations, to enhance the overall user experience.",
  },
  {
    image: compatibilityTesting,
    title: "Compatibility Testing ",
    description:
      "Compatibility testing examines an application or system's behavior across various platforms, devices, operating systems, and browsers. It ensures that the system works seamlessly in diverse environments and configurations. It also helps to identify compatibility issues, such as software conflicts, hardware limitations, and interoperability problems, that can affect the system's performance and user experience. Compatibility testing employs multiple techniques such as cross-browser testing, cross-device testing, and cross-platform testing.",
  },
  {
    image: mobileAppTesting,
    title: "Mobile Application Testing ",
    description:
      "Mobile application testing examines the functionality, usability, and performance of a mobile application across multiple devices, operating systems, and network conditions. It ensures the app meets user requirements, functions as expected, and delivers a seamless user experience. It helps to identify defects, errors, and performance issues that can affect the application's quality and enhance user satisfaction. Mobile application testing involves various techniques such as functional testing, usability testing, performance testing, and security testing.",
  },
];
