import React, { Component } from 'react';
import AlbumDetail from '../Component'
import './index.css'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { addArtistToFavorites, addAlbumToFavorites, deleteArtistFromFavorites, fetchFullArtistInfo } from '../../../actions/actions'


class AlbumDetailContainer extends Component {

  state = {
    loaded: false,
  }

  addAlbumToFavorites = (album) => {
    // console.log('album:', album);
    this.props.fetchFullArtistInfo(album.artist.name)
    .then(() => this.props.addArtistToFavorites(this.props.full_artist_info))
    .then(() => this.props.addAlbumToFavorites(album))
  }

  addArtistToFavorites = (artist) => {
    this.props.fetchFullArtistInfo(artist.name)
    .then(() => this.props.addArtistToFavorites(this.props.full_artist_info))
  }

  albumClick = (e) => {
    // let height = getComputedStyle(document.getElementById(`${this.renderCSSTag()}album-image`)).height
    if(e.target.id === 'favoriteartist-clickable'){
      this.props.deleteArtist(this.props.artist)
    } else if(this.props.location.pathname === '/albums'){
      this.addAlbumToFavorites(this.props.album)
    } else if(this.props.location.pathname === '/favorites' && e.target.id === 'favoritealbum-clickable'){
      this.props.deleteAlbum(this.props.album)
    } else{
    this.props.location.pathname === '/' ? this.addArtistToFavorites(this.props.artist)
    : this.props.location.pathname === '/albums' ? this.addAlbumToFavorites(this.props.album)
    : e.target.id === "favoriteartist-album-image" ? this.props.deleteArtist(this.props.artist)
    : e.target.id === "favoritealbum-album-image" ? this.props.deleteAlbum(this.props.album)
    : console.log('AlbumClick Error!');
    }
    document.getElementById('favorites-image').style.backgroundColor='red'
    setTimeout(this.changeButtonBack, 2000);
  }

  changeButtonBack = () => {
    document.getElementById('favorites-image').style.backgroundColor='#fff'
  }

  renderCSSTag = () => {
    return this.props.top_artists === undefined && this.props.artist ?
      'favoriteartist-' : this.props.top_artists === undefined ?
      'favoritealbum-' : ''
  }

  getImageHeight = () => {
    const el = document.getElementById(`${this.renderCSSTag()}album-image`)
    if( el && el !== 'auto' ) {
      let height = getComputedStyle(el).height
      console.log(height);
      return height
    }
  }

  render() {
    console.log('AlbumDetailContainer props:', this.props);
    return (
      <div>
        <AlbumDetail {...this.props} />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    full_artist_info: state.full_artist_info,
    favorite_artists: state.favorite_artists,
  }
}

export default withRouter(connect(mapStateToProps, {addArtistToFavorites, addAlbumToFavorites, deleteArtistFromFavorites, fetchFullArtistInfo})(AlbumDetailContainer))
