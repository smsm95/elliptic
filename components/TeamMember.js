import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from "./SectionTitle";
import TeamMemberCard from "./TeamMemberCard";

const MEMBER_DATA = [
  {
    memberImg: "/assets/images/team/aml.png",
    memberLink: "/single-team",
    memberName: "Aml Kamal",
    memberPosition: "Product Manager",
  },
  {
    memberImg: "/assets/images/team/osama.png",
    memberLink: "/single-team",
    memberName: "Osama Mirgani",
    memberPosition: "Senior Software Engineer",
  },
  {
    memberImg: "/assets/images/team/shreya.png",
    memberLink: "/single-team",
    memberName: "Shreya Milan",
    memberPosition: "Content & Marketing Manager",
  },
  {
    memberImg: "/assets/images/team/snitchana.jpeg",
    memberLink: "/single-team",
    memberName: "Snizhana Zadorozhna",
    memberPosition: "Content & Marketing Specialist",
  },
  // {
  //   memberImg: "/assets/images/team/member-4.jpg",
  //   memberLink: "/single-team",
  //   memberName: "Mazin Omer",
  //   memberPosition: "Senior Software Engineer",
  // },
  // {
  //   memberImg: "/assets/images/team/member-1.jpg",
  //   memberLink: "/single-team",
  //   memberName: "Abdelhadi",
  //   memberPosition: "Senior Software Engineer",
  // },
];

const TeamMember = ({ subTitle }) => {
  return (
    <section
      className="team__area-2 pt-110 pb-120 mb-105 fix p-relative"
      id="team"
    >
      <div className="team__shape team__shape-2">
        <img
          className="t-shape-1"
          src="/assets/images/shape/testimonials/t-shape-1.png"
          alt=""
        />
        <img
          className="t-shape-2"
          src="/assets/images/shape/testimonials/t-shape-2.png"
          alt=""
        />
        <img
          className="t-shape-3"
          src="/assets/images/shape/testimonials/t-shape-3.png"
          alt=""
        />
        <img
          className="t-shape-4"
          src="/assets/images/shape/testimonials/t-shape-4.png"
          alt=""
        />
      </div>
      <Container>
        <Row className="mb-65">
          <Col xl={12}>
            <div className="team__heading text-center">
              <SectionTitle subTitle={subTitle} titleFirst="Meet the team" />
              <p>
                We would like to introduce our team of selective talents who
                turn ideas into amazing products
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          {MEMBER_DATA.map(
            ({ memberImg, memberLink, memberName, memberPosition }, index) => (
              <TeamMemberCard
                key={index}
                memberImg={memberImg}
                memberLink={memberLink}
                memberName={memberName}
                memberPosition={memberPosition}
              />
            )
          )}
        </Row>
      </Container>
    </section>
  );
};

export default TeamMember;
