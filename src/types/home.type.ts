import { StaticImageData } from "next/image";

// export type homeBannerArrayTypes = {
//   bannerImage: StaticImageData;
//   heading: string;
//   description: string;
//   list: string[];
// }[];

export type HomeBannerDataType = {
  title1: string;
  title2: string;
  description: string;
};

export type AboutUsTitleType = string;
export type AboutUsContentType = string[];

export type OurServicesTitleType = string;
export type OurServiceListType = {
  icon: StaticImageData;
  title: string;
}[];

export type EngagementModelDataTypes = {
  column1: string;
  column2: string;
  column3: string;
  column4: string;
  column5: string;
}[];
export type MobileViewTablePropTypes = {
  title: string;
  description: string[];
};

export type FaqsTitleType = string;
export type FaqsContentType = {
  question: string;
  answer: string;
}[];
