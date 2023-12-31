import {
  NativeAppDevelopmentTechnologiesType,
  NativeMobileAppDevelopmentContentType,
  NativeMobileAppDevelopmentTitleType,
} from "@/types/webAndAppDevelopment.type";
import ios from "@/assets/images/web-and-app-development/native-mobile-app/apple.png";
import android from "@/assets/images/web-and-app-development/native-mobile-app/android.png";

export const title: NativeMobileAppDevelopmentTitleType =
  "Native Mobile App Development";
export const contentArray: NativeMobileAppDevelopmentContentType = [
  "Native Mobile Apps are specifically designed for a particular mobile operating system, such as iOS and Android. Due to their dedicated development for each platform, native apps offer superior performance and user experience, making them the preferred choice for businesses seeking optimal results. We specialize in creating customized mobile applications that cater to the unique needs of businesses across diverse industries.",
  "With our team's technical expertise and creative vision, we can transform your ideas into innovative mobile apps that captivate your target audience and drive tangible results. Leveraging the latest technologies and programming languages, we develop high-performing applications for both iOS and Android platforms, ensuring optimized performance, scalability, and security. ",
];

export const nativeMobileApplicationsTechnologies: NativeAppDevelopmentTechnologiesType[] =
  [
    {
      heading: "Native Mobile App",
      List: [
        {
          alt: "Android ",
          icon: android,
        },
        {
          alt: "IOS ",
          icon: ios,
        },
      ],
    },
  ];
