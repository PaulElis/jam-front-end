import React, { Component } from 'react';
import '../styles/Favorites.css'
import AlbumList from './AlbumList.js'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getFavorites } from '../actions/actions'

class Favorites extends Component {

  componentDidMount(){
    this.props.getFavorites()
  }

  render() {
    // console.log('in Favorites', this.props);
    return (
      <div id='favorites-container'>
        Favorites
        <AlbumList favorites={this.props.favorites} />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    favorites: state.favorites,
  }
}

export default withRouter(connect(mapStateToProps, {getFavorites})(Favorites))
