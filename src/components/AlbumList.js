import React, { Component } from 'react';
import ArtistDetail from './ArtistDetail.js'
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

  componentDidMount(){
    // this.state.albums === [] ? this.props.fetchArtists() : this.props.history.push('/albums')
  }

  renderAlbums = () => {
    return this.state.albums ? this.state.albums.map(album =>
      <AlbumDetail key={album.url} album={album}/>) : ''
  }

  renderArtists = () => {
    return this.state.artists ? this.state.artists.map(artist =>
      <ArtistDetail key={artist.url} artist={artist}/>) : ''
  }

  render() {
    // console.log('AlbumList state:', this.state)
    // console.log('AlbumList albums:', this.state.albums)
    // console.log('props', this.props)
    return (
      <div>
        {this.state.artists ? this.renderArtists() : this.renderAlbums()}
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
