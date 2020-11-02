import React from 'react';
import './card.css';
// import { Link } from 'react-router-dom';

class Card extends React.Component {
    render() {
        return (
            <div class="card">
                <img src={this.props.src} alt={this.props.alt} width={this.props.width} />
                <div class="container">
                    <h4><b>{this.props.title}</b></h4> 
                <p>{this.props.content}</p> 
                </div>
            </div>
        );
    }
}

export default Card;