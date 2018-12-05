import React, { Component } from 'react';
import '../../styles/favorites/FavoriteArtistsList.css'

class FavoriteArtistsList extends Component {

  renderFavoriteArtists = () => {
    return this.props.favorite_artists.map(artist =>
      <p key={artist.name} id='artistlist-name'>{this.renderArtistName(artist.name)}</p>)
  }

  renderArtistName = (name) => {
    if(name.length > 21){
      return `${name.slice(0, 21)}...`
    } else {
      return name
    }
  }

  render() {
    console.log(this.props.favorite_artists);
    return (
      <div id='favoriteartistslist-container'>
        {this.props.favorite_artists ? this.renderFavoriteArtists()
          : <p>No Favorite Artists to Display!</p>}
      </div>
    );
  }
}

export default FavoriteArtistsList;
