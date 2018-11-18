import React, { Component } from 'react';
import '../../styles/favorites/FavoriteArtistsList.css'

class FavoriteArtistsList extends Component {

  renderFavoriteArtists = () => {
    return this.props.favorite_artists.map(artist =>
      <p key={artist.name}>{artist.name}</p>)
  }

  render() {
    return (
      <div id='favoriteartistslist-container'>
        {this.props.favorite_artists ? this.renderFavoriteArtists()
          : <p>No Favorite Artists to Display!</p>}
      </div>
    );
  }
}

export default FavoriteArtistsList;
