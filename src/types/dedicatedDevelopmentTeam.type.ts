import { StaticImageData } from "next/image";

// Banner Data types..
export type BannertitleType = string;
export type BannerDescriptionType = string;
export type BannerListType = string[];

//  Dedicated Development Team Importance Data types...
export type DDTImportanceTitleType = string;
export type DDTImportanceConTentType = string[];

//  Dedicated Development Team Benifits Data types...
export type DDTBenifitsTitleType = string;
export type DDTEbenifitsContentList = {
  list: {
    title: string;
    description: string;
  }[];
};

// Dedicated Development Team Services Data types...
export type DDTServicesTitleType = string;
export type DDtServicesArrayType = {
  id: string;
  value: string;
  image: StaticImageData;
}[];
