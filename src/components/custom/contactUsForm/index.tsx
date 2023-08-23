import React, { useEffect } from "react";
import { Form } from "react-bootstrap";
import styles from "./formStyle.module.scss";
import countryList from "country-list";
import { useFormik } from "formik";
import * as Yup from "yup";

const ContactUsForm = () => {
  const formik = useFormik({
    initialValues: {
      "first-name": "",
      "last-name": "",
      email: "",
      country: "",
      seekingFor: "",
      message: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      "first-name": Yup.string().required("First Name  is required!"),
      "last-name": Yup.string().required("Last Name is Required!"),
      email: Yup.string()
        .email("Invalid Email Format")
        .required("Email is Required!"),
      country: Yup.string().optional(),
      seekingFor: Yup.string().required(
        "What you are seeking for is Required!"
      ),
      message: Yup.string().min(10).required("Message is Required!"),
    }),
  });
  // should use currying concept for change Handler

  const whatAreYouSeekingArr: string[] = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
  ];

  useEffect(() => {
    console.log(formik);
  });

  return (
    <Form className={styles.formMain} onSubmit={formik.handleSubmit}>
      <Form.Control
        type="text"
        className={
          formik.errors["first-name"] && formik.touched["first-name"]
            ? styles.error
            : ""
        }
        placeholder="First Name"
        {...formik.getFieldProps("first-name")}
      />
      <Form.Control
        type="text"
        className={
          formik.errors["last-name"] && formik.touched["last-name"]
            ? styles.error
            : ""
        }
        placeholder="Last Name"
        {...formik.getFieldProps("last-name")}
      />
      <Form.Control
        type="string"
        className={
          formik.errors["email"] && formik.touched["email"] ? styles.error : ""
        }
        placeholder="Email"
        {...formik.getFieldProps("email")}
      />
      <Form.Select
        {...formik.getFieldProps("country")}
        className={
          formik.errors["country"] && formik.touched["country"]
            ? styles.error
            : formik.touched["country"]
            ? styles.selectText
            : ""
        }
      >
        <option value="none" selected hidden>
          Select Country (optional)
        </option>
        {countryList.getNames().map((state: string, idx: number) => (
          <option key={idx} value={state}>
            {state}
          </option>
        ))}
      </Form.Select>
      <Form.Select
        {...formik.getFieldProps("seekingFor")}
        className={
          formik.errors["seekingFor"] && formik.touched["seekingFor"]
            ? styles.error
            : formik.touched["seekingFor"]
            ? styles.selectText
            : ""
        }
      >
        <option value="none" selected hidden>
          What are you seeking for?
        </option>
        {whatAreYouSeekingArr.map((state: string, idx: number) => (
          <option key={idx} value={state}>
            {state}
          </option>
        ))}
      </Form.Select>
      <Form.Control
        as="textarea"
        className={
          formik.errors["message"] && formik.touched["message"]
            ? styles.error
            : ""
        }
        rows={4}
        placeholder="Message"
        {...formik.getFieldProps("message")}
      />
      <Form.Control type="submit" value="Submit" />
    </Form>
  );
};

export default ContactUsForm;
