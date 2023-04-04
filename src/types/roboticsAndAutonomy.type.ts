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

// Safety Compliant Control Data types...
export type SafetyCompliantControlTitleType = string;
export type SafetyCompliantControlContentType = string[];

// Simulation Data types...
export type SimulationTitleType = string;
export type SimulationContentType = string[];

// Computer Vision Data types...
export type ComputerVisionTitleType = string;
export type ComputerVisionContentType = string[];

// Integration Data types...
export type IntegrationTitleType = string;
export type IntegrationContentType = string[];
