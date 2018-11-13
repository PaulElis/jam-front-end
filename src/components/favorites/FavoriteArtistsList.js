import React, { Component } from 'react';
// import '.../styles/favorites/FavoriteArtistsList.css'

class FavoriteArtistsList extends Component {

  // state = {
  //   // favorites: [],
  // }
  //
  // static getDerivedStateFromProps = (nextProps, prevState) => {
  //   return {
  //     favorite_artists: nextProps.favorite_artists === [] ? [] : nextProps.favorite_artists,
  //   }
  // }

  renderFavoriteArtists = () => {
    return this.props.favorite_artists.map(artist =>
      <p key={artist.name}>{artist.name}</p>)
  }

  render() {
    return (
      <div id='favoriteartistslist-container'>
        {this.props.favorite_artists ? this.renderFavoriteArtists() : <p>No Favorite Artists to Display!</p>}
      </div>
    );
  }
}

export default FavoriteArtistsList;
