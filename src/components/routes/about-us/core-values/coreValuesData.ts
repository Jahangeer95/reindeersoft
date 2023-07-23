import { CoreValueTitleType, coreValueContentType } from "@/types/aboutUs.type";
import embraceEthics from "../../../../assets/images/about-us/embrace-ethcs.png";
import pursueExcellence from "../../../../assets/images/about-us/pursue-excellence.png";
import mutualGrowth from "../../../../assets/images/about-us/mutual-growth.png";
import costEffectiveness from "../../../../assets/images/about-us/cost-effectiveness.png";

export const coreValueTitle: CoreValueTitleType = "Our Core Values";

export const coreValueContent: coreValueContentType = [
  {
    title: "Embrace Ethics",
    description:
      "We embrace ethics as the foundation of our actions, making decisions guided by integrity and accountability to uphold the highest standards in everything we do.",
    image: embraceEthics,
  },
  {
    title: "Pursue Excellence",
    description:
      "We strive to pursue excellence in every aspect of our work, continuously pushing the boundaries of innovation to surpass expectations and deliver exceptional products and services.",
    image: pursueExcellence,
  },
  {
    title: "Mutual Growth",
    description:
      "We believe in creating an inclusive environment for mutual growth through collaborative relationships with clients, employees, and partners, fostering success and learning.",
    image: mutualGrowth,
  },
  {
    title: "Cost Effectiveness",
    description:
      "We strongly prioritize cost effectiveness, actively committed to delivering efficient solutions that optimize investment and provide exceptional value for our clients and partners.",
    image: costEffectiveness,
  },
];
