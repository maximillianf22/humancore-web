import React from "react";
import { Button } from "react-bootstrap";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const HeaderImg = () => {

  const particlesInit = async (main) => {
    console.log(main);

    await loadFull(main);
  };
  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <section className="header-bg valign-q mb-10">
      <div className="front bg-img">
      <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
      </div>
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
