import Image from "next/image";
import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const IndexingInCompany = () => {
  return (
    <Container className="p-0">
      <div className="pt-5 pb-0 px-5">
        <Card className=" shadow-sm my-20 pt-10 pb-0">
          <div className="text-center mb-0">
            <h2 className="display-6 mb-0 fw-bolder">
              Indexing in Your Company
            </h2>
            <hr className="text-danger mx-auto mt-2" size="5" width="60px" />
          </div>
          <Row>
            <Col md={6} className="p-0">
              <div className="d-flex align-items-center px-20 text-left">
                <Image
                  src="/how-it-works/get-culture.svg"
                  alt="Landscape picture"
                  width={180}
                  height={150}
                />
                <div className="ps-5">
                  <a
                    href="/ceres-html-free/?page=account/overview"
                    className="text-gray-800 fw-boldest fs-4 text-hover-primary mb-1"
                  >
                    Well Being Index
                  </a>
                  <span className="text-gray-400 d-block mt-3">
                    ow healthy is the company culture? Do the employees feel
                    free to expand and grow? Is the company set up to
                    successfully support the goals of the leadership?
                  </span>
                </div>
              </div>
            </Col>
            <Col md={6} className="p-0 mt-10 mt-md-0">
              <div className="d-flex align-items-center px-20 text-end">
                <div className="pe-5">
                  <a
                    href="/ceres-html-free/?page=account/overview"
                    className="text-gray-800 fw-boldest fs-4 text-hover-primary mb-1 d-flex justify-content-end"
                  >
                    Engagement Index
                  </a>
                  <span className="text-gray-400 d-block mt-3">
                    How are employees experiencing the company’s culture? Does
                    this company value the strengths of diversity? Are employees
                    natural strengths being used to the best of their abilities?
                  </span>
                </div>
                <Image
                  src="/how-it-works/create-team.svg"
                  alt="Landscape picture"
                  width={180}
                  height={150}
                />
              </div>
            </Col>
          </Row>
          <div className="text-center">
            <Button variant="danger" className="btn btn-danger mt-7 mb-10">
              Get Started for Free
            </Button>
          </div>
        </Card>
      </div>
    </Container>
  );
};

export default IndexingInCompany;
