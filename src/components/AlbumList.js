import React, { Component } from 'react';
// import ArtistDetail from './ArtistDetail.js'
import AlbumDetail from './AlbumDetail.js'

import { runSearch, fetchArtists } from '../actions/actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class AlbumList extends Component {
  state = {
    albums: [],
    artists: [],
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    // console.log('nextProps', nextProps.artists);
    return {
      albums: nextProps.albums === [] ? [] : nextProps.albums,
      artists: nextProps.artists === [] ? [] : nextProps.artists,
    }
  }

  renderFavorites = () => {
    return this.props.favorites.map(favorite =>
      <AlbumDetail key={favorite.url} artist={favorite} favorite={favorite} image={favorite.image}/>)
  }

  renderArtists = () => {
    return this.state.artists.map(artist =>
      <AlbumDetail key={artist.url} artist={artist} image={artist.image[2]['#text']}/>)
  }

  renderAlbums = () => {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.url} album={album} image={album.image[2]['#text']}/>)
  }

  render() {
    // console.log('AlbumList state:', this.state)
    // console.log('AlbumList props', this.props)
    return (
      <div>
        {this.props.favorites ? this.renderFavorites() : this.state.artists ?
          this.renderArtists() : this.renderAlbums()}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    albums: state.albums,
    artists: state.artists,
  }
}

export default withRouter(connect(mapStateToProps, {runSearch, fetchArtists})(AlbumList))
