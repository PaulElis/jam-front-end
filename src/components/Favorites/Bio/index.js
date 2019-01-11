import React, { Component } from 'react';
import './index.css'

class FavoriteArtistBio extends Component {

  renderArtistBio = () => {
    if(this.props.favorite_artists){
      for(let artist of this.props.favorite_artists){
        let content = artist.bio
        // content = content.replace(/\n([ \t]*\n)+/g, <p></p>)
        //          .replace(/\n/g, '<br />');
        return <div> {content.slice(0, 1000)} </div>
        // return <p> {artist.bio.slice(0, 1000)} </p>
      }
    }
  }

  render() {
    // console.log('Bio props:', this.props);
    return (
      <div id={`${this.props.renderCSSTag()}favoriteartistbio-container`}>
        {this.props.favorite_artists !== (undefined || []) ? this.renderArtistBio()
          : <p> No Bio to Show! </p>}
      </div>
    );
  }
}

export default FavoriteArtistBio;
