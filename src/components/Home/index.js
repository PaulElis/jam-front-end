import React, { Component } from 'react';
import './index.css'
// import AlbumList from '../AlbumList'
import AlbumListContainer from '../AlbumList/Container'

class Home extends Component {

  render() {
    return (
      <div id='home-container'>
        <AlbumListContainer />
      </div>
    );
  }
}

export default Home;
