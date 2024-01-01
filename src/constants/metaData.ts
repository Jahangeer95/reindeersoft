import {
  CLOUD_APPLICATION_DEVELOPMENT_PATHNAME,
  DEDICATED_DEVELOPMENT_TEAM_PATHNAME,
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
  [WEB_AND_APP_PATHNAME]: {
    title: "Application Development Services | Web & Mobile App",
    description:
      "Expertise in crafting robust, secure, and scalable web and mobile apps. Experience seamless innovation through our application development services.",
    chononicalUrl: `${REINDEERSOFT_WEB_URI}/${WEB_AND_APP_PATHNAME}`,
  },
  [DEDICATED_DEVELOPMENT_TEAM_PATHNAME]: {
    title: "Dedicated Development Team Services",
    description:
      "Unlock the potential of a dedicated development team for tailored, efficient, and collaborative software development. Achieve your project goals seamlessly with our expert developers.",
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
    title: "Internet of Things Services",
    description:
      "Explore cutting-edge IoT services to innovate and connect devices seamlessly. Our IoT solutions empower businesses with smart connectivity, real-time insights, and efficient automation. Harness the power of the Internet of Things for transformative and connected experiences.",
    chononicalUrl: `${REINDEERSOFT_WEB_URI}/${INTERNET_OF_THINGS_PATHNAME}`,
  },
  [LARGE_LANGUAGE_MODEL_PATHNAME]: {
    title: "Large language Model Integration & Generative AI Services",
    description:
      "Leverage the power of large language models and generative AI services for innovative solutions. Our services enable seamless integration of cutting-edge language models, driving transformative and personalized user experiences. Explore the possibilities of generative AI for your business growth and innovation.",
    chononicalUrl: `${REINDEERSOFT_WEB_URI}/${LARGE_LANGUAGE_MODEL_PATHNAME}`,
  },
};
