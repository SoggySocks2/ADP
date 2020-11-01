import React from 'react';
import './logo.css';
import logo from '../../images/apd.svg';
import { Link } from 'react-router-dom';

class Logo extends React.Component {
    render() {
        return (
            <div>
                <Link to="/">
                    <img className="logo" src={logo} alt="logo" />
                </Link>
            </div>
        );
    }
}

export default Logo;