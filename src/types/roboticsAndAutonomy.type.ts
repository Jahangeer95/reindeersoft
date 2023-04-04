import { StaticImageData } from "next/image";
import { type } from "os";

// Banner Data types..
export type BannertitleType = string;
export type BannerDescriptionType = string;
export type BannerListType = string[];

// Robototics And Autonomy Importance Data types...
export type RoboticsAutonomyImportanceTitleType = string;
export type RoboticsAutonomyImportanceConTentType = string[];

// Quality Assurance Services Data types...
export type RoboticsAutonomyServicesTitleType = string;
export type RoboticsAutonomyServicesArrayType = {
  id: string;
  value: string;
  image: StaticImageData;
}[];

// Robotics Hardware Data types...
export type RoboticsHardwareTitleType = string;
export type RoboticsHardwareContentType = string[];

// Motion Planning Data types...
export type MotionPlanningTitleType = string;
export type MotionPlanningContentType = string[];

// Manipulation Data types...
export type ManipulationTitleType = string;
export type ManipulationContentType = string[];
