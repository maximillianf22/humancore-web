import React from "react";
import { Container, Carousel } from "react-bootstrap";
import Image from "next/image";

const CarouselApp = () => {
  return (
    <Container className="d-none d-sm-none d-lg-block">
      <Carousel className="mt-10" variant="dark">
        <Carousel.Item className="mx-auto text-center justify-content-center">
          <Image
            src="/carousel/img-1.png"
            alt="Landscape picture"
            width={1000}
            height={580}
          />
        </Carousel.Item>
        <Carousel.Item className="mx-auto text-center justify-content-center">
          <Image
            src="/carousel/img-1.png"
            alt="Landscape picture"
            width={1000}
            height={580}
          />
        </Carousel.Item>
        <Carousel.Item className="mx-auto text-center justify-content-center">
          <Image
            src="/carousel/img-1.png"
            alt="Landscape picture"
            width={1000}
            height={580}
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default CarouselApp;
