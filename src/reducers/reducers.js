const defaultState = {
  query: '',
  albums: [],
  artists: [],
}

export default function(state=defaultState, action){
  switch(action.type){
    case "RUN_SEARCH":
      return {albums: action.payload}
    case "FETCH_ARTISTS":
      return {artists: action.payload}
    default:
      return state
  }
}
