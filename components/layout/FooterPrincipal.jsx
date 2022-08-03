import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const FooterPrincipal = () => {
  return (
    <footer className="p-0">
      <Container className="p-0">
        <div className="p-10">
          <div className="p-0 positon-relative pt-10 zindex-1">
            <div className="d-flex align-items-stretch justify-content-between flex-wrap flex-md-nowrap shadow position-relative zindex-2 rounded-3 bg-gradient-green">
              <div className="d-flex flex-column justify-content-start align-items-start my-2 me-5 px-10 py-6 p-lg-10 rounded-3 ">
                <div className="display-6 text-white mb-2">
                  <span className="fw-bolder">
                    Eliminate the blind spot. Start with us today,
                  </span>
                  <span className="fw-light">GET FREE INSIGHT REPORT!</span>
                </div>

                <div className="fs-5 text-white opacity-75">
                  Receive Complimentary Report
                </div>
              </div>

              <div className="subscribe-form d-flex align-items-center m-0 bgi-no-repeat bgi-position-y-bottom bgi-position-x-right p-8 p-lg-12 page_speed_561446380">
                <Button
                  variant="outline-success"
                  className="border border-2 text-white text-nowrap"
                >
                  Get My Report
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="h-150px bgi-no-repeat bgi-position-x-center bgi-position-y-top bgi-size-cover dark-top-curved-bg"></div>
      <div className="bg-purple">
        <Container className="p-0">
          <div className="px-10">
            <Row>
              <Col lg="8" className="p-0 mb-10">
                <div className="px-10">
                  <div className="border-dashed-light p-7 rounded-3">
                    <h4 className="text-white fw-bolder fs-3">
                      Receive Complimentary Report
                    </h4>
                    <p className="text-muted mb-0 fw-light fs-5">
                      Email us to
                      <span className="text-white ms-1">
                        support@diligetsia.com
                      </span>
                    </p>
                  </div>
                  <div className="border-dashed-light p-7 rounded-3 mt-10">
                    <h4 className="text-white fw-bolder fs-3">
                      Geek Out on Productivity and Personality
                    </h4>
                    <p className="text-muted mb-0 fw-light fs-5">
                      It’s our newsletter for the neuro-nerd personality
                      abnormality…Like Us.
                      <span className="text-white">Yes Please!</span>
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg="4" className="p-0">
                <div className="px-10">
                  <Col lg="6" className="p-0">
                    <div className="p-0"></div>
                  </Col>
                  <Col lg="6" className="p-0">
                    <ul className="list-unstyled text-white">
                      <li className="mb-6 text-white fw-bolder">
                        Stay Connected
                      </li>
                      <li className="mb-5 text-muted">
                        <i className="fab fa-facebook me-2 btn px-1 py-0 btn-light-facebook"></i>
                        Facebook
                      </li>
                      <li className="mb-5 text-muted">
                        <i className="fab fa-youtube me-2 btn px-1 py-0 btn-light-youtube"></i>
                        Youtube
                      </li>
                      <li className="mb-5 text-muted">
                        <i className="fab fa-twitter me-2 btn px-1 py-0 btn-light-twitter"></i>
                        Twitter
                      </li>
                      <li className="mb-5 text-muted">
                        <i className="fab fa-linkedin me-2 btn px-1 py-0 btn-light-linkedin"></i>
                        LinkedIn
                      </li>
                      <li className="mb-5 text-muted">
                        <i className="fab fa-instagram me-2 btn px-1 py-0 btn-light-instagram"></i>
                        Instagram
                      </li>
                    </ul>
                  </Col>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
        <Container className="py-5 mt-5 border-light-dark px-0">
          <div className="d-flex my-auto px-10">
            <div>
              <img src="/logo-footer.png" alt="" />
              <span className="ms-10 my-auto text-muted">
                Copyright © Humancore 2022
              </span>
            </div>
            <div className="ms-auto my-auto d-none d-sm-none d-md-none d-lg-block">
              <span className="text-muted mx-3">Privacy Summary</span>
              <span className="text-muted mx-3">Privacy Policy</span>
              <span className="text-muted mx-3">Copyright Policy</span>
              <span className="text-muted mx-3">Terms of Use</span>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default FooterPrincipal;
