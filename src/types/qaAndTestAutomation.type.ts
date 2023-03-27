import { StaticImageData } from "next/image";

// Banner Data types..
export type BannertitleType = string;
export type BannerDescriptionType = string;
export type BannerListType = string[];

// Quality Assurance Importance Data types...
export type QualityAssuranceImportanceTitleType = string;
export type QualityAssuranceImportanceConTentType = string[];

// Quality Assurance Process Data types...
export type QualityAssuranceProcessTitleType = string;
export type QualityAssuranceProcessDescriptionType = string;
export type qualityAssuranceProcessArrayType = {
  id: number;
  heading: string;
  list: string[];
}[];

// Quality Assurance Services Data types...
export type QaServicesTitleType = string;
export type QaServicesArrayType = {
  id: string;
  value: string;
  image: StaticImageData;
}[];

// Waterfall Development Data types...
export type waterfallDevelopmentTitleType = string;
export type waterfallDevelopmentContentType = {
  paragraph1: string;
  list: {
    title: string;
    description: string;
  }[];
  paragraph2: string;
};

// Agile Development Data types...
export type AgileDevelopmentTitleType = string;
export type AgileDevelopmentContentType = {
  paragraph1: string;
  list: {
    title: string;
    description: string;
  }[];
};

// Unique Testing Data types...
export type UniqueTestingTitleType = string;
export type UniqueTestingArrType = {
  image: StaticImageData;
  title: string;
  description: string;
}[];

// Automated Testing Data types...
export type AutomatedTestingTitleType = string;
export type AutomatedTestingContentType = {
  paragraph1: string;
  list: {
    title: string;
    description: string;
  }[];
};

export type AutomationServicesTitleType = string;
export type AutomationServicesDescriptionType = string;
export type AutomationServicesArrayType = {
  image: StaticImageData;
  title: string;
}[];
export type AutomationImageType = StaticImageData;

export type TechnologiesTitleType = string;
export type TechnologiesArrayType = {
  title: string;
}[];

// Automated Testing Data types...
export type ConsultancyTitleType = string;
export type ConsultancyParagraphType = string;
export type ConsultancyArrayType = string[];
