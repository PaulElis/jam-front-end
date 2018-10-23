import React, { Component } from 'react';
import '../styles/Favorites.css'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Favorites extends Component {
  render() {
    // console.log('in Favorites');
    return (
      <div id='favorites-container'>
        Favorites
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    favorites: state.favorites,
  }
}

export default withRouter(connect(mapStateToProps, null)(Favorites))
