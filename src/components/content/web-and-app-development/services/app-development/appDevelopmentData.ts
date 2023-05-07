import {
  AppDevelopmentDescriptionType,
  AppDevelopmentServiceTitleType,
  AppDevelopmentTechnologiesType,
  AppDevelopmentTypeDataType,
} from "@/types/webAndAppDevelopment.type";

export const appDevelopmentTitle: AppDevelopmentServiceTitleType =
  "Mobile Application Development";

export const appDevelopmentDescription: AppDevelopmentDescriptionType = [
  "We specialize in creating custom mobile applications that meet the unique needs of businesses across a variety of industries. Our experienced team of developers has the technical expertise and creative vision to turn your ideas into innovative mobile applications that engage your target audience and drive results for your business.",
  "We develop applications for both iOS and Android platforms, as well as cross-platform development tools such as React Native and Flutter. Our team uses the latest technologies and programming languages to ensure that your app is optimized for performance, scalability, and security.",
  "Whether you're looking to develop a mobile application to streamline your business operations or engage with your customers on a new level, our team has the expertise and experience to deliver exceptional results and help you succeed.",
];

export const appDevelopmentTypeList: AppDevelopmentTypeDataType = [
  {
    title: "Native Mobile Applications",
    description:
      "Native apps are built specifically for a particular mobile operating system, such as iOS or Android, and are installed directly on the device. They often provide the best performance and user experience, but require separate development for each platform.",
  },
  {
    title: "Hybrid Mobile Applications",
    description:
      "Hybrid apps are built using web technologies such as HTML, CSS, and JavaScript, but are wrapped in a native container that allows them to be installed and run like a native app.",
  },
  {
    title: "Cross-Platform Mobile Applications",
    description:
      "Cross-platform mobile applications are apps that can run on multiple operating systems, such as iOS and Android, using a single codebase. They offer the advantage of faster development, lower costs, and wider audience reach.",
  },
];

export const appDevelopmentTechnologies: AppDevelopmentTechnologiesType = [
  {
    heading: "App Development Technologies",
    List: ["Java", "Kotlin", "Swift", "React-Native", "Flutter"],
  },
];
