import React from "react";
import Link from "next/link";
import styles from "./LinkStyle.module.scss";

const Links = () => {
  return (
    <div className={styles.Links_Main}>
      <span>
        <ul>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/technologies">Technologies</Link>
          </li>
          <li>
            <Link href="/blogs">Blogs</Link>
          </li>
          <li>
            <Link href="/contact-us">Contact us</Link>
          </li>
        </ul>
      </span>
    </div>
  );
};

export default Links;
