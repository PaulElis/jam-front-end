import React, { Component } from 'react';
import AlbumList from '../../AlbumList'
import './index.css'

import { getFavorites, deleteArtistFromFavorites, runSearch } from '../../../actions/actions'
import { connect } from 'react-redux'

class AlbumListContainer extends Component {

  state = {}

  static getDerivedStateFromProps = (nextProps, prevState) => {
    return {
      albums: nextProps.albums === [] ? [] : nextProps.albums,
      top_artists: nextProps.top_artists === [] ? [] : nextProps.top_artists,
    }
  }

  renderAlbumList = () => {
    console.log('in renderAlbumList', this.state.top_artists);
    if(this.state.top_artists){
      return this.state.top_artists.map(artist =>
      <AlbumList key={artist.url} artist={artist} top_artists={this.state.top_artists} image={artist.image[3]['#text']}/>
    )} else if (this.state.albums){
      return this.state.albums.map(album =>
      <AlbumList key={album.url} album={album} image={album.image[3]['#text']}/>
    )}
  }

  render() {
    return(
      <div id='albumlist-container'>
        {this.renderAlbumList()}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    albums: state.albums,
    top_artists: state.top_artists,
  }
}

export default connect(mapStateToProps, {getFavorites, deleteArtistFromFavorites, runSearch})(AlbumListContainer)
