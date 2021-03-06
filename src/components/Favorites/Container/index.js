import React, { Component } from 'react';
import './index.css'
import FavoriteArtistsList from '../List'
import FavoriteArtistCard from '../Card'
import FavoriteArtistAlbums from '../Albums'
import FavoriteArtistBio from '../Bio'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getFavorites, deleteArtistFromFavorites, deleteAlbumFromFavorites } from '../../../actions/actions'

class Favorites extends Component {

  state = {}

  static getDerivedStateFromProps = (nextProps, prevState) => {
    return {
      favorite_artists: nextProps.favorite_artists === [] ? [] : nextProps.favorite_artists,
    }
  }

  componentDidMount = () => { this.props.getFavorites() }

  deleteArtist = (artist) => {
    const artistIndex = this.state.favorite_artists.indexOf(artist)
    const newArtistsArray = [...this.state.favorite_artists]
    newArtistsArray.splice(artistIndex, 1);
    this.setState({ favorite_artists: newArtistsArray })
    this.props.deleteArtistFromFavorites(artist)
  }

  deleteAlbum = (album) => {
    const artistId = album.favorite_artist_id
    const artist = this.state.favorite_artists.find(artist => artist.id === artistId)
    let favorite_albums = artist.favorite_albums
    const albumIndex = favorite_albums.indexOf(album)
    const newArtistsArray = [...this.state.favorite_artists]
    const newAlbumsArray = [...favorite_albums]
    newAlbumsArray.splice(albumIndex, 1);
    favorite_albums = newAlbumsArray
    this.setState({ favorite_artists: newArtistsArray })
    this.props.deleteAlbumFromFavorites(album)
  }

  renderCSSTag = () => {
    const favorite_artists = this.props.favorite_artists
    if(favorite_artists && favorite_artists.length === 0){
      return 'no-'
    } else {
      return ''
    }
  }

  render() {
    // console.log('in Favorites props', this.props);
    // console.log('in Favorites state', this.state);
    return (
      <div>
      { this.state.favorite_artists === undefined ?
        <div className='spinner-container'>
          <div className="loader" />
        </div>
        :
        <div id={`${this.renderCSSTag()}favorites-container`}>
          <div id='favorites-toplevel'>
          <FavoriteArtistsList {...this.props} favorite_artists={this.state.favorite_artists} renderCSSTag={this.renderCSSTag} />
          <FavoriteArtistCard {...this.props} favorite_artists={this.state.favorite_artists} deleteArtist={this.deleteArtist} renderCSSTag={this.renderCSSTag} />
          </div>
          <FavoriteArtistAlbums {...this.props} favorite_artists={this.state.favorite_artists} deleteAlbum={this.deleteAlbum} renderCSSTag={this.renderCSSTag} />
          <FavoriteArtistBio {...this.props} favorite_artists={this.state.favorite_artists} renderCSSTag={this.renderCSSTag} />
        </div>
      }
      </div>
    );
  }
}

function mapStateToProps(state){
  return { favorite_artists: state.favorite_artists }
}

export default withRouter(connect(mapStateToProps, {getFavorites, deleteArtistFromFavorites, deleteAlbumFromFavorites})(Favorites))
