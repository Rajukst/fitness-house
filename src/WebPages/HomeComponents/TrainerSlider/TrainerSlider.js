import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";

import "./TrainerSlider.css";
import SliderShow from "./SliderShow";
const TrainerSlider = () => {
  const [sliderImage, setSliderImage]= useState([])
  useEffect(()=>{
    const url= "http://localhost:5000/trainers"
    fetch(url)
    .then(res=>res.json())
    .then(data=>setSliderImage(data))
  },[])
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
      {
        sliderImage.map(getSliderImage=> <SliderShow
        key={getSliderImage._id}
        sliderImages={getSliderImage}
        ></SliderShow> )
      } 
        </Slider>
      </div>
    </Container>
  );
};

export default TrainerSlider;
