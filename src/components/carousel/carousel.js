import React from 'react';
import './carousel.css';


class footer extends React.Component {
    render() {
        return (
            <>
            Gallery Carousel
            <div className="wrapper">
                <div className="slider">
                    <div className="slide">
                        <img src=".https://scontent.flhr3-1.fna.fbcdn.net/v/t1.0-9/943517_10201489571979174_1573371312_n.jpg?_nc_cat=108&ccb=2&_nc_sid=e3f864&_nc_ohc=qvGrAwilJckAX_AgwiO&_nc_ht=scontent.flhr3-1.fna&oh=16b1c66dac010bfd2211aec053f13ef5&oe=5FC39A99" alt=""/>
                        <img src="../../images/facebook.svg" alt=""/>
                        <img src="../../images/linkedin.svg" alt=""/>
                        <img src="../../images/phone.svg" alt=""/>
                        <img src="../../images/twitter.svg" alt=""/>
                        <img src="../../images/apd.svg" alt=""/>
                        <img src="../../images/phone.svg" alt=""/>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default footer;