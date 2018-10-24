import React, { Component } from 'react';
import Card from './Card.js'
import CardSection from './CardSection.js'
import Button from './Button.js'
// import album from '../images/album.jpg'
import record from '../images/record.png'
import '../styles/AlbumDetail.css'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { addArtistToFavorites, deleteArtistFromFavorites } from '../actions/actions'


class AlbumDetail extends Component {

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

  componentDidMount = () => {
    
  }

  render() {
    // console.log('in AlbumDetail');
    // console.log('AlbumDetail props', this.props);
    // console.log('state', this.state);
    return (
      <div>
        <Card>
          <CardSection>
            <span> {this.props.artist ? this.props.artist.name :
              this.props.album.name !== '(null)' ? this.props.album.name : `${this.props.album.artist.name}'s Untitled Album`} </span>
            <span> {this.props.artist ? this.numberFormat(this.props.artist.listeners) : this.numberFormat(this.props.album.playcount)} Plays </span>
          </CardSection>

          <CardSection>
            <img
              id='album-image'
              src={this.props.image ? this.props.image : record}
              alt='oh no!'
              onClick={() => {this.props.favorite ? this.props.deleteArtistFromFavorites(this.props.favorite) : this.props.addArtistToFavorites(this.props.artist)}}
              onError={(e) => { e.target.src = record /*replacement image*/ }}
            />
          </CardSection>

          <CardSection>
            <Button link={this.props.artist ? this.props.artist.url : this.props.album.url}>
              {this.props.artist ? 'View Arist' : 'View Album'}
            </Button>
          </CardSection>

        </Card>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    favorites: state.favorites,
  }
}

export default withRouter(connect(mapStateToProps, {addArtistToFavorites, deleteArtistFromFavorites})(AlbumDetail))
