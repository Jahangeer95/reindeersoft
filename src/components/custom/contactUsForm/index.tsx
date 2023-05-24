import React from "react";
import { Form } from "react-bootstrap";
import styles from "./formStyle.module.scss";
import countryList from "country-list";

const ContactUsForm = () => {
  // should use currying concept for change Handler

  return (
    <Form className={styles.formMain}>
      <Form.Control type="text" placeholder="First Name" />
      <Form.Control type="text" placeholder="Last Name" />
      <Form.Control type="email" placeholder="Work Email" />
      <Form.Control type="text" placeholder="Phone Number" />
      <Form.Select defaultValue="none">
        <option value="none" disabled hidden>
          Select Country
        </option>
        {countryList.getNames().map((state: string, idx: number) => (
          <option key={idx} value={state}>
            {state}
          </option>
        ))}
      </Form.Select>
      <Form.Control as="textarea" rows={4} placeholder="Message" />
      <Form.Control type="submit" value="Submit" />
    </Form>
  );
};

export default ContactUsForm;
