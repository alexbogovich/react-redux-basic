import {DELETE_RESULT, STORE_RESULT} from "../actions/actionTypes"

const initState = {
  results: []
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({value: action.payload.result, id: new Date()})
      }
    case DELETE_RESULT: {
      const updatedResults = state.results
        .filter(v => v.id !== action.payload.id)
      return {
        ...state,
        results: updatedResults
      }
    }
  }
  return state
}

export default reducer