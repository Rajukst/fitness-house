import React, { useEffect, useState } from "react";
import { Row, Container } from "react-bootstrap";
import Swal from "sweetalert2";
import DynamicClass from "../DynamicClass/DynamicClass";
import FitnessVideo from "../FitnessVideo/FitnessVideo";
import "./MainClasses.css";
const MainClasses = () => {
  const [classList, setClassList] = useState([]);
  const [visible, setVisible] = useState(4);
  const showMore = () => {
    setVisible((prevValue) => prevValue + 4);
    if (visible > classList.length) {
      Swal.fire({
        title: "You Reached The end of Data",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    }
  };
  useEffect(() => {
    const url = "http://localhost:5000/gymClass";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setClassList(data));
  }, []);
  return (
    <div>
      <h6 className="pt-5 whatDo">WHAT WE DO?</h6>
      <h2 className="pushLimit">PUSH YOUR LIMITS FORWARD</h2>
      <Container>
        <Row xs={12} md={2} className="g-4 m-2">
          {classList.slice(0, visible).map((getGymClass) => (
            <DynamicClass
              key={getGymClass._id}
              gymClass={getGymClass}
            ></DynamicClass>
          ))}
        </Row>
        <button onClick={showMore}>Load More Class</button>
      </Container>
      <FitnessVideo></FitnessVideo>
    </div>
  );
};

export default MainClasses;
