import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./DynamicClass.css";
import AOS from "aos";
import "aos/dist/aos.css";
const DynamicClass = ({ gymClass }) => {
  const { image, description, _id, name } = gymClass;
  AOS.init();
  return (
    <div>
      <Col>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className="containerss">
            <div className="images">
              <img className="img-fluid myImages" src={image} alt="my image" />
            </div>
            <div className="texts">
              <h4 className="nameHeading">{name}</h4>
              <p className="descripttionBox">{description.slice(0, 100)} </p>
              <div className="linkButtons">
                <Link className="myLink" to="#">
                  {" "}
                  Explore
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </div>
  );
};

export default DynamicClass;
