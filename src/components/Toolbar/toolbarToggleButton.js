import React from 'react';
import './toolbarToggleButton.css';

class ToolbarToggleButton extends React.Component {
    
    render() {

        return (
            <div className="toggleButton" onClick={this.props.menuToggleClick}>
                <div className="toggleButtonBar"></div>
                <div className="toggleButtonBar"></div>
                <div className="toggleButtonBar"></div>
            </div>
        );
    };
}

export default ToolbarToggleButton;