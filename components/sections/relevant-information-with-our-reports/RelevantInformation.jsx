import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const RelevantInformation = () => {
  return (
    <div className="mt-15 position-relative p-10">
      <img
        src="/relevant-information-with-our-reports/bg.png"
        alt="Landscape picture"
        className="relevant-information-bg d-none d-sm-none d-md-none d-lg-block"
      />
      <Container className="relevant-information p-0">
        <div className="text-center mb-10">
          <h2 className="display-6 mb-0 fw-bolder">
            Essential information with comprehensive reports
          </h2>
          <hr className="text-danger mx-auto mt-2" size="5" width="60px" />
          <p className="text-muted lh-base fs-5">
            The map of the DNA of the company–– the individual personality
            dynamics that lie at the core of your investment success.
          </p>
        </div>
        <Row>
          <Col lg={6} className="bg-white p-0">
            <div className="d-flex align-items-center px-10 mt-10 py-3 bg-hover-light-info">
              <div className="symbol symbol-50px me-2">
                <span className="symbol-label bg-light-primary">
                  <i className="fa fa-user text-primary fa-lg"></i>
                </span>
              </div>
              <div className="ps-3">
                <span className="text-gray-800 fw-boldest fs-4 text-hover-primary mb-1">
                  Company Cultural Fingerprint
                </span>
                <span className="text-gray-400 d-block">
                  What do the combined traits and personalities of the
                  organization look like together? What are their
                </span>
              </div>
            </div>
            <div className="d-flex align-items-center px-10 mt-10 py-3 bg-hover-light-info">
              <div className="symbol symbol-50px me-2">
                <span className="symbol-label bg-light-info">
                  <i className="fa fa-users text-info fa-lg"></i>
                </span>
              </div>
              <div className="ps-3">
                <span className="text-gray-800 fw-boldest fs-4 text-hover-primary mb-1">
                  Vision Alignment
                </span>
                <span className="text-gray-400 d-block">
                  Do the leadership team’s collective traits best serve the
                  company’s vision and growth goals? What are the strengths and
                  limitations of their individual and aggregate alignments? How
                  can this ratio be balanced and enhanced?
                </span>
              </div>
            </div>
            <div className="d-flex align-items-center px-10 mt-10 py-3 bg-hover-light-info">
              <div className="symbol symbol-50px me-2">
                <span className="symbol-label bg-light-danger">
                  <i className="fa fa-chart-pie text-danger fa-lg"></i>
                </span>
              </div>
              <div className="ps-3">
                <span className="text-gray-800 fw-boldest fs-4 text-hover-primary mb-1">
                  Attrition Risk Inventory
                </span>
                <span className="text-gray-400 d-block">
                  What is the balance of employee retention versus flight risk?
                  Is there a high turnover probability? How can this risk be
                  mitigated?
                </span>
              </div>
            </div>
            <div className="d-flex align-items-center px-10 mt-10 py-3 bg-hover-light-info">
              <div className="symbol symbol-50px me-2">
                <span className="symbol-label bg-light-success">
                  <i className="fa-solid fa-people-arrows-left-right text-success fa-lg"></i>
                </span>
              </div>
              <div className="ps-3">
                <span className="text-gray-800 fw-boldest fs-4 text-hover-primary mb-1">
                  Cultural Adaptability Quotient
                </span>
                <span className="text-gray-400 d-block">
                  How adaptable is the personnel force? As a group, how well
                  will they handle change?
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RelevantInformation;
