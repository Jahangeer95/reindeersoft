import {
  WebDevelopmentDescriptionType,
  WebDevelopmentServiceTitleType,
  WebDevelopmentTechnologiesType,
  WebDevelopmentTypeDataType,
} from "@/types/webAndAppDevelopment.type";

export const webDevelopmentTitle: WebDevelopmentServiceTitleType =
  "Web Application Development";

export const webDevelopmentDescription: WebDevelopmentDescriptionType = [
  "We are a team of experienced developers who specialize in building custom web applications that solve complex business challenges and drive growth. Our web application development services cover the full cycle of application development, from ideation and design to development, testing, and deployment. We use the latest technologies and programming languages to ensure that your web application is scalable, secure, and optimized for performance.",
  "We specialize in developing web applications for a variety of industries, including healthcare, finance, e-commerce, education, and more. Whether you need a custom CRM, ERP, or CMS system, our team has the expertise and experience to deliver a solution that meets your specific business needs. We also offer ongoing support and maintenance services to ensure that your application remains up-to-date and functional. We are committed to providing our clients with exceptional service and support throughout the development process and beyond.",
  "We love coming up with fresh solutions that really make the technology work hard and help your business succeed.",
];

export const webDevelopmentTypeList: WebDevelopmentTypeDataType = [
  {
    title: "Content Management System",
    description:
      "CMS platforms are designed to create, manage, and publish digital content. They are often used for websites that require frequent updates, such as blogs or news sites.",
  },
  {
    title: "Ecommerce Web Development",
    description:
      "E-commerce websites are designed to sell products or services online. They typically include features such as product listings, shopping carts, and payment processing.",
  },
  {
    title: "Ecommerce Web Development",
    description:
      "Web portals are websites that provide a single point of access to a variety of resources and services. They often feature personalized content, user authentication, and a customizable interface.",
  },
];

export const webDevelopmentTechnologies: WebDevelopmentTechnologiesType = [
  {
    heading: "Frontend Technologies",
    List: ["HTML", "CSS", "JavaScript", "React", "Next"],
  },
  {
    heading: "Backend Technologies",
    List: ["Java", "Python", "Node", "C++", "Django", "Flask"],
  },
  {
    heading: "Databases",
    List: ["MongoDB", "MySQL", "Oracle", "MS Server", "PostgreSQL", "Redis"],
  },
];
