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
    if (this.props.artist){
      return <a href={this.props.artist.url} target="_blank" rel="noopener noreferrer">{this.renderArtistOrAlbumName()}</a>
    } else if(this.props.album.name !== '(null)') {
      return <a href={this.props.album.url} target="_blank" rel="noopener noreferrer">{this.renderArtistOrAlbumName()}</a>
    } else {
      return <a href={this.props.album.url} target="_blank" rel="noopener noreferrer">{this.props.album.artist.name}'s Untitled Album</a>
    }
  }

  renderArtistOrAlbumName = () => {
    if(this.props.artist){
      return this.props.artist.name.length > 21 ? `${this.props.artist.name.slice(0, 21)}...`
        : this.props.artist.name
    } else if (this.props.album) {
      return this.props.album.name.length > 21 ? `${this.props.album.name.slice(0, 21)}...`
        : this.props.album.name
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
