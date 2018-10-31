import React, { Component } from 'react';
import AlbumDetail from './AlbumDetail.js'
import '../styles/AlbumList.css'
// import MediaQuery from 'react-responsive';

import { getFavorites, deleteArtistFromFavorites, runSearch } from '../actions/actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class AlbumList extends Component {
  state = {
    albums: [],
    favorites: [],
    new_artists: [],
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    // console.log('nextProps', nextProps.artists);
    return {
      albums: nextProps.albums === [] ? [] : nextProps.albums,
      new_artists: nextProps.new_artists === [] ? [] : nextProps.new_artists,
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
    console.log('in renderArtists', this.state.new_artists);
    // return this.state.new_artists.map(artist =>
      return <AlbumDetail key={this.state.new_artists.url} artist={this.state.new_artists} image={this.state.new_artists.image[3]['#text']}/>
    // )
  }

  renderAlbums = () => {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.url} album={album} image={album.image[3]['#text']}/>)
  }

  render() {
    console.log('AlbumList state:', this.state)
    // console.log('AlbumList props', this.props)
    return (
      <div id='albumlist-container'>
        {this.state.favorites.length !== 0 ? this.renderFavorites() : this.state.new_artists.length !== 0 ?
          this.renderArtists() : this.renderAlbums()}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    albums: state.albums,
    favorites: state.favorites,
    new_artists: state.new_artists,
  }
}

export default withRouter(connect(mapStateToProps, {getFavorites, deleteArtistFromFavorites, runSearch})(AlbumList))
