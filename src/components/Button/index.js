import React, { Component } from 'react';
import './index.css'

class Button extends Component {

  renderCSSTag = () => {
    return this.props.top_artists === undefined && this.props.artist ?
      'favoriteartist-' : this.props.top_artists === undefined ?
      'favoritealbum-' : ''
  }

  render() {
    // console.log('props', this.props);
    return (
      <a href={this.props.link} target="_blank"
        rel="noopener noreferrer" id={`${this.renderCSSTag()}button`}>
        {this.props.children} </a>
    );
  }
}

export default Button;