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
      return {...state, full_artist_info: action.payload}
    case "FETCH_TOP_ARTISTS":
      return {...state, top_artists: action.payload}
    case "GET_FAVORITE_ARTISTS":
      return {...state, favorite_artists: action.payload}
    default:
      return state
  }
}
