import * as actionTypes from "../actions/actions"

const initState = {
  results: []
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({value: action.payload.result, id: new Date()})
      }
    case actionTypes.DELETE_RESULT: {
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