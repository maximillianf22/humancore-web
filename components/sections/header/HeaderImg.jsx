import React from "react";
import { Button } from "react-bootstrap";

const HeaderImg = () => {
  
  return (
    <section className="header-bg position-relative container">
      <div className="header-overlay">
        <span className="text-danger header-text-animate display-6 fw-bold mb-2">
          Discover Your Innate <br />
          SUPERPOWERS
        </span>
        <h2 className="text-white fs-2 lh-base fw-light">
          With Our Quick and Completely Free <br/>
          Personality Assessment
        </h2>
        <Button variant="danger" className="btn btn-danger mt-8 mb-6 px-20 rounded-pill">
          Start Now
        </Button>
        <div className="mt-10 d-flex justify-content-center overflow-hidden">
          <img
            src="/brands/AON.png"
            alt=""
            width="auto"
            height="50"
            className="mx-7 my-auto"
          />
          <img
            src="/brands/ASPNetZero.png"
            alt=""
            width="auto"
            height="35"
            className="mx-7 my-auto"
          />
          <img
            src="/brands/Fujifilm.png"
            alt=""
            width="auto"
            height="20"
            className="mx-7 my-auto"
          />
          <img
            src="/brands/HP.png"
            alt=""
            width="auto"
            height="40"
            className="mx-7 my-auto"
          />
          <img
            src="/brands/KPMG.png"
            alt=""
            width="auto"
            height="90"
            className="mx-7 my-auto"
          />
          <img
            src="/brands/NASA.png"
            alt=""
            width="auto"
            height="40"
            className="mx-7 my-auto"
          />
          <img
            src="/brands/Truman University.png"
            alt=""
            width="auto"
            height="35"
            className="mx-7 my-auto"
          />
          <img
            src="/brands/Vodafone.png"
            alt=""
            width="auto"
            height="80"
            className="mx-7 my-auto"
          />
        </div>
      </div>
      <div className="header-polygon">
        <svg
          width="100%"
          height="56px"
          viewBox="0 0 100 100"
          version="1.1"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C16.6666667,66 33.3333333,99 50,99 C66.6666667,99 83.3333333,66 100,0 L100,100 L0,100 L0,0 Z"
            fill="white"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeaderImg;
