import React, { Component } from 'react';
import AlbumDetail from '../../AlbumDetail/Component'
import './index.css'

class FavoriteArtistCard extends Component {

  state = { favorite_artists: this.props.favorite_artists }

  renderAlbumDetail = () => {
    const favorite_artists = this.props.favorite_artists
    if(favorite_artists && favorite_artists.length > 0){
      const firstArtist = favorite_artists[0]
      return <AlbumDetail {...this.props} artist={firstArtist} favorite={firstArtist} deleteArtist={this.props.deleteArtist} image={firstArtist.image} key={firstArtist.mbid}/>
    } else {
      return null
    }
  }

  render() {
    return (
      <div id={`${this.props.renderCSSTag()}favoriteartistcard-container`}>
        {this.renderAlbumDetail()}
      </div>
    );
  }
}

export default FavoriteArtistCard;
