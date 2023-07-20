import {
  CrossPLateformAppDevelopmentTechnologiesType,
  CrossPlateformAppDevelopmentDescriptionType,
  CrossPlateformAppDevelopmentServiceTitleType,
} from "@/types/webAndAppDevelopment.type";

import java from "@/assets/images/web-and-app-development/cross-plateform-app/java.png";
import kotline from "@/assets/images/web-and-app-development/cross-plateform-app/kotline.png";
import swift from "@/assets/images/web-and-app-development/cross-plateform-app/swift.png";
import flutter from "@/assets/images/web-and-app-development/cross-plateform-app/flutter.png";
import reactNative from "@/assets/images/web-and-app-development/cross-plateform-app/react-native.png";

export const crossPlateformAppDevelopmentTitle: CrossPlateformAppDevelopmentServiceTitleType =
  "Cross Platform Mobile Application Development";

export const crossPlateformAppDevelopmentDescription: CrossPlateformAppDevelopmentDescriptionType =
  [
    "Cross-platform mobile applications are designed to run on multiple operating systems, such as iOS and Android, using a single codebase. They offer several advantages, including faster development, lower costs, and broader audience reach. We specialize in developing applications for both iOS and Android platforms using leading cross-platform development tools such as React Native and Flutter.",
    "Our team stays up to date with the latest technologies and programming languages to ensure that your app is optimized for performance, scalability, and security. Whether you're seeking to streamline your business operations or engage with your customers on a new level, our experienced team has the expertise and experience to deliver exceptional results and help you succeed.",
  ];

export const crossPLateformAppDevelopmentTechnologies: CrossPLateformAppDevelopmentTechnologiesType[] =
  [
    {
      heading: "Frontend Technologies",
      List: [
        {
          alt: "Java",
          icon: java,
        },
        {
          alt: "Kotline",
          icon: kotline,
        },
        {
          alt: "Swift",
          icon: swift,
        },
        {
          alt: "Flutter",
          icon: flutter,
        },
        {
          alt: "React-Native",
          icon: reactNative,
        },
      ],
    },
  ];
