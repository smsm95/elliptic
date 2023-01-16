import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

const Contact = () => {
  return (
    <section className="contact__area fix p-relative pt-120 pb-190">
      <Container>
        <Row className="align-items-center">
          <Col xl={6} lg={7} md={8}>
            <div className="contact__info">
              <div className="contact__info-content d-flex mb-30">
                <div className="contact__info-icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="contact__info-title">
                  <h5>Office Address</h5>
                  <p>1301 Arenco Tower, Dubai Internet City, Dubai, UAE</p>
                </div>
              </div>
              <div className="contact__info-content d-flex mb-30">
                <div className="contact__info-icon">
                  <i className="fa-solid fa-phone green"></i>
                </div>
                <div className="contact__info-title">
                  <h5>Phone</h5>
                  <p>
                    <Link href="tel:+971585301011">
                      <a>+971585301011</a>
                    </Link>
                  </p>
                  <p>
                    <Link href="tel:+97145481775">
                      <a>+97145481775</a>
                    </Link>
                  </p>
                </div>
              </div>
              <div className="contact__info-content d-flex">
                <div className="contact__info-icon">
                  <i className="fa-solid fa-paper-plane blue"></i>
                </div>
                <div className="contact__info-title">
                  <h5>Email us</h5>
                  <p>
                    <Link href="mailto:office @elliptic.com">
                      <a>office@elliptic.com</a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={{ span: 5, offset: 1 }} lg={5} md={4}>
            <div className="contact__title">
              <h2 className="section__title">
                <span>Ready to get in </span>
                Touch
              </h2>
              <div className="contact__title-icon">
                <Link href="#contact">
                  <a>
                    <i className="fa-solid fa-arrow-down-long"></i>
                  </a>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
