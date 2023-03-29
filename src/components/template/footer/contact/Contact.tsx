import React from "react";
import { BiMap, BiPhone } from "react-icons/bi";
import { GoMail } from "react-icons/go";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <div className={styles.ContactMain}>
      <h5>Contact Info</h5>
      <address>
        <span>
          <BiMap className="mt-1" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, Lahore</p>
        </span>
        <span>
          <BiPhone className="mt-1" />
          <p>+92 12387434546</p>
        </span>
        <span>
          <GoMail className="mt-1" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, Lahore</p>
        </span>
      </address>
    </div>
  );
};

export default Contact;
