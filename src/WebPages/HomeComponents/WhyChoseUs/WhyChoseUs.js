import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import equipment from "../../../Images/equip.png";
import "./WhyChoseUs.css";
const WhyChoseUs = () => {
  return (
    <div className="mt-5">
      <p className="intro">WHY CHOSE US?</p>
      <p className="push">PUSH YOUR LIMITS FORWARD</p>
      <Container>
        <Row>
          <Col xs={12} md={6} lg={3}>
            <div className="root-head m-5">
              <img
                className="img-fluid imgages"
                src={equipment}
                alt=""
                height="80"
                width="80"
              />
              <h4 className="headline">Modern equipment</h4>
              <p className="paragraph-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut dolore facilisis.
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <div className="root-head m-5">
              <img
                className="img-fluid imgages"
                src={equipment}
                alt=""
                height="80"
                width="80"
              />
              <h4 className="headline">Healthy nutrition plan</h4>
              <p className="paragraph-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut dolore facilisis.
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <div className="root-head m-5">
              <img
                className="img-fluid imgages"
                src={equipment}
                alt=""
                height="80"
                width="80"
              />
              <h4 className="headline">Proffesponal training plan</h4>
              <p className="paragraph-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut dolore facilisis.
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <div className="root-head m-5">
              <img
                className="img-fluid imgages"
                src={equipment}
                alt=""
                height="80"
                width="80"
              />
              <h4 className="headline">Unique to your needs</h4>
              <p className="paragraph-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut dolore facilisis.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhyChoseUs;
