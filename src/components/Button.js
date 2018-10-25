import React, { Component } from 'react';
import '../styles/Button.css'

class Button extends Component {
  render() {
    // console.log('props', this.props);
    return (
        <a href={this.props.link} target="_blank" rel="noopener noreferrer" id='button'>
          {this.props.children} </a>
    );
  }
}

export default Button;
