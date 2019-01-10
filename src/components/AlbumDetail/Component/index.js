import React, { Component } from 'react';
import Card from '../../Card'
import CardSection from '../../CardSection'
import TopOfCard from '../../TopOfCard'
import AlbumImage from '../../AlbumImage'
import Button from '../../Button'
import './index.css'

class AlbumDetail extends Component {

  render() {
    // console.log('AlbumDetail props:', this.props);
    return (
      <div id={`${this.props.renderCSSTag()}albumdetail-container`}>
        <Card>
          <div id={`${this.props.renderCSSTag()}card-header-upper-container`}>
            <CardSection>
              <TopOfCard { ...this.props} />
            </CardSection>
          </div>

          <CardSection>
            <div id='image-container'>
              <AlbumImage {...this.props} />
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

export default AlbumDetail
