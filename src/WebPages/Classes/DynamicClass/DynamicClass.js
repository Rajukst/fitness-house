import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./DynamicClass.css";
import AOS from "aos";
import "aos/dist/aos.css";
const DynamicClass = ({ gymClass }) => {
  const { image, description, _id, name } = gymClass;
  AOS.init();
const [trainerList, setTrainerList]= useState([])
useEffect(()=>{
  const url= "http://localhost:5000/trainers"
  fetch(url)
  .then(res=>res.json())
  .then(data=>setTrainerList(data))
},[])

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
                <Link to={`/services/${_id}`}>Explore More</Link>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </div>
  );
};

export default DynamicClass;
