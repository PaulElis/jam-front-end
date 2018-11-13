import React, { Component } from 'react';
// import '../styles/favorites/FavoriteArtistAlbums.css'

class FavoriteArtistAlbums extends Component {

  renderArtistAlbums = () => {
    const firstArtist = this.props.favorite_artists[0]
    return firstArtist.favorite_albums.map(album =>
      <p key={album.name}>{album.name}</p>)
    }

  render() {
    console.log('FavoriteArtistAlbums props:', this.props.favorite_artists);
    return (
      <div id='favoriteartistbio-container'>
        Albums:
        {this.props.favorite_artists ? this.renderArtistAlbums() : <p> No Albums to Show! </p>}
      </div>
    );
  }
}

export default FavoriteArtistAlbums;
