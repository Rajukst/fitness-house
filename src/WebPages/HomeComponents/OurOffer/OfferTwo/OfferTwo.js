import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import myImage from "../../../../Images/myImg.jpg";

const OfferTwo = () => {
    return (
        <Container>
            <Row>
            <Col xs={12} md={6} lg={6}>
        <div className="myContainer">
                  <div className="abca">
                    <div className="aaaaa">
                      <div className="segftsg">
                        <div className="sgtesdg">
                          <div className="icon-button"></div>
                          <img
                            src={myImage}
                            className="hoverImgage img-fluid"
                            alt="Girl in a jacket"
                          />
                        </div>
                        <div className="bodyPart">
                          <div className="namePart">
                            <h6 className="nameHead">Name</h6>
                            <h4 className="nameBody">Your Name</h4>
                          </div>
                          <div className="buttonPart">
                            <button className="checkOutButton">
                              <i className="fa-solid fa-greater-than"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
        </Col>
            <Col xs={12} md={6} lg={6}>
        <div className="myContainer">
                  <div className="abca">
                    <div className="aaaaa">
                      <div className="segftsg">
                        <div className="sgtesdg">
                          <div className="icon-button"></div>
                          <img
                            src={myImage}
                            className="hoverImgage img-fluid"
                            alt="Girl in a jacket"
                          />
                        </div>
                        <div className="bodyPart">
                          <div className="namePart">
                            <h6 className="nameHead">Name</h6>
                            <h4 className="nameBody">Your Name</h4>
                          </div>
                          <div className="buttonPart">
                            <button className="checkOutButton">
                              <i className="fa-solid fa-greater-than"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
        </Col>
       
        
        
            </Row>
        </Container>
    );
};

export default OfferTwo;