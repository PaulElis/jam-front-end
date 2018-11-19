import React, { Component } from 'react';
import '../styles/Home.css'
import AlbumList from './AlbumList.js'

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
