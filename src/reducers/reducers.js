const defaultState = {
  query: '',
  albums: [],
  artists: [],
  favorites: [],
  new_artists: [],
}

export default function(state=defaultState, action){
  switch(action.type){
    case "RUN_SEARCH":
      return {albums: action.payload}
    case "FETCH_ONE_ARTIST":
      return {...state, new_artists: action.payload}
    case "FETCH_TOP_ARTIST_NAMES":
      return {...state, artist_names: action.payload}
    case "GET_FAVORITES":
      return {...state, favorites: action.payload}
    default:
      return state
  }
}
