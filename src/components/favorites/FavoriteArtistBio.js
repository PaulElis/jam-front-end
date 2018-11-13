import React, { Component } from 'react';
// import '../styles/favorites/FavoriteArtistBio.css'

class FavoriteArtistBio extends Component {

  renderArtistBio = () => {
    const firstArtist = this.props.favorite_artists[0]
    return <p> Bio: {firstArtist.bio.slice(0, 500)} </p>
  }

  render() {
    return (
      <div id='favoriteartistbio-container'>
        {this.props.favorite_artists ? this.renderArtistBio() : <p> No Bio to Show! </p>}
      </div>
    );
  }
}

export default FavoriteArtistBio;
