import React, { Component } from 'react';
import '../../styles/favorites/FavoriteArtistBio.css'

class FavoriteArtistBio extends Component {

  renderArtistBio = () => {
    if(this.props.favorite_artists){
      for(let artist of this.props.favorite_artists){
          return <p> Bio: {artist.bio.slice(0, 500)} </p>
      }
    }
  }

  render() {
    // console.log(this.props.favorite_artists);
    return (
      <div id='favoriteartistbio-container'>
        {this.props.favorite_artists !== (undefined || []) ? this.renderArtistBio()
          : <p> No Bio to Show! </p>}
      </div>
    );
  }
}

export default FavoriteArtistBio;
