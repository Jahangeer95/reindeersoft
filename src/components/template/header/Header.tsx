import React from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.png";
import styles from "./header.module.scss";

const Header = () => {
  const [value, setValue] = useState(false);
  const [display, setDisplay] = useState(false);

  const menuHandler = () => {
    setValue(true);
    setDisplay(true);
  };

  const handleClick = () => {
    setValue((value) => !value);
    setDisplay(false);
  };

  const menuCloseHandler = () => {
    setValue(false);
    setDisplay(false);
  };

  return (
    <header className={`${styles.Header_Main} fixed-top`}>
      <Navbar expand="md">
        <Container fluid="lg">
          <Link href="/">
            <Image
              src={logo}
              alt="logo-png"
              className={styles.Logo_Animation}
            />
          </Link>
          <Navbar.Toggle
            aria-controls="offcanvasNavbar-expand-md"
            className="bg-light"
          />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-md"
            aria-labelledby="offcanvasNavbarLabel-expand-md"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav
                className={`justify-content-end flex-grow-1 pe-3 ${styles.Nav_Menu}`}
              >
                <Link href="/services" onMouseEnter={menuHandler}>
                  Services
                </Link>
                <Link href="/technologies" onMouseEnter={menuCloseHandler}>
                  Technologies
                </Link>
                <Link href="/blogs" onMouseEnter={menuCloseHandler}>
                  Blogs
                </Link>
                <Link href="/contact-us" onMouseEnter={menuCloseHandler}>
                  Contact us
                </Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
