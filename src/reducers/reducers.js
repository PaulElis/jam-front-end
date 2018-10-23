const defaultState = {
  query: '',
  albums: [],
  artists: [],
  favorites: [],
}

export default function(state=defaultState, action){
  switch(action.type){
    case "RUN_SEARCH":
      return {albums: action.payload}
    case "FETCH_ARTISTS":
      return {artists: action.payload}
    case "ADD_TO_FAVORITES":
      return {favorites: action.payload}
    default:
      return state
  }
}
