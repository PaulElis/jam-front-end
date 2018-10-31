import React, { Component } from 'react';
import Search from './Search.js'
// import Favorites from './Favorites.js'
import '../styles/Header.css'
import favorites from '../images/favorites.png'

import { runSearch, fetchTopArtists } from '../actions/actions'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";

class Header extends Component {

  renderTopArtists = () => {
    this.props.fetchTopArtists()
      .then(()=>
        this.props.history.push('/home'))
  }

  render() {
    // console.log('Header', this.props);
    return (
      <div id='header-container'>
        <div id='jam-logo' alt='oh no!' onClick={() => {this.renderTopArtists()}} >
          JAM
        </div>
        <div id='header-right'>
          <Search />
          <div id='favorites-link' >
              <img id='favorites-image' alt='oh no!' src={favorites}
                onClick={() => {this.props.history.push('/favorites')}} />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    albums: state.albums,
    artists: state.artists,
  }
}

export default withRouter(connect(mapStateToProps, {runSearch, fetchTopArtists})(Header))
