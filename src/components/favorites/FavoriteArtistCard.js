import React, { Component } from 'react';
import AlbumDetail from '../AlbumDetail.js'
// import '../styles/favorites/FavoriteArtistCard.css'

class FavoriteArtistCard extends Component {

  renderAlbumDetail = () => {
    // console.log('this.props.favorite_artists', this.props.favorite_artists);
    const firstArtist = this.props.favorite_artists[0]
    return <AlbumDetail artist={firstArtist} favorite={firstArtist} deleteArtist={this.props.deleteArtist} image={firstArtist.image} key={firstArtist.mbid}/>
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
