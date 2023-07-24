import React from "react";
import { Spinner } from "react-bootstrap";
import styles from "./loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.loadingMain}>
      <Spinner variant="primary" animation="border" />
    </div>
  );
};

export default Loading;
