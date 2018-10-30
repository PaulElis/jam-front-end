import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js'
import About from './components/About.js'
import AlbumList from './components/AlbumList.js'
import Favorites from './components/Favorites.js'
import Home from './components/Home.js'

import { runSearch, fetchArtists, addArtists } from '../src/actions/actions'
import {Route, withRouter} from 'react-router-dom'
import { connect } from 'react-redux'

class App extends Component {

  initialRender = () => {
    this.props.fetchArtists()
      .then(() => this.props.artists.map(artist =>
        this.props.addArtists(artist)))
        .then(()=>
          this.props.history.push('/home'))
  }

  componentDidMount(){
    this.props.artists.length === 0 ? this.initialRender() : this.props.history.push('/albums')
  }

  render() {
    // console.log('App Props', this.props);
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/favorites" component={Favorites}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/albums" component={AlbumList}/>
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

export default withRouter(connect(mapStateToProps, {runSearch, fetchArtists, addArtists})(App));
