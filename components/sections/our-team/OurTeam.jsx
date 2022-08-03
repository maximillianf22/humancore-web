import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const OurTeam = () => {
  return (
    <Container className="my-5 px-0">
      <div className="px-10">
        <div className="text-center my-10">
          <h2 className="display-6 mb-0 fw-bolder">Meet Our Team</h2>
          <hr className="text-danger mx-auto mt-2" size="5" width="60px" />
          <p className="text-muted lh-base fs-5">
            Over two decades of experience combined with comprehensive
            artificial intelligence to put your investment under the microscope
            you deserve.
          </p>
        </div>
        <Row>
          <Col sm={6} md="4" lg="3" className="p-0 my-5">
            <div
              className="text-center tns-item tns-slide-active"
              id="tns1-item6"
            >
              <div className="octagon mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center felipe"></div>
              <div className="mb-0">
                <a
                  href="/ceres-html-free/?page=account/overview"
                  className="text-dark fw-bolder text-hover-primary fs-3"
                >
                  Felipe Lobo
                </a>
                <div className="text-muted fs-6 fw-bolder mt-1">
                  FullStack Developer
                </div>
              </div>
            </div>
          </Col>
          <Col sm={6} md="4" lg="3" className="p-0 my-5">
            <div
              className="text-center tns-item tns-slide-active"
              id="tns1-item6"
            >
              <div className="octagon mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center olga"></div>
              <div className="mb-0">
                <a
                  href="/ceres-html-free/?page=account/overview"
                  className="text-dark fw-bolder text-hover-primary fs-3"
                >
                  Olga Narvaez
                </a>
                <div className="text-muted fs-6 fw-bolder mt-1">
                  Frontend Developer
                </div>
              </div>
            </div>
          </Col>
          <Col sm={6} md="4" lg="3" className="p-0 my-5">
            <div
              className="text-center tns-item tns-slide-active"
              id="tns1-item6"
            >
              <div className="octagon mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center maximillian"></div>
              <div className="mb-0">
                <a
                  href="/ceres-html-free/?page=account/overview"
                  className="text-dark fw-bolder text-hover-primary fs-3 "
                >
                  Maximillian Fernandez
                </a>
                <div className="text-muted fs-6 fw-bolder mt-1">
                  Frontend Developer <br />
                  UX/UI Designer
                </div>
              </div>
            </div>
          </Col>
          <Col sm={6} md="12" lg="3" className="p-0 my-5">
            <div
              className="text-center tns-item tns-slide-active"
              id="tns1-item6"
            >
              <div className="octagon mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center joseph"></div>
              <div className="mb-0">
                <a
                  href="/ceres-html-free/?page=account/overview"
                  className="text-dark fw-bolder text-hover-primary fs-3 "
                >
                  Joseph Junkee
                </a>
                <div className="text-muted fs-6 fw-bolder mt-1">CEO</div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default OurTeam;
