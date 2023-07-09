import { Container } from "react-bootstrap";
import Image from "next/image";
import * as data from "./distributedSystemData";
import { camelToDash } from "@/utils/functions/camelToDash";
import styles from "./distributedSystems.module.scss";
import LeftServiceDescription from "@/components/custom/serviceDescription/leftTextRightImage";

const DistributedSystems = () => {
  return (
    <LeftServiceDescription
      title={data.distributedSystemTitle}
      content={data.distributedSystemContent}
    />
  );
};

export default DistributedSystems;
