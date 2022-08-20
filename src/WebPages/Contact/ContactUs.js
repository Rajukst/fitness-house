import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./ContactUs.css";
const ContactUs = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="getInTouch"></div>
          <h1>Contact US</h1>
        </Col>
        <Col>
          <form>
            <div className="contact-form">
              <input type="text" name="" id="" placeholder="Name" />
              <br />
              <br />
              <input type="email" name="" id="" placeholder="Email" />
              <br />
              <br />
              <input type="url" name="" id="" placeholder="Website" />
              <br />
              <br />
            </div>
            <textarea
              className="myTextArea"
              name=""
              id=""
              cols="20"
              rows="10"
              placeholder="Comment"
            ></textarea>
            <br />
            <br />
            <button className="sendUsButton">
              {" "}
              <i className="fa-solid fa-paper-plane sendUsIcon"></i>Submit
            </button>
          </form>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="googleMaps mt-5">
            <iframe
              width="1300"
              height="620"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Kushtia,%20zilla%20school&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
