import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const WhatClientSays = () => {
  return (
    <Container className="mt-5 py-10 px-0">
      <div className="p-10">
        <div className="text-center">
          <h2 className="display-6 mb-0 fw-bolder">What Our Clients Say</h2>
          <hr className="text-danger mx-auto mt-2" size="5" width="60px" />
          <p className="text-muted lh-base fs-5">
            Lorem Ipsum is simply dummy text of the printing and
            <br /> typesetting industry loremp ipum great app
          </p>
        </div>
        <Row>
          <Col md={4} className="p-0 my-15">
            <div className="px-10">
              <div className="rate d-flex mb-7">
                <i className="fa fa-star text-warning me-1"></i>
                <i className="fa fa-star text-warning me-1"></i>
                <i className="fa fa-star text-warning me-1"></i>
                <i className="fa fa-star text-warning me-1"></i>
                <i className="fa fa-star text-warning me-1"></i>
              </div>
              <h4 className="fw-bolder">
                More Trust in My Investment Decisions
              </h4>
              <p className="fs-5 text-muted lh-2">
                Having deep, extensive insight on my potential investment’s team
                has helped me make significantly better investment decisions.
              </p>
              <div className="d-flex mt-7 my-auto">
                <img
                  src="https://preview.keenthemes.com/ceres-html-free/assets/media/avatars/150-26.jpg"
                  alt=""
                  className="h-50px rounded-circle"
                />
                <div className=" mt-2 ms-3">
                  <h5 className="mb-0 fs-6 fw-bold">Paul Miles</h5>
                  <p className="fs-7 text-muted">Development Lead</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4} className="p-0 my-15">
            <div className="px-10">
              <div className="rate d-flex mb-7">
                <i className="fa fa-star text-warning me-1"></i>
                <i className="fa fa-star text-warning me-1"></i>
                <i className="fa fa-star text-warning me-1"></i>
                <i className="fa fa-star text-warning me-1"></i>
                <i className="fa fa-star text-warning me-1"></i>
              </div>
              <h4 className="fw-bolder">Unparalleled Insight</h4>
              <p className="fs-5 text-muted lh-2">
                Learning more about my own team, and companies inside my current
                portfolio, has helped me better advise my CEOs. We all now
                consider Diligentsia an essential part of our investment and
                management decisions
              </p>
              <div className="d-flex mt-7 my-auto">
                <img
                  src="https://preview.keenthemes.com/ceres-html-free/assets/media/avatars/150-26.jpg"
                  alt=""
                  className="h-50px rounded-circle"
                />
                <div className=" mt-2 ms-3">
                  <h5 className="mb-0 fs-6 fw-bold">Paul Miles</h5>
                  <p className="fs-7 text-muted">Development Lead</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4} className="p-0 my-15">
            <div className="px-10">
              <div className="rate d-flex mb-7">
                <i className="fa fa-star text-warning me-1"></i>
                <i className="fa fa-star text-warning me-1"></i>
                <i className="fa fa-star text-warning me-1"></i>
                <i className="fa fa-star text-warning me-1"></i>
                <i className="fa fa-star text-warning me-1"></i>
              </div>
              <h4 className="fw-bolder">Sleeping Much Better At Night</h4>
              <p className="fs-5 text-muted lh-2">
                No more waking up in a cold sweat in the middle of the night
                wondering if I missed something. Working with Diligentsia, now I
                know I have been as thorough as I can possibly be.
              </p>
              <div className="d-flex mt-7 my-auto">
                <img
                  src="https://preview.keenthemes.com/ceres-html-free/assets/media/avatars/150-26.jpg"
                  alt=""
                  className="h-50px rounded-circle"
                />
                <div className=" mt-2 ms-3">
                  <h5 className="mb-0 fs-6 fw-bold">Paul Miles</h5>
                  <p className="fs-7 text-muted">Development Lead</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default WhatClientSays;
