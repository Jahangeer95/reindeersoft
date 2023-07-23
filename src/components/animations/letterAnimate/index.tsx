import React from "react";
import styles from "./letterAnimate.module.scss";

type propTypes = {
  strArray: string[];
};

const LetterAnimate = ({ strArray }: propTypes) => {
  return (
    <div className={styles.Main_animate}>
      <h1>
        {strArray.map((char, i) => {
          return (
            <span
              key={char + i}
              className={styles.Animate}
              style={{ animationDelay: i * 0.03 + "s" }}
            >
              {char}
            </span>
          );
        })}
      </h1>
    </div>
  );
};

export default LetterAnimate;
