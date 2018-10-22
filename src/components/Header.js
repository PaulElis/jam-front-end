import React, { Component } from 'react';
import Search from './Search.js'
// import Favorites from './Favorites.js'
import '../styles/Header.css'

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
      <div>
        <div
          id='jam-logo'
          onClick={() => {this.renderTopArtists()}}
          >
            Jam
        </div>
        <div
          id='favorites-link'
          onClick={() => {this.props.history.push('/favorites')}}
          >
            Favorites
        </div>
        <Search />
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
