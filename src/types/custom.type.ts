import { StaticImageData } from "next/image";

export type BannerPropTypes = {
  title1?: string;
  title2?: string;
  title?: string;
  description: string;
  list: string[];
  imageClass: string;
};

export type ImportanceOrOverviewTypes = {
  title: string;
  contentArray: string[];
};

export type ServicesPropTypes = {
  title: string;
  servicesArray: {
    id: string;
    value: string;
    image: StaticImageData;
  }[];
  serviceClass: string;
};

export type ServiceDescriptionPropTypes = {
  title: string;
  content: {
    description: string[];
    image: StaticImageData;
  };
};

export type MetaInformationPropTypes = {
  title: string;
  description: string;
};
