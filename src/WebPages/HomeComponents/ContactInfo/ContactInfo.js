import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./ContactInfo.css";
const ContactInfo = () => {
  return (
    <div>
      <Container className="mt-5">
        <Row>
          <Col>
            <div className="contact-info m-2">
              <div className="myContact">
                <div className="myIcon">
                  <div className="iconses ms-5">
                    <i className="fa-solid fa-street-view iconics fa-2x"></i>
                  </div>
                </div>
                <div className="Contact-Text ps-2">
                  <div className="contactText">
                    <h6>333 Middle Winchendon Rd, Rindge,</h6>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="contact-info m-2">
              <div className="myContact">
                <div className="myIcon">
                  <div className="iconses ms-5">
                  <i className="fa-solid fa-phone iconics fa-2x"></i>
                  </div>
                </div>
                <div className="Contact-Text ps-2">
                  <div className="contactText">
                    <h6>0175692269995</h6>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="contact-info m-2">
              <div className="myContact">
                <div className="myIcon">
                  <div className="iconses ms-5">
                  <i className="fa-solid fa-envelope fa-2x iconics"></i>
                  </div>
                </div>
                <div className="Contact-Text ps-2">
                  <div className="contactText">
                    <h6>admin@admin.com</h6>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactInfo;
