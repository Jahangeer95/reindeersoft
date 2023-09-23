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

// Team Extension Data types...
export type TeamExtensionTitleType = string;
export type TeamExtensionDEscriptionType = string;
export type OurResponsibilityObjectType = {
  mainTitle: string;
  content: {
    title: string;
    description: string;
  }[];
};
export type ClientResponsibilityObjectType = {
  mainTitle: string;
  content: {
    title: string;
    description: string;
  }[];
};

// Dedicated Team Data types....
export type DedicatedTeamTitleType = string;
export type DedicatedTeamDEscriptionType = string;

// Hiring and Engagement Process Data types...
export type HireEngageProcessTitleType = string;
export type HireEngageProcessDescriptionType = string;
export type HireEngageProcessContentArrayType = {
  title: string;
  description: string;
}[];
