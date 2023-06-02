import React from "react";
import { Form } from "react-bootstrap";
import styles from "./formStyle.module.scss";
import countryList from "country-list";

const ContactUsForm = () => {
  // should use currying concept for change Handler

  const whatAreYouSeekingArr: string[] = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
  ];

  return (
    <Form className={styles.formMain}>
      <Form.Control
        name="first-name"
        type="text"
        placeholder="First Name"
        required
      />
      <Form.Control
        name="last-name"
        type="text"
        placeholder="Last Name"
        required
      />
      <Form.Control
        name="email"
        type="email"
        placeholder="Work Email"
        required
      />
      <Form.Select name="country" defaultValue="none" required>
        <option value="none" disabled hidden>
          Select Country (optional)
        </option>
        {countryList.getNames().map((state: string, idx: number) => (
          <option key={idx} value={state}>
            {state}
          </option>
        ))}
      </Form.Select>
      <Form.Select name="seekingFor" defaultValue="none" required>
        <option value="none" disabled hidden>
          What are you seeking for?
        </option>
        {whatAreYouSeekingArr.map((state: string, idx: number) => (
          <option key={idx} value={state}>
            {state}
          </option>
        ))}
      </Form.Select>
      <Form.Control
        name="message"
        as="textarea"
        rows={4}
        placeholder="Message"
        required
      />
      <Form.Control type="submit" value="Submit" />
    </Form>
  );
};

export default ContactUsForm;
