import React, { Component } from 'react';
import '../styles/Home.css'
// import About from './About.js'
import AlbumList from './AlbumList.js'

class Home extends Component {
  render() {
    return (
      <div id='home-container'>
        {/* <About /> */}
        <AlbumList />
      </div>
    );
  }
}

export default Home;
