import Image from "next/image";
import React from "react";
import CarouselApp from "../carousel-app/CarouselApp";
import { Button, Container } from "react-bootstrap";

const DidYouKnow = () => {
  return (
    <div className="bg-light-secondary">
      <div className="h-100px h-lg-150px bgi-no-repeat bgi-position-x-center bgi-position-y-top bgi-size-cover dark-top-curved-bg"></div>
      <div className="p-0 text-center">
        <Container className="p-0">
          <div className="text-center mb-0">
            <h2 className="display-6 mb-0 fw-bolder text-primary">
              Did you know that you have Superpowers?
            </h2>
            <hr className="text-primary mx-auto mt-2" size="5" width="60px" />
            <p className=" mb-0 text-muted lh-base fs-4 w-50 text-center mx-auto fw-400">
              Everyone does. They are an innate part of your personality. But
              for most, they lie dormant. Not anymore.
            </p>
            <p className="text-muted lh-base fs-4 w-50 text-center mx-auto">
              Take our 20 minute test and discover where your genius lies.
            </p>
          </div>
          <CarouselApp/>
          <Button className="btn btn-gradient mt-8 mb-15 px-20 rounded-pill fs-3">
            <span className="mx-10">TAKE THE TEST NOW</span>
          </Button>
        </Container>
      </div>
      <div className="h-100px h-lg-150px bgi-no-repeat bgi-position-x-center bgi-position-y-top bgi-size-cover dark-bottom-curved-bg"></div>
    </div>
  );
};

export default DidYouKnow;
