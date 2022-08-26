import React from 'react';

const SliderShow = ({sliderImages}) => {
    const {name, image, designation}= sliderImages;
    return (
        <div className="p-3 image">
        <img className="image__img img-fluid" src={image} alt="" />
        <div className="image__overlay">
          <div className="image__title">{name}</div>
          <p className="image__description">{designation} <span>Trainer</span> </p>
        </div>
      </div>
    );
};

export default SliderShow;