import React from "react";
import { ImFacebook2, ImInstagram, ImLinkedin } from "react-icons/im";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <div className={styles.ContactMain}>
      <div></div>
      <aside>
        <span>
          <ImFacebook2 />
        </span>
        <span>
          <ImLinkedin />
        </span>
        <span>
          <ImInstagram />
        </span>
      </aside>
    </div>
  );
};

export default Contact;
