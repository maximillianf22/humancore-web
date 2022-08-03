import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

const FooterPrincipal = () => {

  if (typeof window !== 'undefined') {
    document.querySelector('.submit-email').addEventListener('mousedown', (e) => {
      e.preventDefault();
      document.querySelector('.subscription').classList.add('done');
    });
  }
  
  return (
    <footer className="p-0">
      <div className="bg-light-gray">
        <Container>
          <div className="p-20">
            <Row>
              <Col lg="6" className="p-0">
              <span className="text-muted">
                User Contact
              </span>
              <h4 className="fw-bolder">Contact Us for those interested.</h4>
              <div className="pe-20">
              <span className="text-muted">
                The standard chunk of Lorem Ipsum used since the is reproduced below for those interested.
              </span>
              </div>
              </Col>
              <Col lg="6" className="p-0">
                <div className="content-suscribe ms-auto">
                  <form className="subscription">
                    <input className="add-email" type="email" placeholder="Enter your email address" />
                    <button className="submit-email btn-grad" type="button">
                      <span className="before-submit">CONTACT US</span>
                      <span className="after-submit">Thank you for contact us!</span>
                    </button>
                  </form>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div className="bg-blue">
      <Container className="py-8">
        <div className="px-10">
          <Row>
            <Col lg="6" className="p-0">
              <Image
                src="/logo.svg"
                alt="Landscape picture"
                width={200}
                height={45}
                className="h-15px h-lg-20px logo-default"
                />
            </Col>
            <Col lg="6" className="p-0">
              <p className="text-white text-end">&copy; 2022 humancore.com</p>
            </Col>
          </Row>
        </div>
      </Container>
        {/* <Container className="pt-18">
          <div className="px-10">
            <Row>
              <Col lg="3" className="p-0">                
                <ul>
                  <li>
                    <Image
                      src="/logo.svg"
                      alt="Landscape picture"
                      width={200}
                      height={45}
                      className="h-15px h-lg-20px logo-default"
                    />
                  </li>
                  <li>
                    <div className="mt-8">
                      <p className="text-muted pe-10">
                        At HUMANCORE it’s our mission to inspire growth in humankind through careful awareness-focused assessment and inspired growth programs.
                      </p>
                    </div>
                  </li>
                </ul>
              </Col>
              <Col lg="2" className="p-0 mb-10">
                <ul className="list-unstyled text-white">
                  <li className="mb-6 text-white fw-bolder">
                    INFORMATION
                  </li>
                  <li className="mb-8 text-muted">
                    More About US
                  </li>
                  <li className="mb-8 text-muted">
                    Contact Us
                  </li>
                  <li className="mb-8 text-muted">
                    Latest News
                  </li>
                  <li className="mb-8 text-muted">
                    Our Sitemap
                  </li>
                </ul>
              </Col>
              <Col lg="2" className="p-0 mb-10">
                <ul className="list-unstyled text-white">
                  <li className="mb-6 text-white fw-bolder">
                    FOOTER MENU
                  </li>
                  <li className="mb-8 text-muted">
                    Facebook Profile
                  </li>
                  <li className="mb-8 text-muted">
                    LinkedIn Profile
                  </li>
                  <li className="mb-8 text-muted">
                    Terms & Conditions
                  </li>
                </ul>
              </Col>
              <Col lg="2" className="p-0 mb-10">
                <ul className="list-unstyled text-white">
                  <li className="mb-6 text-white fw-bolder">
                    USEFUL LINKS
                  </li>
                  <li className="mb-8 text-muted">
                    About Humancore
                  </li>
                  <li className="mb-8 text-muted">
                    Our Great Team
                  </li>
                  <li className="mb-8 text-muted">
                    Security
                  </li>
                </ul>
              </Col>
              <Col lg="3" className="p-0">
                <ul className="list-unstyled text-white">
                  <li className="mb-6 text-white fw-bolder">
                    ABOUT HUMANCORE
                  </li>
                  <li>
                    <span className="text-muted">
                      This is all combined with robust ai technology which gives us the ability to bring your Superpowers to you, along with information on how to use them to expand into your best and brightest self. 
                    </span> 
                  </li>
                  <li className="mt-10 text-white">
                    www.humancore.ai
                  </li>
                </ul>
                <ul className="list-unstyled text-white list-group list-group-horizontal">
                  <li className="mb-5 text-muted">
                    <i className="fab fa-twitter me-2 btn px-1 py-0 btn-light-twitter"></i>
                  </li>
                  <li className="mb-5 text-muted">
                    <i className="fab fa-linkedin me-2 btn px-1 py-0 btn-light-linkedin"></i>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        </Container> */}
      </div>
    </footer>
  );
};

export default FooterPrincipal;
