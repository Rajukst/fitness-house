import React from 'react';

import carosuleOne from "../../../Images/Carosul/carosulOne.jpg"
import carosuleTwo from "../../../Images/Carosul/carosulTwo.jpg"
import carosuleThree from "../../../Images/Carosul/carosulThree.jpg"

import "./HeadCarosul.css"
import { Carousel } from 'react-bootstrap';
const HeadCarosul = () => {

    return (
        <Carousel fade>
              <Carousel.Item>
                <img
                  className="d-block displayImage"
                  src={carosuleOne}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block displayImage"
                  src={carosuleTwo}
                  alt="Second slide"
                />
        
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block displayImage"
                  src={carosuleThree}
                  alt="Third slide"
                />
        
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          );
        };
  
export default HeadCarosul;