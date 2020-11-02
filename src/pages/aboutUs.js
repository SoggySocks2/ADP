import React from 'react';
import './aboutUs.css';
import Card from '../components/card/card';
import cardImage from '../images/DSC06621-1-768x432.jpg';

class AboutUs extends React.Component {
    render() {
        return (
            <Card src={cardImage} alt="About Us" width="100%" title="About Us" content="We are fully insured and certified quality car detailing and car valeting specialists situated in North Wales. Our main effort is to ensure 100% customer satisfaction. With over 15 years of experience within the industry we have the knowledge and know-how to deliver on our quality promise guarantee.

            After starting off as a regular mobile valeting service we have grown over the years, conducting training in various areas within detailing as we expanded. Our new venture moved us towards a unit situated in North Wales to help us deliver car detailing more efficiently while allowing us to valet in all weather conditions.
            
            Our motivation is ensuring our customers drive around in style whatever the chosen service from ourselves. We use only the best products to match our service and we are proud certified applicators of Krypton Ceramic Protection.
            
            As we move forward and grow we will always look to expand the services we offer. We thrive on learning as we go as it gives us that edge to offer our customers the best quality of service." />
        );
    }
}

export default AboutUs;