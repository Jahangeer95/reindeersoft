import { StaticImageData } from "next/image";

export type homeBannerArrayTypes = {
  bannerImage: StaticImageData;
  heading: string;
  description: string;
  list: string[];
}[];

export type AboutUsTitleType = string;
export type AboutUsContentType = string[];

export type OurServicesTitleType = string;
export type OurServiceListType = {
  icon: StaticImageData;
  title: string;
}[];
