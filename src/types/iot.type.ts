import { StaticImageData } from "next/image";

// Banner Data types..
export type BannertitleType = string;
export type BannerDescriptionType = string;
export type BannerListType = string[];

// IoT services Overview Data types...
export type IoTServicesOverviewTitleType = string;
export type IoTServicesOverviewConTentType = string[];

// IoT Services Data types...
export type IoTServicesTitleType = string;
export type IoTServicesArrayType = {
  id: string;
  value: string;
  image: StaticImageData;
}[];

// IoT Each service Data types...
export type IoTServiceTitleType = string;
export type IoTServiceContent = {
  description: string[];
  image: StaticImageData;
};
