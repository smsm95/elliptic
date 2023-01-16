import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import SectionTitle from "./SectionTitle";

const Facts = () => {
  return (
    <section className="facts__area fix p-relative pt-120 pb-120 facts__pb">
      <Container>
        <Row>
          <Col xxl={6} xl={5} lg={5} md={8} sm={10}>
            <div className="facts__thumb">
              <div className="facts__thumb-shape">
                <img
                  className="facts-s-1"
                  src="/assets/images/shape/facts/facts-s-1.png"
                  alt=""
                />
                <img
                  className="facts-s-2"
                  src="/assets/images/shape/facts/facts-s-2.png"
                  alt=""
                />
                <img
                  className="facts-s-3"
                  src="/assets/images/shape/facts/facts-s-3.png"
                  alt=""
                />
                <img
                  className="facts-s-4 d-none d-md-block"
                  src="/assets/images/shape/facts/facts-s-4.png"
                  alt=""
                />
              </div>
              {/* <div className="facts__thumb-image">
                <img src="/assets/images/facts/facts-img.png" alt="" />
              </div> */}
            </div>
          </Col>
          <Col xxl={6} xl={7} lg={7} md={9}>
            <div className="facts__content">
              <div className="facts__content-text">
                <SectionTitle
                  subTitle="The vision"
                  titleFirst="The motive behind "
                  titleSecond="what we do"
                />
                <p>
                  Elliptic was founded on the belief that bitcoin will
                  revolutionize the world and provide hope, inclusion, freedom
                  and prosperity for everyone. As there are already many great
                  projects in regards to wallets, bitcoin development, scaling
                  solutions like lightning and many other areas we have decided
                  to focus on closing bitcoins digital economy loop by giving
                  everyone the opportunity to earn bitcoin using their
                  creativity.
                </p>
              </div>
              <div className="facts__counter-content d-flex">
                <div className="facts__counter-text">
                  <h5>Positivity</h5>
                  <p>
                    Providing an inclusive and positive environment within our
                    office and our platforms is part of our identity.
                  </p>
                </div>
                <div className="facts__counter-text">
                  <h5>Privacy</h5>
                  <p>
                    We endorse security and reliability, protecting our users is
                    our top priority.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Facts;
