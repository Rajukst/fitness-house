import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./PricingPlan.css";
const PricingPlan = () => {
  return (
    <div>
      <h6 className="mt-5 plan">OUR PLAN</h6>
      <h2 className="perfectPlan">CHOOSE YOUR PERFECT PLAN</h2>
      <Container>
        <Row>
          <Col xs={12} md={4} lg={4}>
            <div className="pricingHeading pt-5 mt-5 pb-5">
              <h2>Class drop-in</h2>
              <h1>$ 39.0</h1>
              <h6>Free riding</h6>
              <div className="textPrice mt-4">
              <h6>Unlimited equipments</h6>
                <h6>Weight losing classes</h6>
                <h6>Month to mouth</h6>
                <h6>No time restriction</h6>
                <h6>Personal Trainer</h6>
              </div>
              <div className="enrollButton">
                <button className="mt-5 enroll">Enroll Now</button>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4} lg={4}>
            <div className="pricingHeading pt-5 mt-5 pb-5">
              <h2>Class drop-in</h2>
              <h1>$ 39.0</h1>
              <h6>Free riding</h6>
             <div className="textPrice mt-4">
              <h6>Unlimited equipments</h6>
                <h6>Weight losing classes</h6>
                <h6>Month to mouth</h6>
                <h6>No time restriction</h6>
                <h6>Personal Trainer</h6>
              </div>
              <div className="enrollButton">
                <button className="mt-5 enroll">Enroll Now</button>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4} lg={4}>
            <div className="pricingHeading pt-5 mt-5 pb-5">
              <h2>Class drop-in</h2>
              <h1>$ 39.0</h1>
              <h6>Free riding</h6>
            <div className="textPrice mt-4">
           <h6>Unlimited equipments</h6>
                <h6>Weight losing classes</h6>
                <h6>Month to mouth</h6>
                <h6>No time restriction</h6>
                <h6>Personal Trainer</h6>
              </div>
              <div className="enrollButton">
                <button className="mt-5 enroll">Enroll Now</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PricingPlan;
