import { StaticImageData } from "next/image";

// Banner Data types..
export type BannertitleType = string;
export type BannerDescriptionType = string;
export type BannerListType = string[];

// Robototics And Autonomy Importance Data types...
export type RoboticsAutonomyImportanceTitleType = string;
export type RoboticsAutonomyImportanceConTentType = string[];

// Robototics And Autonomy Services Data types...
export type RoboticsAutonomyServicesTitleType = string;
export type RoboticsAutonomyServicesArrayType = {
  id: string;
  value: string;
  image: StaticImageData;
}[];

// Robototics And Autonomy Each Service Data types...
export type RoboticsAutonomyServiceTitleType = string;
export type RoboticsAutonomyServiceContentType = {
  description: string[];
  image: StaticImageData;
};
