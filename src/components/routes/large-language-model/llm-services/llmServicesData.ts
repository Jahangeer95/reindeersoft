import llmIntegration from "@/assets/images/llm/llm-services-icon/llm-integration.png";
import llmPromptEngineering from "@/assets/images/llm/llm-services-icon/llm-prompt-engineering.png";
import llmTrainingAndCustomization from "@/assets/images/llm/llm-services-icon/llm-training-and-customization.png";
import llmConsultationAndSupport from "@/assets/images/llm/llm-services-icon/llm-consultation-and-support.png";
import llmApplications from "@/assets/images/llm/llm-services-icon/llm-applications.png";

import { LLMServicesArrayType, LLMServicesTitleType } from "@/types/llm.type";

export const title: LLMServicesTitleType = "Generative AI Services";
export const roboticServicesArray: LLMServicesArrayType = [
  {
    id: "llm-app-one",
    value: "Large Language Model Integration ",
    image: llmIntegration,
  },
  {
    id: "llm-app-two",
    value: "Prompt Engineering ",
    image: llmPromptEngineering,
  },
  {
    id: "llm-app-three",
    value: "LLMs Training & Customization ",
    image: llmTrainingAndCustomization,
  },
  {
    id: "llm-app-four",
    value: "Consultation & Support for LLM Integration ",
    image: llmConsultationAndSupport,
  },
  {
    id: "llm-app-five",
    value: "LLM Applications ",
    image: llmApplications,
  },
];
