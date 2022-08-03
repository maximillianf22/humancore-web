import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import Image from "next/image";

const HowWorks = () => {
  return (
    <div className="mt-10 p-10">
      <div className="text-center container">
        <h2 className="display-6 mb-0 fw-bolder">How it Works</h2>
        <hr className="text-danger mx-auto mt-2" size="5" width="60px" />
        <p className="text-muted lh-base fs-5">
          You´ve analyzed the assets, the balance sheet, the inventory, the
          code––your due diligence dossier is a mile long. But do you have a
          blind spot? We know successful angel and early series investments are
          more about the team than the product. But what makes a good team? A
          balanced culture composed of individuals working regularly in their
          zone of genius. Diligentsia uses AI technology to identify this
          balance ratio from the ground up––the individual––and provides the
          tools to perfect it.
        </p>
      </div>
      <Container className="p-0">
        <Row className="mt-5">
          <Col sm="6" md="6" className="p-0 text-center">
            <Card className="px-5 p-xl-15 px-xxl-20 bg-hover-light-info py-10 border m-4">
              <Image
                src="/how-it-works/create-team.svg"
                alt="Landscape picture"
                width={200}
                height={120}
              />
              <div className="d-flex m-auto mt-5">
                <div className="symbol symbol-40px symbol-circle me-4">
                  <span className="symbol-label bg-light-info">
                    <span className="svg-icon svg-icon-1 svg-icon-info fw-bold text-info fs-5">
                      1
                    </span>
                  </span>
                </div>
                <span className="my-auto fw-bolder fs-4">
                  Create Your Free Account
                </span>
              </div>
              <p className="mt-4 text-muted">
                Create your Account I.D. and Password and receive your free
                company dashboard. This will hold your, and your employees’
                assessment results and your company alignment findings
              </p>
            </Card>
          </Col>
          <Col sm="6" md="6" className="p-0 text-center">
            <Card className="px-5 p-xl-15 px-xxl-20 bg-hover-light-info py-10 border m-4">
              <Image
                src="/how-it-works/complete-test.svg"
                alt="Landscape picture"
                width={200}
                height={120}
              />
              <div className="d-flex m-auto mt-5">
                <div className="symbol symbol-40px symbol-circle me-2">
                  <span className="symbol-label bg-light-info">
                    <span className="svg-icon svg-icon-1 svg-icon-info fw-bold text-info fs-5">
                      2
                    </span>
                  </span>
                </div>
                <span className="my-auto fw-bolder fs-4">
                  Invite Team to Take Classifiers
                </span>
              </div>
              <p className="mt-4 text-muted">
                Your team will receive individualized invitations to take the
                three Diligentsia classifiers that will compose their
                assessment.
              </p>
            </Card>
          </Col>
          <Col md="6" className="p-0 text-center">
            <Card className="px-5 p-xl-15 px-xxl-20 bg-hover-light-info py-10 border m-4">
              <Image
                src="/how-it-works/get-culture.svg"
                alt="Landscape picture"
                width={200}
                height={120}
              />
              <div className="d-flex m-auto mt-5">
                <div className="symbol symbol-40px symbol-circle me-4">
                  <span className="symbol-label bg-light-info">
                    <span className="svg-icon svg-icon-1 svg-icon-info fw-bold text-info fs-5">
                      3
                    </span>
                  </span>
                </div>
                <span className="my-auto fw-bolder fs-4">
                  Complete All Classifiers
                </span>
              </div>
              <p className="mt-4 text-muted">
                All invited will complete the three classifier assessments
                designed to deep dive into the individual personality dynamics
                that lie at the core of you
              </p>
            </Card>
          </Col>
          <Col md="6" className="p-0 text-center">
            <Card className="px-5 p-xl-15 px-xxl-20 bg-hover-light-info py-10 border m-4">
              <Image
                src="/how-it-works/get-culture.svg"
                alt="Landscape picture"
                width={200}
                height={120}
              />
              <div className="d-flex m-auto mt-5">
                <div className="symbol symbol-40px symbol-circle me-4">
                  <span className="symbol-label bg-light-info">
                    <span className="svg-icon svg-icon-1 svg-icon-info fw-bold text-info fs-5">
                      4
                    </span>
                  </span>
                </div>
                <span className="my-auto fw-bolder fs-4">
                  Receive Dynamic Report
                </span>
              </div>
              <p className="mt-4 text-muted">
                You will receive extensive, research backed, ai supercharged
                insights on each team member, how they operate independently and
                interdependently, and how this unique combination affects team
                success ratios.
              </p>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HowWorks;
