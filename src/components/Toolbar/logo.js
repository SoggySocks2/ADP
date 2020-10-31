import React from 'react';
import './logo.css';
// import logo from '../../images/logo.jpg';
// import logo from '../../images/adp_logo.svg';
import logo from '../../images/apd.svg';
import { Link } from 'react-router-dom';
// import logo from '../../images/phone.svg';

class Logo extends React.Component {
    render() {
        return (
            <div>
                <Link to="/">
                    <img className="logo" src={logo} alt="" />
                </Link>
            </div>
        );
    }
}

export default Logo;