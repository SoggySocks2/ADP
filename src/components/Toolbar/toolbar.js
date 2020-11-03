import React from 'react';
import './toolbar.css';
import Logo from './logo';
import Icon from '../icon/icon';
import phoneIcon from '../../images/phone.svg';
import emailIcon from '../../images/email.svg';
import ToolbarToggleButton from './toolbarToggleButton';
import NavTray from './navTray';
import { Link } from 'react-router-dom';

class Toolbar extends React.Component {

    state = {
        navTrayOpen: false
      };

  handleMenuToggleClick = () => {
    this.setState((prevState) => {
      return {navTrayOpen: !prevState.navTrayOpen};
    })
  }

    render() {

        return (
            <nav className="toolbarContainer">
                <div className="toolbar">
                    <div><Logo /></div>
                    <div className="toolbarSpacer" />
                    <div className="toolbarIcons">
                        <Icon src={emailIcon} alt={"Email"} width="40" height="40" href="contactus" />
                        <Icon src={phoneIcon} alt={"Phone"} width="40" height="40" href="contactus" />
                    </div>
                    <div className="toolbarLinks">
                        <ul>
                            <li>
                                <Link to="/aboutus" className="toolbar-nav-link">About Us</Link>
                            </li>
                            <li>
                                <Link to="/gallery" className="toolbar-nav-link">Gallery</Link>
                            </li>
                            <li>
                                <Link to="/contactus" className="toolbar-nav-link">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div><ToolbarToggleButton menuToggleClick={this.handleMenuToggleClick} /></div>
                </div>
                <NavTray show={this.state.navTrayOpen}  menuToggleClick={this.handleMenuToggleClick} />
            </nav>
        );
    };
}

export default Toolbar;