import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SectionTitle from "./SectionTitle";
import PortfolioItem from "./PortfolioItem";

const PORTFOLIO_ALL = [
  {
    portfolioImg: "/assets/images/portfolio/bumbee.png",
    portfolioCat: "Content Writing",
    portfolioTitle: "Bumbee",
    portfolioLink: "/single-portfolio",
  },
  {
    portfolioImg: "/assets/images/portfolio/ob.png",
    portfolioCat: "Development",
    portfolioTitle: "Offchain Bitcoins",
    portfolioLink: "/single-portfolio",
  },
  {
    portfolioImg: "/assets/images/portfolio/sake.png",
    portfolioCat: "Development",
    portfolioTitle: "Sake Wallet",
    portfolioLink: "/single-portfolio",
  },
  {
    portfolioImg: "/assets/images/portfolio/vxtrader.png",
    portfolioCat: "Development",
    portfolioTitle: "VX Trader",
    portfolioLink: "/single-portfolio",
  },
];

const PORTFOLIO_DEVELOPMENT = [
  {
    portfolioImg: "/assets/images/portfolio/vxtrader.png",
    portfolioCat: "Development",
    portfolioTitle: "VX Trader",
    portfolioLink: "/single-portfolio",
  },
  {
    portfolioImg: "/assets/images/portfolio/ob.png",
    portfolioCat: "Development",
    portfolioTitle: "Offchain Bitcoins",
    portfolioLink: "/single-portfolio",
  },
  {
    portfolioImg: "/assets/images/portfolio/sake.png",
    portfolioCat: "Development",
    portfolioTitle: "Sake Wallet",
    portfolioLink: "/single-portfolio",
  },
];

const PORTFOLIO_CONTENT = [
  {
    portfolioImg: "/assets/images/portfolio/bumbee.png",
    portfolioCat: "Content Writing",
    portfolioTitle: "Bumbee",
    portfolioLink: "/single-portfolio",
  },
];

const Services = () => {
  return (
    <section className="portfolio__area fix p-relative pb-90" id="portfolio">
      <div className="portfolio__shape">
        <img
          className="portfolio-s-1"
          src="/assets/images/shape/portfolio/portfolio-s-1.png"
          alt=""
        />
        <img
          className="portfolio-s-2"
          src="/assets/images/shape/portfolio/portfolio-s-2.png"
          alt=""
        />
        <img
          className="portfolio-s-3 d-none d-sm-block"
          src="/assets/images/shape/portfolio/portfolio-s-3.png"
          alt=""
        />
        <img
          className="portfolio-s-4"
          src="/assets/images/shape/portfolio/portfolio-s-4.png"
          alt=""
        />
      </div>
      <Container>
        <Row>
          <Col xl={9}>
            <div className="portfolio__wrapper">
              <div className="portfolio__content">
                <div className="portfolio__title">
                  <SectionTitle
                    subTitle="Portfolio"
                    titleFirst="Some of our amazing works"
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <div className="portfolio">
          <Tabs
            defaultActiveKey="all"
            transition={false}
            id="noanim-tab-example"
            className="portfolio__menu"
          >
            <Tab eventKey="all" title="Show All">
              <Row className="mt-150">
                {PORTFOLIO_ALL.map(
                  (
                    {
                      portfolioImg,
                      portfolioCat,
                      portfolioTitle,
                      portfolioLink,
                    },
                    index
                  ) => (
                    <PortfolioItem
                      key={index}
                      portfolioImg={portfolioImg}
                      portfolioCat={portfolioCat}
                      portfolioTitle={portfolioTitle}
                      portfolioLink={portfolioLink}
                    />
                  )
                )}
              </Row>
            </Tab>

            <Tab eventKey="development" title="Development">
              <Row className="mt-150">
                {PORTFOLIO_DEVELOPMENT.map(
                  (
                    {
                      portfolioImg,
                      portfolioCat,
                      portfolioTitle,
                      portfolioLink,
                    },
                    index
                  ) => (
                    <PortfolioItem
                      key={index}
                      portfolioImg={portfolioImg}
                      portfolioCat={portfolioCat}
                      portfolioTitle={portfolioTitle}
                      portfolioLink={portfolioLink}
                    />
                  )
                )}
              </Row>
            </Tab>
            <Tab eventKey="content" title="Content Writing">
              <Row className="mt-150">
                {PORTFOLIO_CONTENT.map(
                  (
                    {
                      portfolioImg,
                      portfolioCat,
                      portfolioTitle,
                      portfolioLink,
                    },
                    index
                  ) => (
                    <PortfolioItem
                      key={index}
                      portfolioImg={portfolioImg}
                      portfolioCat={portfolioCat}
                      portfolioTitle={portfolioTitle}
                      portfolioLink={portfolioLink}
                    />
                  )
                )}
              </Row>
            </Tab>
          </Tabs>
        </div>
      </Container>
    </section>
  );
};

export default Services;
