import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import Contact from "../components/Contact";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  return (
    <Layout pageTitle="Elliptic | Technology & Consultancy">
      <PageHeader title="Contact us" crumbTitle="Contact us" />
      <Header
        heroLogo="/assets/images/logo/logo.png"
        headerClass="header__white"
        menuClass="main-menu-3"
      />
      <main>
        <Contact />
        <ContactForm />
      </main>
    </Layout>
  );
};

export default ContactPage;
