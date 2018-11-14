import React, { Component } from 'react';
import '../styles/Favorites.css'
// import AlbumList from './AlbumList.js'
import FavoriteArtistsList from './favorites/FavoriteArtistsList.js'
import FavoriteArtistCard from './favorites/FavoriteArtistCard.js'
import FavoriteArtistAlbums from './favorites/FavoriteArtistAlbums.js'
import FavoriteArtistBio from './favorites/FavoriteArtistBio.js'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getFavorites, deleteArtistFromFavorites, deleteAlbumFromFavorites } from '../actions/actions'

class Favorites extends Component {

  state = {
    // favorites: [],
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    // console.log('nextProps', nextProps.artists);
    return {
      favorite_artists: nextProps.favorite_artists === [] ? [] : nextProps.favorite_artists,
      favorite_albums: nextProps.favorite_albums === [] ? [] : nextProps.favorite_albums,
    }
  }

  deleteArtist = (artist) => {
    console.log('in deleteArtist', artist);
    const artistIndex = this.state.favorite_artists.indexOf(artist)
    const newArray = [...this.state.favorite_artists]
      newArray.splice(artistIndex, 1);
        this.setState({ favorite_artists: newArray })
      // console.log(`Deleted artist index: ${artistIndex}, new Favorites_Artists array:`,  newArray);
    this.props.deleteArtistFromFavorites(artist)
  }

  deleteAlbum = (album) => {
    // console.log(album);
    const artistId = album.favorite_artist_id
    const artist = this.state.favorite_artists.find(artist => artist.id === artistId)
    // console.log('artists albums:', artist.favorite_albums)
    const favorite_albums = artist.favorite_albums

    const albumIndex = favorite_albums.indexOf(album)
    const newArtistsArray = [...this.state.favorite_artists]
    const newAlbumsArray = [...favorite_albums]
    // console.log('albumIndex:', albumIndex);
    console.log('newAlbumsArray:', newAlbumsArray);
    console.log('newArtistsArray:', newArtistsArray);
      newAlbumsArray.splice(albumIndex, 1);
      // newAlbumsArray.splice(albumIndex, 1);
        this.setState({
          favorite_artists: newArtistsArray,
          favorite_albums: newAlbumsArray,
         })
      console.log(`Deleted album index: ${albumIndex}, newAlbumsArray:`,  newAlbumsArray);
    this.props.deleteAlbumFromFavorites(album)
  }

  componentDidMount(){
    this.props.getFavorites()
  }

  render() {
    // console.log('in Favorites props', this.props);
    // console.log('in Favorites state', this.state);
    // <AlbumList favorites={this.state.favorites} deleteArtist={this.deleteArtist}/>
    return (
      <div id='favorites-container'>
        <FavoriteArtistsList favorite_artists={this.state.favorite_artists} />
        <FavoriteArtistCard favorite_artists={this.state.favorite_artists} deleteArtist={this.deleteArtist} />
        <FavoriteArtistAlbums favorite_artists={this.state.favorite_artists} favorite_albums={this.state.favorite_albums} deleteArtist={this.deleteArtist} deleteAlbum={this.deleteAlbum} />
        <FavoriteArtistBio favorite_artists={this.state.favorite_artists} />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    favorite_artists: state.favorite_artists,
    favorite_albums: state.favorite_albums,
  }
}

export default withRouter(connect(mapStateToProps, {getFavorites, deleteArtistFromFavorites, deleteAlbumFromFavorites})(Favorites))
