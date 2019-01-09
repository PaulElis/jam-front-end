import React, { Component } from 'react';
import './index.css'
import record from '../../images/record.png'
import placeholder from '../../images/placeholder.jpeg'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';

class AlbumImage extends Component {

  albumClick = (e) => {
    // let height = getComputedStyle(document.getElementById(`${this.renderCSSTag()}album-image`)).height
    if(e.target.id === 'favoriteartist-clickable'){
      this.props.deleteArtist(this.props.artist)
    } else if(this.props.location.pathname === '/albums'){
      this.props.addAlbumToFavorites(this.props.album)
    } else if(this.props.location.pathname === '/favorites' && e.target.id === 'favoritealbum-clickable'){
      this.props.deleteAlbum(this.props.album)
    } else{
    this.props.location.pathname === '/' ? this.props.addArtistToFavorites(this.props.artist)
    : this.props.location.pathname === '/albums' ? this.props.addAlbumToFavorites(this.props.album)
    : e.target.id === "favoriteartist-album-image" ? this.props.deleteArtist(this.props.artist)
    : e.target.id === "favoritealbum-album-image" ? this.props.deleteAlbum(this.props.album)
    : console.log('AlbumClick Error!');
    }
    document.getElementById('favorites-image').style.backgroundColor='red'
    setTimeout(this.changeButtonBack, 2000);
  }

  changeButtonBack = () => {
    document.getElementById('favorites-image').style.backgroundColor='#fff'
  }

  renderCSSTag = () => {
    return this.props.top_artists === undefined && this.props.artist ?
      'favoriteartist-' : this.props.top_artists === undefined ?
      'favoritealbum-' : ''
  }

  render() {
    // console.log('AlbumImage props:', this.props);
    return (
      <div>
        <LazyLoadImage
          id={`${this.renderCSSTag()}album-image`}
          src={this.props.image ? this.props.image : record}
          effect="blur"
          placeholderSrc={placeholder}
          scrollPosition={this.props.scrollPosition}
          alt={record}
          onClick={this.albumClick}
          onError={(e) => { e.target.src = record /*replacement image*/ }}
        />
        <div id={`${this.renderCSSTag()}clickable`} onClick={this.albumClick} >
          {this.props.location.pathname === '/' || this.props.location.pathname === '/albums' ?
          <p id={`${this.renderCSSTag()}clickable`}>Add to Favorites</p>
          : <p id={`${this.renderCSSTag()}clickable`}>Remove from Favorites</p>}
        </div>
      </div>
    );
  }
}

export default AlbumImage;
