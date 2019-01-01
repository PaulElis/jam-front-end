import React, { Component } from 'react';
import '../../styles/favorites/FavoriteArtistsList.css'

class FavoriteArtistsList extends Component {

  renderFavoriteArtists = () => {
    return this.props.favorite_artists.map(artist =>
      <p key={artist.name} id='artistlist-name'>{this.renderArtistName(artist.name)}</p>)
  }

  renderHandler = () => {
    this.props.favorite_artists === undefined || []
      ? <div>No Artists!</div>
      : this.renderFavoriteArtists()
  }

  renderArtistName = (name) => {
    if(name.length > 21){
      return `${name.slice(0, 21)}...`
    } else {
      return name
    }
  }

  renderCSSTag = () => {
    return this.props.favorite_artists !== (undefined || []) ?
      'no-' : null
  }

  render() {
    // console.log(this.props.favorite_artists === undefined);
    // {this.props.favorite_artists === (undefined || [])
      //   ? <div>No Artists!</div>
      //   : this.renderFavoriteArtists()}
    return (
      <div id={`${this.renderCSSTag()}favoriteartistslist-container`}>
        {this.renderHandler()}
      </div>
    );
  }
}

export default FavoriteArtistsList;
