import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./OurOffer.css";

import { Link } from "react-router-dom";
import OfferOne from "./OfferOne/OfferOne";
import OfferTwo from "./OfferTwo/OfferTwo";
const OurOffer = () => {
  return (
    <div>
      <h6 className="ourClass">OUR CLASSES</h6>
      <h2 className="OurOffer">WHAT WE CAN OFFER</h2>
     
      <Container>
        <Row className="mt-5">
          <Col>
          <OfferOne></OfferOne>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
          <OfferTwo></OfferTwo>
          </Col>
        </Row>
      </Container>
     
    </div>
  );
};

export default OurOffer;
