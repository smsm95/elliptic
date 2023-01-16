import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import SectionTitle from "./SectionTitle";

const About = ({ subTitle, titleFirst, titleSecond }) => {
  return (
    <section
      className="about__area fix p-relative pt-120 pb-120 about__pb"
      id="about"
    >
      <Container>
        <Row>
          <Col xxl={7} xl={8} lg={10} md={10}>
            <div className="about__title mb-80">
              <SectionTitle
                subTitle={subTitle}
                titleFirst={titleFirst}
                titleSecond={titleSecond}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xl={6} lg={6}>
            <div className="about__thumb">
              <div className="about__thumb-shape">
                <img
                  className="about-s-1 d-none d-lg-block"
                  src="/assets/images/shape/about/about-s-1.png"
                  alt=""
                />
                <img
                  className="about-s-2 d-none d-md-block"
                  src="/assets/images/shape/about/about-s-2.png"
                  alt=""
                />
              </div>
              <div className="about__thumb-image">
                <img src="/assets/images/about/about-img.jpg" alt="" />
              </div>
            </div>
          </Col>
          <Col xl={{ span: 5, offset: 1 }} lg={6}>
            <div className="about__content">
              <p>
                At Elliptic we deliver high quality products that enable users
                to participate in the digital economy. <br /> We focus on
                delivering secure, reliable and user friendly platforms that
                serve a wide and diverse base of users all over the globe
                adhering to these core practices
              </p>

              <ul>
                <li>Censorship Resistant</li>
                <li>Advocate Privacy</li>
                <li>Execution Quality</li>
              </ul>
            </div>
            <div className="about__counter-bg d-none d-sm-block">
              <div className="about__counter-content d-flex">
                <div className="about__counter-text text-center">
                  <h2>
                    <CountUp end={500} duration={5} />k
                  </h2>
                  <p>Lines of code</p>
                </div>
                <div className="about__counter-text text-center">
                  <h2>
                    <CountUp end={4} duration={5} />
                  </h2>
                  <p>Projects Delivered</p>
                </div>
                <div className="about__counter-text text-center">
                  <h2>
                    <CountUp end={3} duration={5} />k
                  </h2>
                  <p>Total Coffees</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
