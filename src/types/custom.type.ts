import { StaticImageData } from "next/image";

export type ServicesPropTypes = {
  title: string;
  servicesArray: {
    id: string;
    value: string;
    image: StaticImageData;
  }[];
  serviceClass: string;
};

export type BannerPropTypes = {
  title: string;
  description: string;
  list: string[];
  imageClass: string;
};
