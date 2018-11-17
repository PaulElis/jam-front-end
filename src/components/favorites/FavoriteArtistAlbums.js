import React, { Component } from 'react';
import AlbumDetail from '../AlbumDetail.js'
import '../../styles/favorites/FavoriteArtistAlbums.css'

class FavoriteArtistAlbums extends Component {

  renderArtistAlbums = () => {
    // console.log('in renderArtistAlbums');
  const favorite_artists = this.props.favorite_artists

    for(let artist of favorite_artists){
      if(artist.favorite_albums){
        return artist.favorite_albums.map(album =>
          <AlbumDetail album={album} deleteAlbum={this.props.deleteAlbum}
          deleteArtist={this.props.deleteArtist} image={album.image} key={album.name} />)
      }
    }
  }

  renderAlbumsAfterAlbumDelete = () => {
    console.log('in renderAlbumsAfterAlbumDelete');
    return this.props.favorite_artists[0].map(album =>
      <AlbumDetail album={album} deleteAlbum={this.props.deleteAlbum}
      deleteArtist={this.props.deleteArtist} image={album.image} key={album.name} />)
    // return this.props.favorite_albums.map(album =>
    //   <AlbumDetail album={album} deleteAlbum={this.props.deleteAlbum}
    //   deleteArtist={this.props.deleteArtist} image={album.image} key={album.name} />)
  }

  render() {
    console.log('FavoriteArtistAlbums props:', this.props);
    // {this.props.favorite_albums !== (undefined && []) ? this.renderAlbumsAfterAlbumDelete() : this.props.favorite_artists ?
      //   this.renderArtistAlbums() : null }
    return (
      <div id='favoriteartistalbums-container'>
        {this.props.favorite_artists ?
          this.renderArtistAlbums() : null }
      </div>
    );
  }
}

export default FavoriteArtistAlbums;
