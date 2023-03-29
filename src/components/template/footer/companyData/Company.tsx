import React from "react";
import logo from "@/assets/images/logo.png";
import Image from "next/image";
import styles from "./Company.module.scss";

const Company = () => {
  return (
    <div className={styles.Company_Main}>
      <h5>About Us</h5>
      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC.
      </p>
      <span>
        <Image src={logo} alt="company-logo" />
      </span>
    </div>
  );
};

export default Company;
