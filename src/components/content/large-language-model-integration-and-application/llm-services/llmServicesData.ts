import llmIntegration from "@/assets/images/llm/llm-services-icon/llm-integration.png";
import llmPromptEngineering from "@/assets/images/llm/llm-services-icon/llm-prompt-engineering.png";
import llmTrainingAndCustomization from "@/assets/images/llm/llm-services-icon/llm-training-and-customization.png";
import llmConsultationAndSupport from "@/assets/images/llm/llm-services-icon/llm-consultation-and-support.png";

import { LLMServicesArrayType, LLMServicesTitleType } from "@/types/llm.type";

export const title: LLMServicesTitleType = "Large Language Model Services";
export const roboticServicesArray: LLMServicesArrayType = [
  {
    id: "llm-app-one",
    value: "Integrations",
    image: llmIntegration,
  },
  {
    id: "llm-app-two",
    value: "Prompt Engineering",
    image: llmPromptEngineering,
  },
  {
    id: "llm-app-three",
    value: "Training and Customization",
    image: llmTrainingAndCustomization,
  },
  {
    id: "llm-app-four",
    value: "Consultation and Support",
    image: llmConsultationAndSupport,
  },
];
