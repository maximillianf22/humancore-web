import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const KnowMore = () => {
  return (
    <div className="mt-15 position-relative p-10">
      <img
        src="/know-more/bg.png"
        alt="Landscape picture"
        className="relevant-information-bg d-none d-sm-none d-md-none d-lg-block"
      />
      <Container className="relevant-information p-0">
        <Row>
          <Col lg={5} className="bg-white p-0 offset-md-7">
            <div className=" mb-5">
              <h2 className="display-6 mb-0 fw-bolder text-primary">
                Know more about the aspects of what makes you tick...
              </h2>
              <hr className="text-primary mt-2" size="5" width="60px" />
              <p className=" mb-0 text-muted lh-base fs-4  mx-auto fw-400">
                Why you make the decisions you do, and who you work well with
                (or don’t). You’ll also learn:
              </p>
            </div>
            <div className="d-flex align-items-center px-10 mt-0 py-3">
              <ul className="list-unstyled">
                <li className=" text-muted fw-400 fs-5 mb-5">
                  <i className="fas fa-circle text-secondary me-3 fa-lg"></i>{" "}
                  Your Personality Style Snapshot
                </li>
                <li className=" text-muted fw-400 fs-5 mb-5">
                  <i className="fas fa-circle text-secondary me-3 fa-lg"></i>{" "}
                  The Special and Unique Way You Shine
                </li>
                <li className=" text-muted fw-400 fs-5 mb-5">
                  <i className="fas fa-circle text-secondary me-3 fa-lg"></i>{" "}
                  Your Core Wiring and How it Affects Your Life
                </li>
                <li className=" text-muted fw-400 fs-5 mb-5">
                  <i className="fas fa-circle text-secondary me-3 fa-lg"></i>{" "}
                  Your Ideal Work Environment
                </li>
                <li className=" text-muted fw-400 fs-5 mb-5">
                  <i className="fas fa-circle text-secondary me-3 fa-lg"></i>{" "}
                  Your Leadership Style
                </li>
                <li className=" text-primary fw-bold fs-5 mb-5">
                  And much, much, more!
                </li>
                <li>
                  <Button className="btn btn-gradient mt-8 mb-15 px-20 rounded-pill fs-5">
                    <span className="mx-10">LEARN MY STYLE</span>
                  </Button>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default KnowMore;
