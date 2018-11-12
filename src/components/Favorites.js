import React, { Component } from 'react';
import '../styles/Favorites.css'
// import AlbumList from './AlbumList.js'
import FavoriteArtistsList from './favorites/FavoriteArtistsList.js'
import FavoriteArtistsCard from './favorites/FavoriteArtistsCard.js'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getFavorites, deleteArtistFromFavorites } from '../actions/actions'

class Favorites extends Component {

  state = {
    // favorites: [],
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    // console.log('nextProps', nextProps.artists);
    return {
      favorite_artists: nextProps.favorite_artists === [] ? [] : nextProps.favorite_artists,
    }
  }

  deleteArtist = (artist) => {
    const artistIndex = this.state.favorite_artists.indexOf(artist)
    const newArray = [...this.state.favorite_artists]
      newArray.splice(artistIndex, 1);
        this.setState({ favorite_artists: newArray })
      // console.log(`Deleted artist index: ${artistIndex}, new Favorites_Artists array:`,  newArray);
    this.props.deleteArtistFromFavorites(artist)
  }

  componentDidMount(){
    this.props.getFavorites()
  }

  render() {
    // console.log('in Favorites props', this.props);
    // console.log('in Favorites state', this.state);
    // <AlbumList favorites={this.state.favorites} deleteArtist={this.deleteArtist}/>
    return (
      <div id='favorites-container'>
        <FavoriteArtistsList favorite_artists={this.state.favorite_artists} deleteArtist={this.deleteArtist} />
        <FavoriteArtistsCard />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    favorite_artists: state.favorite_artists,
  }
}

export default withRouter(connect(mapStateToProps, {getFavorites, deleteArtistFromFavorites})(Favorites))
