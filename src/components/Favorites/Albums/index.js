import React, { Component } from 'react';
import AlbumDetail from '../../AlbumDetail/Component'
import './index.css'

class FavoriteArtistAlbums extends Component {

  renderArtistAlbums = () => {
  const favorite_artists = this.props.favorite_artists
    for(let artist of favorite_artists){
      if(artist.favorite_albums){
        return artist.favorite_albums.map(album =>
          <AlbumDetail album={album} deleteAlbum={this.props.deleteAlbum}
          deleteArtist={this.props.deleteArtist} image={album.image} key={album.name} />)
      }
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
    // console.log('FavoriteArtistAlbums props:', this.props);
    return (
      <div id={`${this.renderCSSTag()}favoriteartistalbums-container`}>
        {this.props.favorite_artists ? this.renderArtistAlbums() : null }
      </div>
    );
  }
}

export default FavoriteArtistAlbums;
