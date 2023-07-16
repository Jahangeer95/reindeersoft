import { StaticImageData } from "next/image";

// Banner Data types..
export type BannertitleType = string;
export type BannerDescriptionType = string;
export type BannerListType = string[];

// WebApp development Development Service Overview
export type WebAppDevImportanceTitleType = string;
export type WebAppDevImportanceConTentType = {
  description: string;
  serviceArray: {
    title: string;
    serviceDescription: string;
  }[];
  finishingText: string;
};

// Web Mobile Application Services Data types...
export type WebAppServicesTitleType = string;
export type WebAppServicesArrayType = {
  id: string;
  value: string;
  image: StaticImageData;
}[];

// WebApp development Process Data types...
export type WebAppDevProcessTitleType = string;
export type WebAppDevProcessDescriptionType = string;
export type WebAppDevProcessArrayType = {
  id: number;
  heading: string;
}[];

// Web Development service data type
export type WebDevelopmentServiceTitleType = string;
export type WebDevelopmentDescriptionType = string[];
export type WebDevelopmenttypeOfWebsitesType = {
  title: string;
  description: string;
}[];
export type WebDevelopmentTechnologiesType = {
  heading: string;
  List: {
    alt: string;
    icon: StaticImageData;
  }[];
}[];

// Native mobile development serice data type
export type NativeMobileAppDevelopmentTitleType = string;
export type NativeMobileAppDevelopmentContentType = string[];

// App Development service data type
export type AppDevelopmentServiceTitleType = string;
export type AppDevelopmentDescriptionType = string[];
export type AppDevelopmentTypeDataType = {
  title: string;
  description: string;
}[];
export type AppDevelopmentTechnologiesType = {
  heading: string;
  List: string[];
}[];

// Integrated Mobile App Development service data type
export type IntegratedAppDevelopmentServiceTitleType = string;
export type IntegratedAppDevelopmentDescriptionType = string[];
