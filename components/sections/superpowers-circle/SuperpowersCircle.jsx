import React from "react";

const SuperpowersCircle = () => {
  return (
    <section className="position-relative">
      <div className="mt-20 p-10">
        <div className="text-center mb-10">
          <h2 className="display-6 mb-0 fw-bolder text-primary">
            Super Power in your circle
          </h2>
          <hr className="text-primary mx-auto mt-2" size="5" width="60px" />
          <p className=" mb-0 text-muted lh-base fs-4 w-50 text-center mx-auto fw-400">
            Once inside, you can invite friends, family and co-workers to
            discover their Superpowers. Then, using the free dashboard, you can
            choose to see how your personality styles interact with each other
            and work best together.
          </p>
        </div>
      </div>
      <div className="supowepowers-section">
        <img
          src="/superpowers-circle/bg-image.png"
          alt="Landscape picture"
          className="superpowers-img "
        />
      </div>
    </section>
  );
};

export default SuperpowersCircle;
