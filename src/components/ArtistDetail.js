import React, { Component } from 'react';
import Card from './Card.js'
import CardSection from './CardSection.js'
import Button from './Button.js'
// import album from '../images/album.jpg'
import record from '../images/record.png'
import '../styles/ArtistDetail.css'

class ArtistDetail extends Component {

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

  render() {
    // console.log(this.props.artist.name);
    return (
        <Card>
          <CardSection>
            <span> {this.props.artist.name} </span>
            <span> {this.numberFormat(this.props.artist.listeners)} Listeners </span>
          </CardSection>

          <CardSection>
            <img
              id='album-image'
              src={this.props.artist.image[2]['#text'] ? this.props.artist.image[2]['#text'] : record}
              alt='oh no!'
              onError={(e) => { e.target.src = record /*replacement image*/ }}
            />
          </CardSection>

          <CardSection>
            <Button link={this.props.artist.url}>
              View Artist
            </Button>
          </CardSection>

        </Card>
    );
  }
}

export default ArtistDetail;
