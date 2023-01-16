import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Testimonial from "../components/Testimonial";
import LetsWork from "../components/LetsWork";
import TeamMember from "../components/TeamMember";
import Facts from "../components/Facts";

const HomeOne = () => {
  return (
    <Layout pageTitle="Elliptic | Technology & Consultancy">
      <Header heroLogo="/assets/images/logo/logo.png" />
      <main>
        <Hero />
        <About
          subTitle="About Us"
          titleFirst="We believe that an idea"
          titleSecond=" is the start of an empire but execution shapes it into a reality."
        />
        {/* <Portfolio /> */}
        <Facts />
        <Services extraClass="mt-75" />
        {/* <Testimonial testimonialArea="testimonials__area" paddingTop="pt-120" /> */}
        <TeamMember subTitle="The Superstars" />
        <LetsWork />
      </main>
    </Layout>
  );
};

export default HomeOne;
