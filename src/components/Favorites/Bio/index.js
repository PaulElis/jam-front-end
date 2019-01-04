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

  renderCSSTag = () => {
    const favorite_artists = this.props.favorite_artists
    if(favorite_artists && favorite_artists.length === 0){
      return 'no-'
    } else {
      return ''
    }
  }

  render() {
    // console.log(this.props.favorite_artists);
    return (
      <div id={`${this.renderCSSTag()}favoriteartistbio-container`}>
        {this.props.favorite_artists !== (undefined || []) ? this.renderArtistBio()
          : <p> No Bio to Show! </p>}
      </div>
    );
  }
}

export default FavoriteArtistBio;
