import React, { Component } from 'react';
import '../styles/Search.css'
import search from '../images/search.png'

import { runSearch, addAlbums, addArtists, fetchOneArtist, addOneArtist, fetchArtists } from '../actions/actions'
import { connect } from 'react-redux'
import { withRouter} from 'react-router-dom'

class Search extends Component {
  state = {
    query: '',
  }

  handleChange = (event) => {
    this.setState({
      query: event.target.value
    });
  }

  search = (event) => {
    event.preventDefault()
      this.props.runSearch(this.state.query)
      .then(() => console.log('props', this.props))
      .then(() => this.props.albums.map(album =>
        this.props.addAlbums(album)))
        .then(() => this.props.history.push('/albums'),
          this.setState({ query: '' })
        )
        // .then(() => console.log('props albums[0].artist.name', this.props.albums[0].artist.name))
        .then(() => this.props.fetchOneArtist(this.props.albums[0].artist.name))
          // .then(() => console.log('props one_artist', this.props.one_artist.artist))
          .then(() => this.props.addOneArtist(this.props.one_artist.artist))
  }

  render() {
    // console.log('props.albums[0]', this.props.albums);
    return (
      <div id='search-container'>
        <form id='search-form-container' onSubmit={this.search}>
          <input
            id='search-box'
            type="text"
            name='search'
            value={this.state.query}
            onChange={this.handleChange}
            placeholder='Search by Artist..' />
          <button id='search-button' type="submit">
            <img id='search-image' alt='oh no!' src={search} />
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    albums: state.albums,
    one_artist: state.one_artist,
  }
}

export default withRouter(connect(mapStateToProps, {runSearch, addAlbums, addArtists, fetchOneArtist, addOneArtist, fetchArtists})(Search))
