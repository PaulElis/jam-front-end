import React, { Component } from 'react';
import Card from '../Card'
import CardSection from '../CardSection'
import Button from '../Button'
import record from '../../images/record.png'
import placeholder from '../../images/placeholder.jpeg'
import './index.css'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { addArtistToFavorites, addAlbumToFavorites, deleteArtistFromFavorites, fetchFullArtistInfo } from '../../actions/actions'


class AlbumDetail extends Component {

  state = {
    loaded: false,
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
    let height = getComputedStyle(document.getElementById(`${this.renderCSSTag()}album-image`)).height
    console.log(height);
    if(e.target.id === 'favoriteartist-clickable'){
      this.props.deleteArtist(this.props.artist)
    } else if(this.props.location.pathname === '/albums'){
      this.addAlbumToFavorites(this.props.album)
    } else if(this.props.location.pathname === '/favorites' && e.target.id === 'favoritealbum-clickable'){
      this.props.deleteAlbum(this.props.album)
    } else{
    this.props.location.pathname === '/home' ? this.addArtistToFavorites(this.props.artist)
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

  renderAlbumName = () => {
    if(this.props.album.name.length > 18){
      return `${this.props.album.name.slice(0, 18)}...`
    } else {
      return this.props.album.name
    }
  }

  renderArtistName = () => {
    if(this.props.artist.name.length > 21){
      return `${this.props.artist.name.slice(0, 21)}...`
    } else {
      return this.props.artist.name
    }
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
    // console.log('AlbumDetail state:', this.state);
    return (
      <div id={`${this.renderCSSTag()}albumdetail-container`}>
        <Card>
          <div id={`${this.renderCSSTag()}card-header-upper-container`}>
            <CardSection>
              <div id={`${this.renderCSSTag()}card-header-container`}>
                <span className='card-header' id={`${this.renderCSSTag()}card-header-link`}>
                {/* Is there an Artist or an Album */}
                {this.props.artist ?
                  <a href={this.props.artist.url} target="_blank" rel="noopener noreferrer">{this.renderArtistName()}</a> :
                    this.props.album.name !== '(null)' ?
                  <a href={this.props.album.url} target="_blank" rel="noopener noreferrer">{this.renderAlbumName()}</a> :
                    <a href={this.props.album.url} target="_blank" rel="noopener noreferrer">{this.props.album.artist.name}'s Untitled Album</a>}
                </span>

                <span className={`${this.renderCSSTag()}card-header`}>
                  {this.props.artist ? this.numberFormat(this.props.artist.listeners) :
                  this.numberFormat(this.props.album.playcount)} Plays </span>
              </div>
            </CardSection>
          </div>

          <CardSection>
            <div id='image-container'>
              <LazyLoadImage
                id={`${this.renderCSSTag()}album-image`}
                src={this.props.image ? this.props.image : record}
                effect="blur"
                placeholderSrc={placeholder}
                scrollPosition={this.props.scrollPosition}
                alt={record}
                onClick={this.albumClick}
                onError={(e) => { e.target.src = record /*replacement image*/ }}
              />
              <div id={`${this.renderCSSTag()}clickable`} onClick={this.albumClick} >
                {this.props.location.pathname === '/home' || this.props.location.pathname === '/albums' ?
                <p id={`${this.renderCSSTag()}clickable`}>Add to Favorites</p>
                : <p id={`${this.renderCSSTag()}clickable`}>Remove from Favorites</p>}
              </div>
            </div>
          </CardSection>

          <CardSection>
            <Button
              top_artists={this.props.top_artists}
              artist={this.props.artist}
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
