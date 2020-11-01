import React from 'react';
import { Link } from 'react-router-dom';
import './navTray.css';

class NavTray extends React.Component {
    render() {

        let navClasses = 'navTray';
        if(this.props.show)
        {
            navClasses = 'navTray open';
        }

        return (
        <div className={navClasses}>
            <ul>
                <li>
                    <Link to="/gallery" onClick={this.props.menuToggleClick}>Gallery</Link>
                </li>
                <li>
                    <Link to="/aboutus" onClick={this.props.menuToggleClick}>About Us</Link>
                </li>
            </ul>
        </div>
        );
    }
}

export default NavTray;