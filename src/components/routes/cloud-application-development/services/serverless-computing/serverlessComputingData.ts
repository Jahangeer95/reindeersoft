import {
  CloudAppServiceContent,
  CloudAppServiceTitleType,
} from "@/types/cloudAppDevelopment.type";
import serverlessComputing from "@/assets/images/cloud-application-development/serverless-computing.jpg";

export const serverlessComputingTitle: CloudAppServiceTitleType =
  "Serverless Cloud Computing ";
export const serverlessComputingContent: CloudAppServiceContent = {
  description: [
    "Serverless computing is a cloud computing model where the cloud provider manages server provisioning and dynamically allocates and scales computing resources based on the application's needs. This leads to increased productivity and cost efficiency, as businesses can focus entirely on their core business logic.",
    "We specialize in designing and building applications that fully leverage serverless technologies such as AWS Lambda, Azure Functions, and GCP Cloud Functions. By harnessing the power of serverless technology, you can enjoy the benefits of reduced costs, improved scalability, and faster time-to-market. Our expertise in serverless architecture allows us to deliver efficient and highly performant solutions tailored to your specific needs.",
  ],
  image: serverlessComputing,
};
