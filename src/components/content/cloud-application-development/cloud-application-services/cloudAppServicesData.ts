import cloudMigration from "@/assets/images/cloud-application-development/cloud-application-services/cloud-migration.png";
import cloudIntegration from "@/assets/images/cloud-application-development/cloud-application-services/cloud-integration.png";
import serverlessComputing from "@/assets/images/cloud-application-development/cloud-application-services/serverless-computing.png";
import distributedSystem from "@/assets/images/cloud-application-development/cloud-application-services/distributed-system.png";
import cloudNativeApp from "@/assets/images/cloud-application-development/cloud-application-services/cloud-nativ-app.png";
import {
  CloudAppServicesArrayType,
  CloudAppServicesTitleType,
} from "@/types/cloudAppDevelopment.type";

export const title: CloudAppServicesTitleType =
  "Our Cloud Application Development Services";
export const qaServicesArray: CloudAppServicesArrayType = [
  {
    id: "cloud-app-one",
    value: "Cloud-Native Applications",
    image: cloudNativeApp,
  },
  {
    id: "cloud-app-two",
    value: "Cloud Migration",
    image: cloudMigration,
  },
  {
    id: "cloud-app-three",
    value: "Cloud Integration",
    image: cloudIntegration,
  },
  {
    id: "cloud-app-four",
    value: "Serverless Computing",
    image: serverlessComputing,
  },
  {
    id: "cloud-app-five",
    value: "Distributed Systems",
    image: distributedSystem,
  },
];