import React, { Component } from 'react';
import AlbumDetail from './AlbumDetail.js'
import '../styles/AlbumList.css'
// import MediaQuery from 'react-responsive';

import { getFavorites, deleteArtistFromFavorites, runSearch } from '../actions/actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class AlbumList extends Component {
  state = {
    // albums: [],
    // favorites: [],
    // top_artists: [],
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    return {
      albums: nextProps.albums === [] ? [] : nextProps.albums,
      // favorites: nextProps.favorites === [] ? [] : nextProps.favorites,
      top_artists: nextProps.top_artists === [] ? [] : nextProps.top_artists,
    }
  }

  componentDidMount = () => {

  }

  renderFavorites = () => {
    // console.log('in renderFavorites');
    return this.props.favorites.map(favorite =>
      <AlbumDetail key={favorite.url} artist={favorite} deleteArtist={this.props.deleteArtist} favorite={favorite} image={favorite.image}/>)
  }

  renderTopArtists = () => {
    // console.log('in renderTopArtists', this.state.top_artists);
    return this.state.top_artists.map(artist =>
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
        {this.props.favorites ?
          this.renderFavorites() : this.state.top_artists ?
          this.renderTopArtists() : this.renderAlbums()}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    albums: state.albums,
    // favorites: state.favorites,
    top_artists: state.top_artists,
  }
}

export default withRouter(connect(mapStateToProps, {getFavorites, deleteArtistFromFavorites, runSearch})(AlbumList))
