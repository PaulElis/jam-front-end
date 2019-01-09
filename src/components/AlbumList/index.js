import React, { Component } from 'react';
import AlbumDetail from '../AlbumDetail'
import './index.css'

import { getFavorites, deleteArtistFromFavorites, runSearch } from '../../actions/actions'
import { connect } from 'react-redux'

class AlbumList extends Component {

  state = {}

  static getDerivedStateFromProps = (nextProps, prevState) => {
    return {
      albums: nextProps.albums === [] ? [] : nextProps.albums,
      top_artists: nextProps.top_artists === [] ? [] : nextProps.top_artists,
    }
  }

  renderTopArtists = () => {
    // console.log('in renderTopArtists', this.state.top_artists);
    return this.state.top_artists.map(artist =>
      <AlbumDetail key={artist.url} artist={artist} top_artists={this.state.top_artists} image={artist.image[3]['#text']}/>
    )
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
        {this.state.top_artists ?
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

export default connect(mapStateToProps, {getFavorites, deleteArtistFromFavorites, runSearch})(AlbumList)
