import { StaticImageData } from "next/image";

export type ServicesPropTypes = {
  title: string;
  servicesArray: {
    id: string;
    value: string;
    image: StaticImageData;
  }[];
};
