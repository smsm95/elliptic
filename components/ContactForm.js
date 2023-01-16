import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });
  const [sending, setSending] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSending(true);
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(() => {
        setSending(false);
        setFormData({ name: "", email: "", message: "", subject: "" });
      })
      .catch((err) => {
        setSending(false);
        console.log(err);
      });
  };

  return (
    <section className="project__area project__area-2 p-relative pt-130 mb-100">
      <div className="project__shape contact__shape">
        <img
          className="project-s-1 c-s-1"
          src="/assets/images/shape/project/p-s-1.png"
          alt=""
        />
        <img
          className="project-s-2 c-s-2"
          src="/assets/images/shape/project/p-s-2.png"
          alt=""
        />
        <img
          className="project-s-3 c-s-3"
          src="/assets/images/shape/project/p-s-3.png"
          alt=""
        />
        <img
          className="project-s-4 c-s-4 d-none d-lg-block"
          src="/assets/images/shape/project/p-s-4.png"
          alt=""
        />
      </div>
      <Container>
        <Row>
          <Col xl={9} lg={10}>
            <div className="project__thumb d-sm-flex">
              <div className="project__thumb-1">
                <img src="/assets/images/project/arenco_view.jpeg" alt="" />
              </div>
              <div className="project__thumb-2 project__thumb-3 d-none d-sm-block">
                <img src="/assets/images/project/arenco_tower.jpeg" alt="" />
              </div>
            </div>
          </Col>
          <Col
            xl={{ span: 7, offset: 5 }}
            lg={{ span: 8, offset: 4 }}
            md={{ span: 10, offset: 2 }}
          >
            <div className="contact__form contact__form-2" id="contact">
              <div className="contact__form-title mb-40">
                <h4>Send us a message</h4>
              </div>
              <div className="contact__form-content">
                <form onSubmit={handleSubmit} id="contact-form">
                  <div className="field-format d-sm-flex justify-content-between mb-40">
                    <div className="form-group pr-10 form-group-2">
                      <input
                        value={formData.name}
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Your Name"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group pl-10">
                      <input
                        value={formData.email}
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email Address"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-group mb-40">
                    <input
                      value={formData.subject}
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder="Subject Here"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group mb-50">
                    <textarea
                      value={formData.message}
                      className="form-control"
                      spellCheck="false"
                      name="message"
                      placeholder="Your Message"
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <Button
                    active={sending}
                    disabled={
                      sending ||
                      !formData.name ||
                      !formData.email ||
                      !formData.message ||
                      !formData.subject
                    }
                    type="submit"
                    className="m-btn"
                  >
                    Send to us
                  </Button>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactForm;
