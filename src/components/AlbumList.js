import React, { Component } from 'react';
import AlbumDetail from './AlbumDetail.js'
import '../styles/AlbumList.css'
// import MediaQuery from 'react-responsive';

import { runSearch, fetchArtists, getFavorites, deleteArtistFromFavorites } from '../actions/actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class AlbumList extends Component {
  state = {
    albums: [],
    artists: [],
    favorites: [],
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    // console.log('nextProps', nextProps.artists);
    return {
      albums: nextProps.albums === [] ? [] : nextProps.albums,
      artists: nextProps.artists === [] ? [] : nextProps.artists,
      favorites: nextProps.favorites === [] ? [] : nextProps.favorites,
    }
  }

  componentDidMount = () => {

  }

  renderFavorites = () => {
    return this.state.favorites.map(favorite =>
      <AlbumDetail key={favorite.url} artist={favorite} deleteArtist={this.props.deleteArtist} favorite={favorite} image={favorite.image}/>)
  }

  renderArtists = () => {
    return this.state.artists.map(artist =>
        <AlbumDetail key={artist.url} artist={artist} image={artist.image[3]['#text']}/>
    )
  }

  renderAlbums = () => {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.url} album={album} image={album.image[3]['#text']}/>)
  }

  render() {
    // console.log('AlbumList state:', this.state)
    // console.log('AlbumList props', this.props)
    return (
      <div id='albumlist-container'>
        {this.state.favorites ? this.renderFavorites() : this.state.artists ?
          this.renderArtists() : this.renderAlbums()}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    albums: state.albums,
    artists: state.artists,
    favorites: state.favorites,
  }
}

export default withRouter(connect(mapStateToProps, {runSearch, fetchArtists, getFavorites, deleteArtistFromFavorites})(AlbumList))
