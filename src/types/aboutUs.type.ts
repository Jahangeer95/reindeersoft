import { StaticImageData } from "next/image";

// About us overvew Data types...
export type AboutUsOverviewTitleType = string;
export type AboutUsOverviewConTentType = string[];

// Abour us Core Values Data types....
export type CoreValueTitleType = string;
export type coreValueContentType = {
  title: string;
  description: string;
  image: StaticImageData;
}[];
