const API_KEY=(process.env.REACT_APP_API_KEY)

const URL = 'http://localhost:3000/api/v1'
// const URL = 'https://freelancer-backend.herokuapp.com/api/v1'
const headers = { "Content-Type": "application/json"}

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

export function fetchTopArtists(){
  const URL = 'http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists' + API_KEY
  return (dispatch) => {
    return fetch(URL)
      .then(res => res.json())
      .then(artists => {
        // const artistNames = artists.artists.artist.map((artist) => artist.name)
        // console.log('in fetchArtists', artists.artists.artist);
        dispatch({type: "FETCH_TOP_ARTISTS", payload: artists.artists.artist})
    })
  }
}

export function fetchFullArtistInfo(artistName){
  const URL = 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' + artistName + API_KEY
  return (dispatch) => {
    return fetch(URL)
      .then(res => res.json())
      .then(artist => {
        // const new_artists = artists.artists.artist.map((artist) => artist.name)
        // console.log('in fetchOneArtist artist:', artist.artist);
        dispatch({type: "FETCH_ONE_ARTIST", payload: artist.artist})
    })
  }
}

export function addOneArtist(artist){
  // console.log('in addOneArtist', artist);
  return (dispatch) => {
    return fetch(URL + "/artists", {
    headers: headers,
    method: "POST",
    body: JSON.stringify({
      name: artist.name,
      image: artist.image,
      listeners: artist.stats.listeners,
      playcount: artist.stats.playcount,
      bio: artist.bio.content,
      url: artist.url,
      mbid: artist.mbid,
    })
  })
  .then(res => res.json())
  // .then(console.log)
  }
}

export function addArtists(artist) {
  return (dispatch) => {
    return fetch(URL + "/artists", {
      headers: headers,
      method: "POST",
      body: JSON.stringify({
        name: artist.name,
        image: artist.image,
        listeners: artist.listeners,
        playcount: artist.playcount,
        url: artist.url,
        mbid: artist.mbid,
      })
    })
    .then(res => res.json())
    // .then(console.log)
  }
}

export function addAlbums(album, artist) {
  return (dispatch) => {
    return fetch(URL + "/albums", {
      headers: headers,
      method: "POST",
      body: JSON.stringify({
        name: album.name,
        image: album.image,
        playcount: album.playcount,
        url: album.url,
        artist: artist,
        // album
      })
    })
    .then(res => res.json())
    // .then(console.log)
  }
}

export function addArtistToFavorites(artist) {
  return (dispatch) => {
    return fetch(URL + "/favorite_artists", {
      headers: headers,
      method: "POST",
      body: JSON.stringify({
        name: artist.name,
        image: artist.image,
        listeners: artist.listeners,
        playcount: artist.playcount,
        url: artist.url,
        mbid: artist.mbid,
      })
    })
    .then(res => res.json())
    .then(console.log)
  }
}


export function addAlbumToFavorites(album) {
  // console.log('in addAlbumToFavorites')
  return (dispatch) => {
    return fetch(URL + "/favorite_albums", {
      headers: headers,
      method: "POST",
      body: JSON.stringify(album)
    })
    .then(res => res.json())
    .then(console.log)
  }
}

export function deleteArtistFromFavorites(artist) {
  return (dispatch) => {
    return fetch(`${URL}/favorite_artists/${artist.id}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(json => {
      dispatch({type: "GET_FAVORITES", payload: json.favorites})
    })
  }
}

export function getFavorites(){
  return (dispatch) => {
    return fetch(URL + "/favorite_artists")
    .then(res => res.json())
    .then(favorites => {
      dispatch({type: "GET_FAVORITES", payload: favorites})
    })
  }
}
