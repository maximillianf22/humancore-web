import Image from "next/image";
import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const PrivacyPolicy = () => {
  return (
    <Container className="p-0 mb-20">
      <div className="px-lg-20 py-15 bg-gradient-blue rounded-3 mt-20">
        <Card className="p-10 px-lg-20 bg-transparent text-white">
          <div className="mb-0">
            <h2 className="display-6 mb-10 fw-bolder text-white">
              We respect your privacy
            </h2>
            <p className="fw-light text-secondary">
              This information is yours. We will never sell, or share, anything
              without your permission.
            </p>

            <p className="fw-light text-secondary">
              Our goal is the advancement of the human spirit through self
              analysis and celebration. We do what we do, because we believe in
              humanity.
            </p>

            <p className="fw-light text-secondary">
              We believe in you. And we believe in everything that you are
              capable of.
            </p>

            <p className="fw-light text-secondary">
              And this belief is backed by 20+ years of experience in
              neuro-diversity, human capital management technology, digital
              production innovation, talent acquisition, and extensives models
              of, and research in, the human psyche. This is all combined with
              robust ai technology which gives us the ability to bring your
              Superpowers to you, along with information on how to use them to
              expand into your best and brightest self.
            </p>
            <p className="fw-light text-secondary">
              We want your shine to illuminate the world, which gives others
              permission to do the same, and truly makes the world a brighter
              place.
            </p>
          </div>
        </Card>
      </div>
    </Container>
  );
};

export default PrivacyPolicy;
