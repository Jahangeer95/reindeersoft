import React from "react";
import logo from "@/assets/images/logo.png";
import Image from "next/image";
import styles from "./Company.module.scss";

const Company = () => {
  return (
    <div className={styles.Company_Main}>
      <span>
        <Image src={logo} alt="company-logo" />
      </span>
      <p>
        Reindeersoft is a dedicated team of professionals committed to
        delivering exceptional solutions to our clients. We strive to exceed
        expectations and build long-lasting partnerships.
      </p>
    </div>
  );
};

export default Company;
