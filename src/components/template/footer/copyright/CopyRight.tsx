import Link from "next/link";
import React from "react";
import styles from "./CopyRight.module.scss";

const CopyRight = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className={styles.CopyRight_Main}>
      <span>
        Copyright &copy; 2023-{year} REINDEERSOFT. All rights reserved.
      </span>
      <Link href="#">Terms and Conditions</Link>
    </div>
  );
};

export default CopyRight;
