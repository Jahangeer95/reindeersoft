import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.png";
import styles from "./header.module.scss";
import { Transition } from "react-transition-group";
import HoverMenu from "./nav-menu";
import { useRouter } from "next/router";

const Header = () => {
  const [pos, setPos] = useState("top");
  const [value, setValue] = useState(false);
  const [display, setDisplay] = useState(false);
  const [hideSideBar, setHideSideBar] = useState(true);
  const [button, setButton] = useState<null | any>(null);
  const { pathname, push } = useRouter();

  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      let scrolled = document.scrollingElement!.scrollTop;
      if (scrolled >= 5) {
        setPos("moved");
      } else {
        setPos("top");
      }
    });
  }, []);

  const menuHandler = (buttonText: string) => {
    setButton(buttonText);
    setValue(true);
    setDisplay(true);
  };

  const handleClick = () => {
    // setValue((value) => !value);
    setValue(false);
    setDisplay(false);
  };

  const classes = [
    styles.Header_Main,
    "fixed-top",
    pos !== "top" && styles.HeaderBackground,
  ];

  const sideBarHandler = () => {
    if (window.innerWidth <= 768) {
      setHideSideBar((prevHideBar) => !prevHideBar);
      setValue(false);
      setDisplay(false);
    }
  };

  const handleScrollToElement = (event: any, elementId: string) => {
    event.preventDefault();
    sideBarHandler();

    push(`/?id=#${elementId}`, `/#${elementId}`);
  };

  useEffect(() => {
    setValue(false);
    setDisplay(false);
  }, [pathname]);

  return (
    <>
      <header className={classes.join(" ")}>
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
              onClick={sideBarHandler}
            />
            <Navbar.Offcanvas
              id="offcanvasNavbar-expand-md"
              aria-labelledby="offcanvasNavbarLabel-expand-md"
              placement="start"
              style={{ width: "100%" }}
              show={!hideSideBar}
            >
              <Offcanvas.Header
                closeButton
                closeVariant="white"
                style={{ backgroundColor: "#000d28" }}
                onHide={sideBarHandler}
              >
                <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                  <Image src={logo} alt="logo-png" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav
                  className={`justify-content-end align-items-center flex-grow-1 gap-md-4 ${styles.Nav_Menu}`}
                >
                  <Link
                    href="/"
                    onClick={sideBarHandler}
                    onMouseEnter={() => {
                      setDisplay(false);
                      setValue(false);
                    }}
                  >
                    Home
                  </Link>
                  <button
                    type="button"
                    onMouseEnter={() => menuHandler("services")}
                  >
                    Services
                  </button>
                  <Link
                    href="#"
                    onClick={(event) =>
                      handleScrollToElement(event, "engagement-modal")
                    }
                    onMouseEnter={() => {
                      setDisplay(false);
                      setValue(false);
                    }}
                  >
                    Engagement Model
                  </Link>

                  <Link
                    href="/about-us"
                    onClick={sideBarHandler}
                    onMouseEnter={() => {
                      setDisplay(false);
                      setValue(false);
                    }}
                  >
                    About Us
                  </Link>

                  <Link
                    href="/contact-us"
                    onClick={sideBarHandler}
                    onMouseEnter={() => {
                      setDisplay(false);
                      setValue(false);
                    }}
                  >
                    Contact us
                  </Link>
                </Nav>
                <Transition in={value} timeout={600} mountOnEnter unmountOnExit>
                  {(state) => (
                    <HoverMenu
                      val={state}
                      clickHandler={handleClick}
                      dis={display}
                      button={button}
                      onHandleSideBar={sideBarHandler}
                    />
                  )}
                </Transition>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
