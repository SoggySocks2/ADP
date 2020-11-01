import React from 'react';
import './iconExternal.css';
import { Link } from 'react-router-dom';

class IconExternal extends React.Component {
    render() {
        const defaultWidth = 32;
        const defaultHeight = 32;

        return (
            <a href={this.props.href} target="_blank" rel="noreferrer">
                <img className="icon" src={this.props.src} alt={this.props.alt}
                        width={this.props.width != null ? this.props.width : defaultWidth} 
                        height={this.props.height != null ? this.props.height : defaultHeight}                        
                />
            </a>
        );
    }
}

export default IconExternal;