import React from 'react';
import './home.css';
import Card from '../components/card/card';
import cardImage from '../images/IMG-20191007-WA0010-768x432.jpg';

class Home extends React.Component {
    render() {
        return (
            <Card src={cardImage} alt="Test Card" width="100%" title="Welcome" content="Absolute Precision Detailing are Car Detailing and Car Valeting Specialists based in Conwy, North wales. With over 15 years of professional experience in Car Detailing and Car Valeting using the best products and carefully honed skills to produce the supreme standards that the owners of cars, motorbikes and luxury yachts have come to expect. We go the extra mile to provide services exceeding the quality of a showroom finish, with our passion for detailing and meticulous nature allowing us to deliver on our 100% satisfaction guarantee" />
        );
    }
}

export default Home;