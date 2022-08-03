import Image from "next/image";
import React from "react";
import { Container } from "react-bootstrap";

const WeMakeCompanies = () => {
  return (
    <div className="bg-purple">
      <div className="h-100px h-lg-150px bgi-no-repeat bgi-position-x-center bgi-position-y-top bgi-size-cover dark-top-curved-bg"></div>
      <div className="p-0">
        <Container className="p-0">
          <div className="text-center mb-10">
            <h2 className="display-6 mb-0 fw-bolder text-white">
              Override guesswork with dynamic insight
            </h2>
            <hr className="text-danger mx-auto mt-2" size="5" width="60px" />
            <p className="text-muted lh-base fs-5">
              with a system derived from 20+ years of experience in
              neuro-diversity, human capital management technology, digital
              production innovation and talent acquisition, combined with robust
              ai technology.
            </p>
          </div>
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-between mb-5 mx-auto w-xl-900px">
            <div className="d-flex flex-column align-items-center justify-content-center h-150px w-150px h-lg-200px w-lg-200px m-3 bgi-no-repeat bgi-position-center bgi-size-contain bg-octagon">
              <i className="fa-solid fa-boxes-packing fa-2x mb-2 text-white"></i>
              <div className="display-6 fw-bolder text-white d-flex align-items-center justify-content-center">
                <div className="min-w-70px counted">700+</div>
              </div>
              <span className="text-muted">Know Companies</span>
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center h-150px w-150px h-lg-200px w-lg-200px m-3 bgi-no-repeat bgi-position-center bgi-size-contain bg-octagon">
              <i className="fa-solid fa-chart-pie fa-2x mb-2 text-white"></i>
              <div className="display-6 fw-bolder text-white d-flex align-items-center justify-content-center">
                <div className="min-w-70px counted">700+</div>
              </div>
              <span className="text-muted">Statistic Reports</span>
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center h-150px w-150px h-lg-200px w-lg-200px m-3 bgi-no-repeat bgi-position-center bgi-size-contain bg-octagon">
              <i className="fa-solid fa-rectangle-list fa-2x mb-2 text-white"></i>
              <div className="display-6 fw-bolder text-white d-flex align-items-center justify-content-center">
                <div className="min-w-70px counted">700+</div>
              </div>
              <span className="text-muted">Diferent Tests</span>
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center h-150px w-150px h-lg-200px w-lg-200px m-3 bgi-no-repeat bgi-position-center bgi-size-contain bg-octagon">
              <i className="fa-solid fa-user-tie fa-2x mb-2 text-white"></i>
              <div className="display-6 fw-bolder text-white d-flex align-items-center justify-content-center">
                <div className="min-w-70px counted">20+</div>
              </div>
              <span className="text-muted">Years of Experience</span>
            </div>
          </div>
          <p className="text-muted lh-base fs-5 w-75 text-center mx-auto fs-3 mb-6">
            <span className="text-white fw-bolder">&ldquo;</span>Having a good
            and <span className="text-white fw-bolder">Great Culture</span> in
            your company is very important in our times, because you have
            employees more committed to the company.
            <span className="text-white fw-bolder">&ldquo;</span>
          </p>
          <div className="text-center text-muted fs-4 justify-content-center align-items-center d-flex">
            <Image
              src="/we-make-better-companies/joe-icon.png"
              alt="Landscape picture"
              width={30}
              height={30}
            />
            <span className="text-info my-auto ms-2">Joseph Juhnke</span>,
            Humancore CEO
          </div>
        </Container>
      </div>
      <div className="h-100px h-lg-150px bgi-no-repeat bgi-position-x-center bgi-position-y-top bgi-size-cover dark-bottom-curved-bg"></div>
    </div>
  );
};

export default WeMakeCompanies;
