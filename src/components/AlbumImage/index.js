import React, { Component } from 'react';
import './index.css'
import record from '../../images/record.png'
import placeholder from '../../images/placeholder.jpeg'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';

class AlbumImage extends Component {

  render() {
    // console.log('AlbumImage props:', this.props);
    return (
      <div>
        <LazyLoadImage
          id={`${this.props.renderCSSTag()}album-image`}
          src={this.props.image ? this.props.image : record}
          effect="blur"
          placeholderSrc={placeholder}
          scrollPosition={this.props.scrollPosition}
          alt={record}
          onClick={this.props.albumClick}
          onError={(e) => { e.target.src = record }} />
        <div id={`${this.props.renderCSSTag()}clickable`} onClick={this.props.albumClick} >
          {this.props.location.pathname === '/' || this.props.location.pathname === '/albums'
            ? <p id={`${this.props.renderCSSTag()}clickable`}>Add to Favorites</p>
            : <p id={`${this.props.renderCSSTag()}clickable`}>Remove from Favorites</p>
          }
        </div>
      </div>
    );
  }
}

export default AlbumImage;
