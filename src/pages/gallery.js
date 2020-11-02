import React from 'react';
import './gallery.css';
// import Card from '../components/card/card';
import Mountains from '../images/mountains.jpg';
import Lights from '../images/lights.jpg';
import Nature from '../images/nature.jpg';
import Bear from '../images/p3.jpg';

class Gallery extends React.Component {
    render() {
        return (
            /* MAIN (Center website) */
            <div className="main">

                <h2>Gallery</h2>
                <p>Resize the browser window to see the responsive effect.</p>

                {/* Portfolio Gallery Grid */}
                <div className="rowName">
                    <div className="column">
                        <div className="content">
                            <img src={Mountains} alt="Mountains" width="100%" />
                            <h3>My Work</h3>
                            <p>Lorem ipsum..</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="content">
                            <img src={Lights} alt="Lights" width="100%" />
                            <h3>My Work</h3>
                            <p>Lorem ipsum..</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="content">
                            <img src={Nature} alt="Nature" width="100%" />
                            <h3>My Work</h3>
                            <p>Lorem ipsum..</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="content">
                            <img src={Mountains} alt="Mountains" width="100%" />
                            <h3>My Work</h3>
                            <p>Lorem ipsum..</p>
                        </div>
                    </div>
                </div>

                <div className="content">
                    <img src={Bear} alt="Bear" width="100%" />
                    <h3>Some Other Work</h3>
                    <p>Lorem ipsum..</p>
                </div>

            {/* <!-- END MAIN --> */}
            </div>
        );
    }
}

export default Gallery;