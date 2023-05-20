import slide1 from "@/assets/images/homeSlider/slide1.jpg";
import slide2 from "@/assets/images/homeSlider/slide2.jpg";
import slide3 from "@/assets/images/homeSlider/slide3.jpg";
import slide4 from "@/assets/images/homeSlider/automation-testing1.png";
import slide5 from "@/assets/images/homeSlider/slide4.jpg";
import { homeBannerArrayTypes } from "@/types/home.type";
import * as webAndAppDevelopment from "../../web-and-app-development/banner/bannerData";
import * as cloudApplicationAndDevelopment from "../../cloud-application-development/banner/bannerData";
import * as qaAndTestAutomation from "../../qa-and-test-automation/banner/bannerData";
import * as roboticsAndAutonomy from "../../robotics-and-autonomy/banner/bannerData";
import * as iot from "../../iot/banner/bannerData";

export const homeBannerArray: homeBannerArrayTypes = [
  {
    bannerImage: slide1,
    heading: "Web and App Development",
    description: webAndAppDevelopment.description,
    list: webAndAppDevelopment.list,
  },
  {
    bannerImage: slide2,
    heading: "Dedicated Development Team",
    description: webAndAppDevelopment.description,
    list: webAndAppDevelopment.list,
  },
  {
    bannerImage: slide3,
    heading: "Robotics and Autonomy",
    description: roboticsAndAutonomy.description,
    list: roboticsAndAutonomy.list,
  },
  {
    bannerImage: slide4,
    heading: "QA and Test Automation",
    description: qaAndTestAutomation.description,
    list: qaAndTestAutomation.list,
  },
  // {
  //   bannerImage: slide5,
  //   heading: "Business Automation",
  //   paragraph: [
  //     "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  //     "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  //   ],
  // },
  {
    bannerImage: slide5,
    heading: "Cloud Application Development",
    description: cloudApplicationAndDevelopment.description,
    list: cloudApplicationAndDevelopment.list,
  },
  {
    bannerImage: slide5,
    heading: "Internet of Things",
    description: iot.description,
    list: iot.list,
  },
];
