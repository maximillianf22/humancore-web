import Image from "next/image";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

const NavbarPrincipal = () => {
  return (
    <Navbar
      variant="dark"
      className="header align-items-stretch py-0 bg-transparent"
      expand="lg"
    >
      <Container className="container-xxl d-flex align-items-end">
        <Navbar.Brand href="#home">
          <Image
            src="/logo.svg"
            alt="Landscape picture"
            width={200}
            height={45}
            className="h-15px h-lg-20px logo-default"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="h-100 text-end p-10 p-lg-0">
          <Nav className="ms-auto h-100" defaultActiveKey="#header">
            <Nav.Link
              className="menu-item menu-lg-down-accordion mx-1 mx-xl-4 fw-400 fs-6 h-100 my-auto d-flex align-items-center"
              href="#header"
            >
              Discover
            </Nav.Link>
            <Nav.Link
              className="menu-item menu-lg-down-accordion mx-1 mx-xl-4 fw-400 fs-6 h-100 my-auto d-flex align-items-center"
              href="#how-works"
            >
              Superpowers
            </Nav.Link>
            <Nav.Link
              className="menu-item menu-lg-down-accordion mx-1 mx-xl-4 fw-400 fs-6 h-100 my-auto d-flex align-items-center"
              href="#carousel"
            >
              WKnow More
            </Nav.Link>
            <Nav.Link
              className="menu-item menu-lg-down-accordion mx-1 mx-xl-4 fw-400 fs-6 h-100 my-auto d-flex align-items-center"
              href="#our-team"
            >
              <i className="fab fa-twitter px-6 border-start border-secondary"></i>
              <i className="fab fa-linkedin"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarPrincipal;
