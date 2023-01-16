import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from "./SectionTitle";
import ServiceItem from "./ServiceItem";

const SERVICE_DATA = [
  {
    serviceIcon: "/assets/images/icon/s-icon-3.png",
    serviceTitle: "Software Solutions",
    serviceDesc:
      "Development of custom softwares, integration of software with existing systems, and ongoing maintenance and support",
    serviceLink: "/services-details",
  },
  {
    serviceIcon: "/assets/images/icon/s-icon-4.png",
    serviceTitle: "Brand Building",
    serviceDesc:
      "Developing brand guidelines and creating visual identities, to crafting compelling messaging and executing targeted marketing campaigns",
    serviceLink: "/services-details",
  },
  {
    serviceIcon: "/assets/images/icon/s-icon-5.png",
    serviceTitle: "Content Monetization",
    serviceDesc:
      "Our company offers a comprehensive content monetization products designed to help content creators generate revenue from their work",
    serviceLink: "/services-details",
  },
];

const Services = ({ extraClass }) => {
  return (
    <section
      className={`services__area p-relative fix ${extraClass} pt-120 pb-90`}
      id="services"
    >
      <div className="services__shape">
        {/* <img
          className="services-s-1"
          src="/assets/images/shape/services/services-s-1.png"
          alt=""
        /> */}
        <img
          className="services-s-2"
          src="/assets/images/shape/services/services-s-2.png"
          alt=""
        />
        <img
          className="services-s-3"
          src="/assets/images/shape/services/services-s-3.png"
          alt=""
        />
      </div>
      <Container>
        <Row className="mb-55">
          <Col xl={6}>
            <div className="services__title">
              <SectionTitle subTitle="Services" titleFirst="What we do" />
            </div>
          </Col>
        </Row>
        <Row>
          {SERVICE_DATA.map(
            (
              { serviceIcon, serviceTitle, serviceDesc, serviceLink },
              index
            ) => (
              <ServiceItem
                key={index}
                serviceIcon={serviceIcon}
                serviceTitle={serviceTitle}
                serviceDesc={serviceDesc}
                serviceLink={serviceLink}
              />
            )
          )}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
