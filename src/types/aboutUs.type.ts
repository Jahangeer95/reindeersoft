import { StaticImageData } from "next/image";

// About us overvew Data types...
export type AboutUsOverviewTitleType = string;
export type AboutUsOverviewConTentType = string[];

// About us Core Values Data types....
export type CoreValueTitleType = string;
export type coreValueContentType = {
  title: string;
  description: string;
  image: StaticImageData;
}[];

// About us Modal And Service offering Data types...
export type ModalAndServiceOfferingType = {
  title: string;
  description: string;
  scrollId: string;
  linkText: string;
}[];
