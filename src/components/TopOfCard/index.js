import React, { Component } from 'react';
import './index.css'
import { numberFormat } from './functions.js'

class TopOfCard extends Component {

  renderCSSTag = () => {
    return this.props.top_artists === undefined && this.props.artist ?
      'favoriteartist-' : this.props.top_artists === undefined ?
      'favoritealbum-' : ''
  }

  renderLink = () => {
    let link = ''
    let name = ''
    if (this.props.artist){
      link = this.props.artist.url
    } else if (this.props.album) {
      link = this.props.album.url
        if(this.props.album.name === '(null)'){
          name = `${this.props.album.artist.name}'s Untitled Album`
        }
    }
    return(
      <a href={link} target="_blank" rel="noopener noreferrer">
        {name === '' ? this.renderArtistOrAlbumName() : name}
      </a>
    )
  }

  renderArtistOrAlbumName = () => {
    if(this.props.artist){
      return this.props.artist.name.length > 21 ?
        `${this.props.artist.name.slice(0, 21)}...` : this.props.artist.name
    } else if (this.props.album) {
      return this.props.album.name.length > 21 ?
        `${this.props.album.name.slice(0, 21)}...` : this.props.album.name
    }
  }

  render() {
    // console.log('props', this.props);
    return (
      <div id={`${this.renderCSSTag()}card-header-container`}>
        <span className='card-header' id={`${this.renderCSSTag()}card-header-link`}>
        {/* Is there an Artist or an Album */}
        {this.renderLink()}
        </span>

        <span className={`${this.renderCSSTag()}card-header`}>
          {this.props.artist ? numberFormat(this.props.artist.listeners) :
          numberFormat(this.props.album.playcount)} Plays </span>
      </div>
    );
  }
}

export default TopOfCard;
