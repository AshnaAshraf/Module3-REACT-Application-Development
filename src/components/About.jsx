import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <img src="images/about.jpg" alt="About Us" className="img-fluid rounded shadow" />
          </Col>
          <Col lg={6}>
            <h2 className="fw-bold">About <span className="text-primary">CartNest</span></h2>
            <p className="text-muted">
              Welcome to <strong>CartNest</strong>, your one-stop shop for the latest trends in fashion, electronics, and more!
              We are committed to providing high-quality products at unbeatable prices, ensuring a seamless shopping experience.
            </p>
            <ul className="list-unstyled">
              <li><i className="bi bi-check-circle-fill text-success"></i> Wide range of products</li>
              <li><i className="bi bi-check-circle-fill text-success"></i> Fast & secure delivery</li>
              <li><i className="bi bi-check-circle-fill text-success"></i> 24/7 customer support</li>
            </ul>
            <a href="#products" className="btn btn-primary mt-3">Start Shopping</a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;