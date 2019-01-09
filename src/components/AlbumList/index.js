import React, { Component } from 'react';
import AlbumDetail from '../AlbumDetail'
import './index.css'

import { getFavorites, deleteArtistFromFavorites, runSearch } from '../../actions/actions'
import { connect } from 'react-redux'

class AlbumList extends Component {

  render() {
    console.log('AlbumList:', this.props);
    return (
      <div>
        <AlbumDetail {...this.props} />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    albums: state.albums,
    top_artists: state.top_artists,
  }
}

export default connect(mapStateToProps, {getFavorites, deleteArtistFromFavorites, runSearch})(AlbumList)
