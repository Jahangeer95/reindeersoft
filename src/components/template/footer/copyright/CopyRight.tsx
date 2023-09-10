import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";
import styles from "./CopyRight.module.scss";

const CopyRight = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className={styles.CopyRight_Main}>
      <Container fluid="lg">
        <div>
          <span>Copyright &copy; 2023 REINDEERSOFT. All rights reserved.</span>
        </div>
      </Container>
    </div>
  );
};

export default CopyRight;
