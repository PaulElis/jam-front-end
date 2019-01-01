import React, { Component } from 'react';
import AlbumDetail from '../AlbumDetail.js'
import '../../styles/favorites/FavoriteArtistCard.css'

class FavoriteArtistCard extends Component {

  state = { favorite_artists: this.props.favorite_artists }

  renderAlbumDetail = () => {
    const favorite_artists = this.props.favorite_artists
    if(favorite_artists && favorite_artists[0]){
      const firstArtist = favorite_artists[0]
      return <AlbumDetail artist={firstArtist} favorite={firstArtist} deleteArtist={this.props.deleteArtist} image={firstArtist.image} key={firstArtist.mbid}/>
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
    console.log(this.props.favorite_artists);
    return (
      <div id={`${this.renderCSSTag()}favoriteartistcard-container`}>
        {this.state.favorite_artists !== (undefined || []) ? this.renderAlbumDetail() :
         <p>No Favorite Album to Display!</p>}
      </div>
    );
  }
}

export default FavoriteArtistCard;
