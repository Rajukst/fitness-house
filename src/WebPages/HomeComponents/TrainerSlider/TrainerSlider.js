import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";
import trainerOne from "../../../Images/trainer1.jpg";
import trainerTwo from "../../../Images/trainer2.jpg";
import trainerThree from "../../../Images/trainer3.jpg";
import trainerFour from "../../../Images/trainer4.jpg";
import trainerFive from "../../../Images/trainer5.jpg";
import trainerSix from "../../../Images/trainer6.jpg";
import trainerSeven from "../../../Images/trainer7.jpg";
import trainerEight from "../../../Images/trainer8.jpg";
import trainerNine from "../../../Images/trainer9.jpg";
import "./TrainerSlider.css";
const TrainerSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Container>
      <div>
        <div className="team-heading mt-5">
          <div className="team-text">
            <h6 className="meetTeam">MEET OUR TEAM</h6>
            <h3 className="trainExpert">TRAIN WITH EXPERTS</h3>
          </div>
          <div className="appoint-button">
            <button className="myAppoint">APPOINTMENT</button>
          </div>
        </div>
        <Slider {...settings}>
          <div className="p-3 image">
            <img className="image__img img-fluid" src={trainerOne} alt="" />
            <div className="image__overlay">
              <div className="image__title">Name</div>
              <p className="image__description">Here Is the name</p>
            </div>
          </div>
          <div className="p-3 image">
            <img className="image__img img-fluid" src={trainerTwo} alt="" />
            <div className="image__overlay">
              <div className="image__title">Name</div>
              <p className="image__description">Here Is the name</p>
            </div>
          </div>
          <div className="p-3 image">
            <img className="image__img img-fluid" src={trainerThree} alt="" />
            <div className="image__overlay">
              <div className="image__title">Name</div>
              <p className="image__description">Here Is the name</p>
            </div>
          </div>
          <div className="p-3 image">
            <img className="image__img img-fluid" src={trainerFour} alt="" />
            <div className="image__overlay">
              <div className="image__title">Name</div>
              <p className="image__description">Here Is the name</p>
            </div>
          </div>
          <div className="p-3 image">
            <img className="image__img img-fluid" src={trainerFive} alt="" />
            <div className="image__overlay">
              <div className="image__title">Name</div>
              <p className="image__description">Here Is the name</p>
            </div>
          </div>
          <div className="p-3 image">
            <img className="image__img img-fluid" src={trainerSix} alt="" />
            <div className="image__overlay">
              <div className="image__title">Name</div>
              <p className="image__description">Here Is the name</p>
            </div>
          </div>
          <div className="p-3 image">
            <img className="image__img img-fluid" src={trainerSeven} alt="" />
            <div className="image__overlay">
              <div className="image__title">Name</div>
              <p className="image__description">Here Is the name</p>
            </div>
          </div>
          <div className="p-3 image">
            <img className="image__img img-fluid" src={trainerEight} alt="" />
            <div className="image__overlay">
              <div className="image__title">Name</div>
              <p className="image__description">Here Is the name</p>
            </div>
          </div>
          <div className="p-3 image">
            <img className="image__img img-fluid" src={trainerNine} alt="" />
            <div className="image__overlay">
              <div className="image__title">Name</div>
              <p className="image__description">Here Is the name</p>
            </div>
          </div>
        </Slider>
      </div>
    </Container>
  );
};

export default TrainerSlider;
