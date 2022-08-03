import React from "react";
import { Button } from "react-bootstrap";

const HeaderImg = () => {
  
  return (
    <section className="header-bg valign-q mb-10">
      <div className="front bg-img"></div>
      <div className="container header-overlay my-auto ontop pt-20">
        <span className="text-danger header-text-animate display-5 fw-bold mb-2">
          Discover Your Innate <br />
          SUPERPOWERS
        </span>
        <h2 className="text-muted fs-2 lh-base fw-400">
          With Our Quick and Completely Free <br/>
          Personality Assessment
        </h2>
        <Button className="btn btn-gradient mt-8 mb-6 px-20 rounded-pill fs-3">
          <span className="mx-10">START NOW</span>
        </Button>
      </div>
    </section>
  );
};

export default HeaderImg;
