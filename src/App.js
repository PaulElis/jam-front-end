import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
// import About from './components/About.js'
import AlbumList from './components/AlbumList'
import Favorites from './components/Favorites/Container'
import Home from './components/Home'

import { runSearch, fetchTopArtists, fetchFullArtistInfo, addOneArtist, addArtists } from '../src/actions/actions'
import {Route, withRouter} from 'react-router-dom'
import { connect } from 'react-redux'

class App extends Component {

  state = {
    new_artists: [],
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    return {
      new_artists: nextProps.new_artists === [] ? [] : nextProps.new_artists,
    }
  }

  initialRender = () => {
    this.props.fetchTopArtists()
      .then(() => this.props.history.push('/home'))
  }

  componentDidMount(){
    this.props.albums.length === 0 ? this.initialRender() : this.props.history.push('/albums')
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
          <Route exact path="/albums" component={AlbumList}/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    albums: state.albums,
    artist_names: state.artist_names,
    new_artists: state.new_artists,
  }
}

export default withRouter(connect(mapStateToProps, {runSearch, fetchTopArtists, fetchFullArtistInfo, addOneArtist, addArtists})(App));
