import { StaticImageData } from "next/image";

// Banner Data types..
export type BannertitleType = string;
export type BannerDescriptionType = string;
export type BannerListType = string[];

// Service Overview Data types
export type ServiceOverviewTitleType = string;
export type ServiceOverviewDescriptionType = string[];

// LLM Services Data types...
export type LLMServicesTitleType = string;
export type LLMServicesArrayType = {
  id: string;
  value: string;
  image: StaticImageData;
}[];

// LLM Each Service Data types...
export type LLMServiceTitleType = string;
export type LLMServiceContentType = {
  description: string[];
  image: StaticImageData;
};

// LLM Applications data type
export type LLMApplicationsTitleType = string;
export type LLMApplicationsContentType = {
  title: string;
  description: string;
}[];
