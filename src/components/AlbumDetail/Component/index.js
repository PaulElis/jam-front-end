import React, { Component } from 'react';
import Card from '../../Card'
import CardSection from '../../CardSection'
import TopOfCard from '../../TopOfCard'
import Button from '../../Button'
import record from '../../../images/record.png'
import placeholder from '../../../images/placeholder.jpeg'
import './index.css'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { addArtistToFavorites, addAlbumToFavorites, deleteArtistFromFavorites, fetchFullArtistInfo } from '../../../actions/actions'


class AlbumDetail extends Component {

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

  // getImageHeight = () => {
  //   const el = document.getElementById(`${this.renderCSSTag()}album-image`)
  //   if( el && el !== 'auto' ) {
  //     let height = getComputedStyle(el).height
  //     console.log(height);
  //     return height
  //   }
  // }

  render() {
    console.log('AlbumDetail props:', this.props);
    return (
      <div id={`${this.renderCSSTag()}albumdetail-container`}>
        <Card>
          <div id={`${this.renderCSSTag()}card-header-upper-container`}>
            <CardSection>
              <TopOfCard { ...this.props} />
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
                {this.props.location.pathname === '/' || this.props.location.pathname === '/albums' ?
                <p id={`${this.renderCSSTag()}clickable`}>Add to Favorites</p>
                : <p id={`${this.renderCSSTag()}clickable`}>Remove from Favorites</p>}
              </div>
            </div>
          </CardSection>

          <CardSection>
            <Button { ...this.props} />
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
