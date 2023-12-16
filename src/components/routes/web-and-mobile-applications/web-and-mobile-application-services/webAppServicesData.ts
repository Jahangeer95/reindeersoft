import fullStackDevelopment from "@/assets/images/web-and-app-development/web-mobile-services/full-stack.png";
import crossAppDevelopment from "@/assets/images/web-and-app-development/web-mobile-services/cross-plateform.png";
import integratedAppDevelopment from "@/assets/images/web-and-app-development/web-mobile-services/integrated-app.png";
import nativeAppDevelopment from "@/assets/images/web-and-app-development/web-mobile-services/native-app.png";
import {
  WebAppServicesArrayType,
  WebAppServicesTitleType,
} from "@/types/webAndAppDevelopment.type";

export const title: WebAppServicesTitleType =
  "Application Development Services";
export const WebMobileServicesArray: WebAppServicesArrayType = [
  {
    id: "web-app-one",
    value: "Full Stack Web Development",
    image: fullStackDevelopment,
  },
  {
    id: "web-app-two",
    value: "Native Mobile App Development",
    image: nativeAppDevelopment,
  },
  {
    id: "web-app-three",
    value: "Cross Platform Mobile App Development",
    image: crossAppDevelopment,
  },
  {
    id: "web-app-four",
    value: "Integrated Web-Mobile App Development",
    image: integratedAppDevelopment,
  },
];
