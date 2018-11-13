import React, { Component } from 'react';
import AlbumDetail from '../AlbumDetail.js'
// import '../styles/favorites/FavoriteArtistAlbums.css'

class FavoriteArtistAlbums extends Component {

  renderArtistAlbums = () => {
  const firstArtist = this.props.favorite_artists[0]
  const secondArtist = this.props.favorite_artists[1]
    if(firstArtist.favorite_albums){
    return firstArtist.favorite_albums.map(album =>
      <AlbumDetail album={album} deleteAlbum={this.props.deleteAlbum}
      deleteArtist={this.props.deleteArtist} image={album.image} key={album.name} />)
    } else if (secondArtist.favorite_albums){
    return secondArtist.favorite_albums.map(album =>
      <AlbumDetail album={album} deleteAlbum={this.props.deleteAlbum}
      deleteArtist={this.props.deleteArtist} image={album.image} key={album.name} />)
    }
  }

  render() {
    // console.log('FavoriteArtistAlbums props:', this.props.favorite_artists);
    return (
      <div id='favoriteartistbio-container'>
        Favorite Albums:
        {this.props.favorite_artists ? this.renderArtistAlbums() : <p> No Albums to Show! </p>}
      </div>
    );
  }
}

export default FavoriteArtistAlbums;
