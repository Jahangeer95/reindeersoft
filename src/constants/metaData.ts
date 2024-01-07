import {
  CLOUD_APPLICATION_DEVELOPMENT_PATHNAME,
  DEDICATED_DEVELOPMENT_TEAM_PATHNAME,
  HOME_PATHNAME,
  INTERNET_OF_THINGS_PATHNAME,
  LARGE_LANGUAGE_MODEL_PATHNAME,
  QA_AND_TEST_AUTOMATION_PATHNAME,
  REINDEERSOFT_WEB_URI,
  ROBOTICS_AND_AUTONOMY_PATHNAME,
  WEB_AND_APP_PATHNAME,
} from ".";

interface MetaDetaTypes {
  title: string;
  description: string;
  chononicalUrl: string;
}

interface WebsiteMetaDataTypes {
  [key: string]: MetaDetaTypes;
}

export const websiteMetaDeta: WebsiteMetaDataTypes = {
  [HOME_PATHNAME]: {
    title: "IT Services | Digital Solutions - ReindeerSoft",
    description:
      "A dedicated team of professionals committed to delivering exceptional IT services and digital solutions. Experience technological excellence excellence with us.",
    chononicalUrl: `${REINDEERSOFT_WEB_URI}/`,
  },
  [WEB_AND_APP_PATHNAME]: {
    title: "Application Development Services | Web & Mobile App",
    description:
      "Expertise in crafting robust, secure, and scalable web and mobile apps. Experience seamless innovation through our application development services.",
    chononicalUrl: `${REINDEERSOFT_WEB_URI}/${WEB_AND_APP_PATHNAME}`,
  },
  [DEDICATED_DEVELOPMENT_TEAM_PATHNAME]: {
    title: "Dedicated Development Team Services",
    description:
      "Elevate your projects with our dedicated development team services. We provide expert digital solutions, teamwork, and ensure efficient project delivery for success.",
    chononicalUrl: `${REINDEERSOFT_WEB_URI}/${DEDICATED_DEVELOPMENT_TEAM_PATHNAME}`,
  },
  [ROBOTICS_AND_AUTONOMY_PATHNAME]: {
    title: "Autonomous Robots Services & Software Solutions",
    description:
      "Innovate for the future with our autonomous robots services. Explore software solutions in robotic manipulation, hardware, motion planning, and beyond.",
    chononicalUrl: `${REINDEERSOFT_WEB_URI}/${ROBOTICS_AND_AUTONOMY_PATHNAME}`,
  },
  [QA_AND_TEST_AUTOMATION_PATHNAME]: {
    title: "Qa And Test Automation Services",
    description:
      "Enhance software quality and efficiency with our QA and test automation services. Streamline testing processes, identify bugs early, and achieve reliable software releases. Elevate your product's performance and user experience with our expert testing solutions.",
    chononicalUrl: `${REINDEERSOFT_WEB_URI}/${QA_AND_TEST_AUTOMATION_PATHNAME}`,
  },
  [CLOUD_APPLICATION_DEVELOPMENT_PATHNAME]: {
    title: "Cloud Computing & Application Development Services",
    description:
      "Empower business with our cloud application development services. Explore robust solutions for cloud native app, serverless cloud computing, and more.",
    chononicalUrl: `${REINDEERSOFT_WEB_URI}/${CLOUD_APPLICATION_DEVELOPMENT_PATHNAME}`,
  },

  [INTERNET_OF_THINGS_PATHNAME]: {
    title: "Internet of Things (IoT) Services",
    description:
      "Explore cutting-edge IoT services to innovate and connect devices seamlessly. Our IoT solutions empower businesses with smart connectivity, real-time insights, and efficient automation. Harness the power of the Internet of Things for transformative and connected experiences.",
    chononicalUrl: `${REINDEERSOFT_WEB_URI}/${INTERNET_OF_THINGS_PATHNAME}`,
  },
  [LARGE_LANGUAGE_MODEL_PATHNAME]: {
    title: "Large language Model Integration & Generative AI Services",
    description:
      "Empower your visions with our generative AI services. We specialize in large language model integration, prompt engineering, LLM training and customization.",
    chononicalUrl: `${REINDEERSOFT_WEB_URI}/${LARGE_LANGUAGE_MODEL_PATHNAME}`,
  },
};
