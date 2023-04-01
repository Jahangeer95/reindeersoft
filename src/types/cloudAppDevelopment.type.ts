import { StaticImageData } from "next/image";

// Banner Data types..
export type BannertitleType = string;
export type BannerDescriptionType = string;
export type BannerListType = string[];

// Cloud Application Development Importance Data types...
export type CloudApplicationImportanceTitleType = string;
export type CloudApplicationImportanceConTentType = string[];

// Cloud Application Services Data types...
export type CloudAppServicesTitleType = string;
export type CloudAppServicesArrayType = {
  id: string;
  value: string;
  image: StaticImageData;
}[];
