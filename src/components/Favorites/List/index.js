import React, { Component } from 'react';
import './index.css'
import addArtist from '../../../images/addArtist.jpg'

class FavoriteArtistsList extends Component {

  renderFavoriteArtists = () => {
    const favorite_artists = this.props.favorite_artists
    if(favorite_artists && favorite_artists.length > 0){
      return this.props.favorite_artists.map(artist =>
        <p key={artist.name} id='artistlist-name'>{this.renderArtistName(artist.name)}</p>)
    } else {
      return <img id='favorites-background' src={addArtist} alt='oh no!' />
    }
  }

  renderArtistName = (name) => {
    if(name.length > 21){
      return `${name.slice(0, 21)}...`
    } else {
      return name
    }
  }

  renderCSSTag = () => {
    const favorite_artists = this.props.favorite_artists
    if(favorite_artists && favorite_artists.length === 0){
      return 'no-'
    } else {
      return ''
    }
  }

  render() {
    return (
      <div id={`${this.renderCSSTag()}favoriteartistslist-container`}>
        {this.renderFavoriteArtists()}
      </div>
    );
  }
}

export default FavoriteArtistsList;
