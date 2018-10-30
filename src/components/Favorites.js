import React, { Component } from 'react';
import '../styles/Favorites.css'
import AlbumList from './AlbumList.js'

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
      favorites: nextProps.favorites === [] ? [] : nextProps.favorites,
    }
  }

  deleteArtist = (artist) => {
    const artistIndex = this.state.favorites.indexOf(artist)
    const newArray = [...this.state.favorites]
      newArray.splice(artistIndex, 1);
        this.setState({
          favorites: newArray
        })
      // console.log(`Deleted artist index: ${artistIndex}, new Favorites_Artists array:`,  newArray);
    this.props.deleteArtistFromFavorites(artist)
  }

  componentDidMount(){
    this.props.getFavorites()
  }

  render() {
    // console.log('in Favorites props', this.props);
    // console.log('in Favorites state', this.state);
    return (
      <div id='favorites-container'>
        <AlbumList favorites={this.state.favorites} deleteArtist={this.deleteArtist}/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    favorites: state.favorites,
  }
}

export default withRouter(connect(mapStateToProps, {getFavorites, deleteArtistFromFavorites})(Favorites))
