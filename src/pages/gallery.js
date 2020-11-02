import React from 'react';
import './gallery.css';
import Card from '../components/card/card';
import cardImage1 from '../images/20200808_154800-768x576.jpg';
import cardImage2 from '../images/20200730_115221-768x576.jpg';
import cardImage3 from '../images/20200829_152225-768x576.jpg';
import cardImage4 from '../images/20200904_155742-768x576.jpg';
import cardImage5 from '../images/20200829_132900-768x1024.jpg';

class Gallery extends React.Component {
    render() {
        return (
            <>
                <h1>Gallery</h1>
                <Card src={cardImage1} alt="Gallery Image 1" width="100%" title="" content="" />
                <Card src={cardImage2} alt="Gallery Image 2" width="100%" title="" content="" />
                <Card src={cardImage3} alt="Gallery Image 3" width="100%" title="" content="" />
                <Card src={cardImage4} alt="Gallery Image 4" width="100%" title="" content="" />
                <Card src={cardImage5} alt="Gallery Image 5" width="100%" title="" content="" />
            </>
        );
    }
}

export default Gallery;