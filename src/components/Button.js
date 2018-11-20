import React, { Component } from 'react';
import '../styles/Button.css'

class Button extends Component {

  state = {}

  render() {
    // console.log('props', this.props);
    return (
      <a href={this.props.link} target="_blank"
        rel="noopener noreferrer" id={this.props.top_artists === undefined && this.props.artist ?
          'favoriteartist-button' : this.props.top_artists === undefined ?
          'favoritealbum-button' : 'button'}>
        {this.props.children} </a>
    );
  }
}

export default Button;
