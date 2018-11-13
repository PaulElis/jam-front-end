import React, { Component } from 'react';
// import '../styles/favorites/FavoriteArtistBio.css'

class FavoriteArtistBio extends Component {

  renderArtistBio = () => {
    const firstArtist = this.props.favorite_artists[0]
    const secondArtist = this.props.favorite_artists[1]
    if(firstArtist.bio){
      return <p> Bio: {firstArtist.bio.slice(0, 500)} </p>
    } else if(secondArtist.bio){
      return <p> Bio: {secondArtist.bio.slice(0, 500)} </p>
    }
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
