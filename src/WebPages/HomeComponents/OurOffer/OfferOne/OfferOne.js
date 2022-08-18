import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import offerImageOne from "../../../../Images/offer.jpg";
import offerImageThree from "../../../../Images/offerImage.jpg";
import offerImageTwo from "../../../../Images/offerTwo.jpg";
const OfferOne = () => {
    return (
        <>
        <Container>
            <Row>
            <Col xs={12} md={4} lg={4}>
        <div className="myContainer">
                  <div className="abca">
                    <div className="aaaaa">
                      <div className="segftsg">
                        <div className="sgtesdg">
                          <div className="icon-button"></div>
                          <img
                            src={offerImageOne}
                            className="img-fluid p-1 hoverImgage"
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
        <Col xs={12} md={4} lg={4}>
        <div className="myContainer">
                  <div className="abca">
                    <div className="aaaaa">
                      <div className="segftsg">
                        <div className="sgtesdg">
                          <div className="icon-button"></div>
                          <img
                            src={offerImageTwo}
                            className="img-fluid p-1 hoverImgage"
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
        <Col xs={12} md={4} lg={4}>
        <div className="myContainer">
                  <div className="abca">
                    <div className="aaaaa">
                      <div className="segftsg">
                        <div className="sgtesdg">
                          <div className="icon-button"></div>
                          <img
                            src={offerImageThree}
                            className="img-fluid p-1 hoverImgage"
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
       
        </>
        
    );
};

export default OfferOne;