const API_KEY=(process.env.REACT_APP_API_KEY)

const URL = 'http://localhost:3000/api/v1'
// const URL = 'https://freelancer-backend.herokuapp.com/api/v1'
// const headers = { "Content-Type": "application/json"}

export function runSearch(query){
  const URL = 'http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=' + query + API_KEY
  return (dispatch) => {
    return fetch(URL)
      .then(res => res.json())
      .then(searchResult => {
        // console.log('in runSearch', searchResult.topalbums.album);
        dispatch({type: "RUN_SEARCH", payload: searchResult.topalbums.album})
    })
  }
}

export function fetchArtists(){
  const URL = 'http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists' + API_KEY
  return (dispatch) => {
    return fetch(URL)
      .then(res => res.json())
      .then(artists => {
        // console.log('in fetchArtists', artists.artists.artist);
        dispatch({type: "FETCH_ARTISTS", payload: artists.artists.artist})
    })
  }
}

export function addArtistToFavorites(artist) {
  return (dispatch) => {
    return fetch(URL + "/favorites", {
      headers: { "Content-Type": "application/json"},
      method: "POST",
      body: JSON.stringify({
        name: artist.name
      })
    })
    .then(res => res.json())
    .then(console.log)
  }
}
