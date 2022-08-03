import Image from "next/image";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

const NavbarPrincipal = () => {
  return (
    <Navbar
      variant="dark"
      className="header align-items-stretch py-0 bg-purple"
      expand="lg"
    >
      <Container className="container-xxl d-flex align-items-center">
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
        <Navbar.Collapse className="h-100 text-center bg-purple p-10 p-lg-0">
          <Nav className="mx-auto h-100" defaultActiveKey="#header">
            <Nav.Link
              className="menu-item menu-lg-down-accordion mx-1 mx-xl-4 fw-bolder h-100 my-auto d-flex align-items-center"
              href="#header"
            >
              Home
            </Nav.Link>
            <Nav.Link
              className="menu-item menu-lg-down-accordion mx-1 mx-xl-4 fw-bolder h-100 my-auto d-flex align-items-center"
              href="#how-works"
            >
              How it Works
            </Nav.Link>
            <Nav.Link
              className="menu-item menu-lg-down-accordion mx-1 mx-xl-4 fw-bolder h-100 my-auto d-flex align-items-center"
              href="#carousel"
            >
              What we do
            </Nav.Link>
            <Nav.Link
              className="menu-item menu-lg-down-accordion mx-1 mx-xl-4 fw-bolder h-100 my-auto d-flex align-items-center"
              href="#make-companies"
            >
              Solutions
            </Nav.Link>
            <Nav.Link
              className="menu-item menu-lg-down-accordion mx-1 mx-xl-4 fw-bolder h-100 my-auto d-flex align-items-center"
              href="#our-team"
            >
              Our Team
            </Nav.Link>
            <Nav.Link
              className="menu-item menu-lg-down-accordion mx-1 mx-xl-4 fw-bolder h-100 my-auto d-flex align-items-center"
              href="#say-clients"
            >
              References
            </Nav.Link>
          </Nav>
          <Button variant="danger" className="py-2 btn-gradient">
            Sign in
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarPrincipal;
