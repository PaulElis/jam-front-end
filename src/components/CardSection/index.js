import React, { Component } from 'react';
import './index.css'

class CardSection extends Component {
  render() {
    return (
      <div id='card-section'>
        {this.props.children}
      </div>
    );
  }
}

export default CardSection;
