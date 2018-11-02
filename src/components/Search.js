import React, { Component } from 'react';
import '../styles/Search.css'
import search from '../images/search.png'

import { runSearch, addAlbums, addArtists, fetchFullArtistInfo, addOneArtist, fetchTopArtists } from '../actions/actions'
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
      .then(() => this.props.fetchFullArtistInfo(this.props.albums[0].artist.name))
        .then(() => this.props.addOneArtist(this.props.full_artist_info))
          .then(() => this.props.albums.map(album =>
            this.props.addAlbums(album)))
            .then(() => this.props.history.push('/albums'),
              this.setState({ query: '' }))
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
    full_artist_info: state.full_artist_info,
  }
}

export default withRouter(connect(mapStateToProps, {runSearch, addAlbums, addArtists, fetchFullArtistInfo, addOneArtist, fetchTopArtists})(Search))
