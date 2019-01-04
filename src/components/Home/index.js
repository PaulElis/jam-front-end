import React, { Component } from 'react';
import './index.css'
import AlbumList from '../AlbumList'

class Home extends Component {

  render() {
    return (
      <div id='home-container'>
        <AlbumList />
      </div>
    );
  }
}

export default Home;
