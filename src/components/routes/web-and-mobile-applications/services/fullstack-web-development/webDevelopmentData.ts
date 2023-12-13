import {
  WebDevelopmentDescriptionType,
  WebDevelopmentServiceTitleType,
  WebDevelopmentTechnologiesType,
  WebDevelopmenttypeOfWebsitesType,
} from "@/types/webAndAppDevelopment.type";

// ------------Frotend icons-----------//
import html from "@/assets/images/web-and-app-development/full-stack-web/html.png";
import css from "@/assets/images/web-and-app-development/full-stack-web/css.png";
import javascript from "@/assets/images/web-and-app-development/full-stack-web/javascript.png";
import react from "@/assets/images/web-and-app-development/full-stack-web/react.png";
import next from "@/assets/images/web-and-app-development/full-stack-web/nextjs.png";
import angular from "@/assets/images/web-and-app-development/full-stack-web/angular.png";
import vue from "@/assets/images/web-and-app-development/full-stack-web/vue.png";
// ------------Frontend icons-----------//

// ------------Backend icons-----------//
import java from "@/assets/images/web-and-app-development/full-stack-web/java.png";
import python from "@/assets/images/web-and-app-development/full-stack-web/python.png";
import node from "@/assets/images/web-and-app-development/full-stack-web/node.png";
import django from "@/assets/images/web-and-app-development/full-stack-web/django.png";
import flask from "@/assets/images/web-and-app-development/full-stack-web/flask.png";
import spring from "@/assets/images/web-and-app-development/full-stack-web/spring.png";

// ------------Backend icons-----------//
export const webDevelopmentTitle: WebDevelopmentServiceTitleType =
  "Full Stack Web Development";

export const webDevelopmentDescription: WebDevelopmentDescriptionType = [
  "Our full-stack development services harness the power of cutting-edge technologies, backed by years of expertise in MERN and MEAN stack development. With proficiency in frontend technology like React and Angular, and backend technology like Django, NodeJS, and Spring, our team excels in delivering outstanding web applications across diverse industries, including healthcare, finance, e-commerce, education, and more. Whether you need a custom CRM, ERP, CMS, or any tailored solution, we possess the skills and experience to develop a solution that precisely meets your business needs. Our commitment goes beyond development, as we provide ongoing support and maintenance services to ensure your application remains up-to-date and fully functional.",
  "With a passion for innovation, we strive to create fresh and transformative solutions that leverage technology to drive your business success. Experience our exceptional service and support throughout the development process and beyond, and unlock the full potential of your digital presence.",
];

export const websiteTypes: WebDevelopmenttypeOfWebsitesType = [
  {
    title: "Web Portals Development",
    description:
      "Web portals are powerful platforms that serve as gateways to information, services, and resources. It enables businesses to create user-friendly and intuitive interfaces that connect users to relevant content and services.",
  },
  {
    title: "E-Commerce Web Development",
    description:
      " E-Commerce web service empowers businesses to create captivating online stores that deliver exceptional shopping experiences to customers. ",
  },
  {
    title: "Social Networking Web Development",
    description:
      "Social networking platforms connect like-minded individuals, enable seamless content sharing, and facilitate real-time interactions with a focus on user experience and privacy.",
  },
  {
    title: "Media Streaming Web Development",
    description:
      "In the era of digital media consumption, Media Streaming Web service enables businesses to provide immersive and seamless video streaming experiences to their audience.",
  },
  {
    title: "Learning Management System Website",
    description:
      "Learning Management System (LMS) Website service offers businesses and educational institutions the opportunity to create interactive and engaging online learning platforms.",
  },
  {
    title: "Content Management System Website",
    description:
      " Content Management System (CMS) Websites service enables businesses to easily update, edit, and publish content without technical expertise. ",
  },
];

export const webDevelopmentTechnologies: WebDevelopmentTechnologiesType[] = [
  {
    heading: "Front-End Web Development Technologies",
    List: [
      {
        alt: "HTML",
        icon: html,
      },
      {
        alt: "CSS",
        icon: css,
      },
      {
        alt: "JavaScript",
        icon: javascript,
      },
      {
        alt: "React",
        icon: react,
      },
      {
        alt: "Next",
        icon: next,
      },
      {
        alt: "Angular",
        icon: angular,
      },
      {
        alt: "Vue",
        icon: vue,
      },
    ],
  },
  {
    heading: "Back-End Web Development Technologies",
    List: [
      {
        alt: "JavaScript",
        icon: javascript,
      },
      {
        alt: "Java",
        icon: java,
      },
      {
        alt: "Python",
        icon: python,
      },
      {
        alt: "Node",
        icon: node,
      },
      {
        alt: "Django",
        icon: django,
      },
      {
        alt: "Flask",
        icon: flask,
      },
      {
        alt: "Spring",
        icon: spring,
      },
    ],
  },
];
