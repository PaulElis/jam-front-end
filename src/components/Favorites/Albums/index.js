import React, { Component } from 'react';
import AlbumDetail from '../../AlbumDetail/Component'
import './index.css'

class FavoriteArtistAlbums extends Component {

  renderArtistAlbums = () => {
  const favorite_artists = this.props.favorite_artists
    for(let artist of favorite_artists){
      if(artist.favorite_albums){
        return artist.favorite_albums.map(album =>
          <AlbumDetail
            {...this.props}
            album={album}
            image={album.image}
            key={album.name} /> )
      }
    }
  }

  render() {
    // console.log('FavoriteArtistAlbums props:', this.props);
    return (
      <div id={`${this.props.renderCSSTag()}favoriteartistalbums-container`}>
        {this.props.favorite_artists ? this.renderArtistAlbums() : null }
      </div>
    );
  }
}

export default FavoriteArtistAlbums;
