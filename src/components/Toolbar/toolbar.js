import React from 'react';
import './toolbar.css';
import Logo from './logo';
import Icon from '../icon/icon';
import phoneIcon from '../../images/phone.svg';
import emailIcon from '../../images/email.svg';
import ToolbarToggleButton from './toolbarToggleButton';
import NavTray from './navTray';

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
            <>
                <div className="toolbar">
                    <div><Logo /></div>
                    <div className="toolbarSpacer" />
                    <div className="icons">
                        <Icon src={emailIcon} alt={"Email"} width="40" height="40" click={this.props.emailClick} />
                        <Icon src={phoneIcon} alt={"Phone"} width="40" height="40" click={this.props.phoneClick} />
                    </div>
                    <nav><ToolbarToggleButton menuToggleClick={this.handleMenuToggleClick} /></nav>
                </div>
                <div><NavTray show={this.state.navTrayOpen} /></div>
            </>
        );
    };
}

export default Toolbar;