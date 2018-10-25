import React, { Component } from 'react';
import Search from './Search.js'
// import Favorites from './Favorites.js'
import '../styles/Header.css'
import favorites from '../images/favorites.png'

import { runSearch, fetchArtists } from '../actions/actions'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";

class Header extends Component {

  renderTopArtists = () => {
    this.props.fetchArtists()
      .then(()=>
        this.props.history.push('/home'))
  }

  render() {
    // console.log('Header', this.props);
    return (
      <div id='header-container'>
        <div id='jam-logo' onClick={() => {this.renderTopArtists()}} >
            JAM
        </div>
        <Search />
        <div id='favorites-link' >
            <img id='favorites-image' src={favorites}
              onClick={() => {this.props.history.push('/favorites')}} />
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

export default withRouter(connect(mapStateToProps, {runSearch, fetchArtists})(Header))
