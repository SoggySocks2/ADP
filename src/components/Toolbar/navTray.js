import React from 'react';
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
                    <a href="/gallery">Gallery</a>
                </li>
                <li>
                    <a href="/aboutUs">About Us</a>
                </li>
            </ul>
        </div>
        );
    }
}

export default NavTray;