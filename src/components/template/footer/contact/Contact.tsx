import React from "react";
import { BiMap, BiPhone } from "react-icons/bi";
import { GoMail } from "react-icons/go";
import { ImFacebook2, ImInstagram, ImLinkedin } from "react-icons/im";
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
