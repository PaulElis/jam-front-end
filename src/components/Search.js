import React, { Component } from 'react';
import '../styles/Search.css'
import search from '../images/search.png'

import { runSearch } from '../actions/actions'
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
    // console.log('in search query', this.state.query);
      this.props.runSearch(this.state.query)
        .then(()=> this.props.history.push('/albums'))
  };

  render() {
    // console.log(this.state.query);
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
    // albums: state.albums.topalbums,
  }
}

export default withRouter(connect(mapStateToProps, {runSearch})(Search))
