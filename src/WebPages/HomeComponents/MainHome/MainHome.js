import React from 'react';
import HeadCarosul from '../Carusel/HeadCarosul';
import ContactInfo from '../ContactInfo/ContactInfo';
import OfferTwo from '../OurOffer/OfferTwo/OfferTwo';
import OurOffer from '../OurOffer/OurOffer';
import PricingPlan from '../PricingPlan/PricingPlan';
import RegisterDetails from '../RegisterDetails/RegisterDetails';
import TrainerSlider from '../TrainerSlider/TrainerSlider';
import WhyChoseUs from '../WhyChoseUs/WhyChoseUs';

const MainHome = () => {
    return (
        <div>
            <HeadCarosul></HeadCarosul>
            <WhyChoseUs></WhyChoseUs>
            <OurOffer></OurOffer>
            <RegisterDetails></RegisterDetails>
            <PricingPlan></PricingPlan>
            <TrainerSlider></TrainerSlider>
            <ContactInfo></ContactInfo>
        </div>
    );
};

export default MainHome;