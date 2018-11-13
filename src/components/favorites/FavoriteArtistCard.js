import React, { Component } from 'react';
import AlbumDetail from '../AlbumDetail.js'
// import '../styles/favorites/FavoriteArtistCard.css'

class FavoriteArtistCard extends Component {

  renderAlbumDetail = () => {
    const firstArtist = this.props.favorite_artists[0]
    return <AlbumDetail artist={firstArtist} favorite={firstArtist} image={firstArtist.image}/>
  }

  render() {
    return (
      <div id='favoriteartistcard-container'>
        {this.props.favorite_artists ? this.renderAlbumDetail() : <p>No Favorite Album to Display!</p>}
      </div>
    );
  }
}

export default FavoriteArtistCard;
