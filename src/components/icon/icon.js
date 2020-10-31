import React from 'react';
import './icon.css';

class Icon extends React.Component {
    render() {
        const defaultWidth = 32;
        const defaultHeight = 32;

        return (
            <img className="icon" src={this.props.src} alt={this.props.alt}
                    width={this.props.width != null ? this.props.width : defaultWidth} 
                    height={this.props.height != null ? this.props.height : defaultHeight}
                    onClick={this.props.click}
                    
            />
        );
    }
}

export default Icon;