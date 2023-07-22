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
  "Full Stack Web Application Development";

export const webDevelopmentDescription: WebDevelopmentDescriptionType = [
  "Our full-stack development services harness the power of cutting-edge technologies, backed by years of expertise in MERN and MEAN stack development. With proficiency in frontend technology like React and Angular, and backend technology like Django, NodeJS, and Spring, our team excels in delivering outstanding web applications across diverse industries, including healthcare, finance, e-commerce, education, and more. Whether you need a custom CRM, ERP, CMS, or any tailored solution, we possess the skills and experience to develop a solution that precisely meets your business needs. Our commitment goes beyond development, as we provide ongoing support and maintenance services to ensure your application remains up-to-date and fully functional.",
  "With a passion for innovation, we strive to create fresh and transformative solutions that leverage technology to drive your business success. Experience our exceptional service and support throughout the development process and beyond, and unlock the full potential of your digital presence.",
];

export const websiteTypes: WebDevelopmenttypeOfWebsitesType = [
  {
    title: "Web Portals Development",
    description:
      "A portal is a self contained and independent section of a larger network or system that provides access to various services such as news, information, products etc.",
  },
  {
    title: "E-Commerce Web Development",
    description:
      "A website is a collection of related web pages that are accessible over the internet. It is typically hosted on a web server and can be accessed by users using a web browser. ",
  },
  {
    title: "Social Networking Web Development",
    description:
      "A website is a collection of related web pages that are accessible over the internet. It is typically hosted on a web server and can be accessed by users using a web browser. ",
  },
  {
    title: "Media Streaming Web Development",
    description:
      "A website is a collection of related web pages that are accessible over the internet. It is typically hosted on a web server and can be accessed by users using a web browser. ",
  },
  {
    title: "Learning Management System Website",
    description:
      "A website is a collection of related web pages that are accessible over the internet. It is typically hosted on a web server and can be accessed by users using a web browser. ",
  },
  {
    title: "Content Management System Websites",
    description:
      "A website is a collection of related web pages that are accessible over the internet. It is typically hosted on a web server and can be accessed by users using a web browser. ",
  },
];

export const webDevelopmentTechnologies: WebDevelopmentTechnologiesType[] = [
  {
    heading: "Frontend Technologies",
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
    heading: "Backend Technologies",
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
