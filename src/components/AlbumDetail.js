import React, { Component } from 'react';
import Card from './Card.js'
import CardSection from './CardSection.js'
import Button from './Button.js'
import record from '../images/record.png'
import '../styles/AlbumDetail.css'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { addArtistToFavorites, addAlbumToFavorites, deleteArtistFromFavorites, fetchFullArtistInfo } from '../actions/actions'


class AlbumDetail extends Component {

  state: {
    favorite_artistss: [],
  }

  numberFormat = (num) => {
          // Nine Zeroes for Billions
  return Math.abs(Number(num)) >= 1.0e+9
       ? Math.abs(Number(num)) / 1.0e+9 + "B"
          // Six Zeroes for Millions
       : Math.abs(Number(num)) >= 1.0e+6
       ? Math.round(Number(num).toString().slice(0,2)) / 1.0e+1 + "M"
          // Three Zeroes for Thousands
       : Math.abs(Number(num)) >= 1.0e+3
       ? Math.round(Number(num).toString().slice(0,3)) + "K"
       : Math.abs(Number(num));
  }

  addAlbumToFavorites = (album) => {
    console.log('album:', album);
    this.props.fetchFullArtistInfo(album.artist.name)
    .then(() => this.props.addArtistToFavorites(this.props.full_artist_info))
    .then(() => this.props.addAlbumToFavorites(album))
  }

  addArtistToFavorites = (artist) => {
    this.props.fetchFullArtistInfo(artist.name)
    .then(() => this.props.addArtistToFavorites(this.props.full_artist_info))
  }

  albumClick = () => {
    this.props.album && this.props.favorite_artists ? this.props.deleteAlbum(this.props.album)
      : this.props.favorite_artists ? this.props.deleteArtist(this.props.artist)
      : this.props.artist ? this.addArtistToFavorites(this.props.artist)
      : this.addAlbumToFavorites(this.props.album)
  }
  // albumClick = () => {
  //   this.props.favorite_artists ? this.props.deleteArtist(this.props.favorite_artists)
  //     : this.props.artist ? this.addArtistToFavorites(this.props.artist)
  //     : this.addAlbumToFavorites(this.props.album)
  // }

  render() {
    // console.log('in AlbumDetail');
    console.log('AlbumDetail props', this.props);
    // console.log('state', this.state);
    return (
      <div id='albumdetail-container'>
        <Card>
          <div id='card-header-upper-container'>
            <CardSection>
              <div id='card-header-container'>
              {/* Is there an Artist or an Album */}
                <span className='card-header' id='card-header-link'>
                  {this.props.artist ?
                  <a href={this.props.artist.url} target="_blank" rel="noopener noreferrer">{this.props.artist.name}</a> :
                    this.props.album.name !== '(null)' ?
                  <a href={this.props.album.url} target="_blank" rel="noopener noreferrer">{this.props.album.name}</a> :
                    <a href={this.props.album.url} target="_blank" rel="noopener noreferrer">{this.props.album.artist.name}'s Untitled Album</a>}
                </span>

                <span className='card-header'> {this.props.artist ? this.numberFormat(this.props.artist.listeners) :
                  this.numberFormat(this.props.album.playcount)} Plays </span>
              </div>
            </CardSection>
          </div>

          <CardSection>
            <div id='image-container'>
              <img
                id='album-image'
                src={this.props.image ? this.props.image : record}
                alt='oh no!'
                onClick={this.albumClick}
                onError={(e) => { e.target.src = record /*replacement image*/ }} />
              <div
                id='clickable'
                onClick={this.albumClick} >
                    {this.props.favorite_artists ? <p>Remove from Favorites</p>
                    : <p>Add to Favorites</p>}
              </div>
            </div>
          </CardSection>

          <CardSection>
            <Button
              id='view-button'
              link={this.props.artist ? this.props.artist.url : this.props.album.url} >
              {this.props.artist ? 'View Artist' : 'View Album'}
            </Button>
          </CardSection>
        </Card>
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

export default withRouter(connect(mapStateToProps, {addArtistToFavorites, addAlbumToFavorites, deleteArtistFromFavorites, fetchFullArtistInfo})(AlbumDetail))
