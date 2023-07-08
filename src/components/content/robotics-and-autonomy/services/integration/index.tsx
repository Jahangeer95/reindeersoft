import { Container } from "react-bootstrap";
import Image from "next/image";
import * as data from "./integrationData";
import { camelToDash } from "@/utils/functions/camelToDash";
import styles from "./integration.module.scss";
import LeftServiceDescription from "@/components/custom/serviceDescription/leftTextRightImage";

const Integration = () => {
  return <LeftServiceDescription title={data.title} content={data.content} />;
};

export default Integration;
