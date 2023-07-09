import {
  CloudAppServiceContent,
  CloudAppServiceTitleType,
} from "@/types/cloudAppDevelopment.type";
import eventDrivenApplications from "@/assets/images/cloud-application-development/distributed-system.jpg";

export const eventDrivenApplicationsTitle: CloudAppServiceTitleType =
  "Event Driven Applications";
export const eventDrivenApplicationsContent: CloudAppServiceContent = {
  description: [
    "Event-Driven Architecture (EDA) is a modern software architecture paradigm where application components communicate through messaging queues by generating and consuming software events. It promotes loose coupling between components, leading to increased flexibility, scalability, and easier maintenance. With EDA, integrating new components or services becomes seamless, enhancing extensibility. The decoupled nature of EDA enables independent development, testing, and deployment of application components.",
    "We specialize in building event-driven applications that fully leverage this modern software architecture. By harnessing technologies like AWS Simple Queue Service (SQS) and Simple Notification Service (SNS), we empower your applications with increased flexibility, scalability, and fault tolerance. ",
  ],
  image: eventDrivenApplications,
};
