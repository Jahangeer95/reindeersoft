import React from "react";
import { ImFacebook2, ImInstagram, ImLinkedin } from "react-icons/im";
import styles from "./SocialContacts.module.scss";

const SocialContacts = () => {
  return (
    <div className={styles.SocialContactsMain}>
      <h5>Social Link</h5>
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

export default SocialContacts;
