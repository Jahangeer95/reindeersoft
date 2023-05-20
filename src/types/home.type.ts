import { StaticImageData } from "next/image";

export type homeBannerArrayTypes = {
  bannerImage: StaticImageData;
  heading: string;
  description: string;
  list: string[];
}[];
