import * as actionTypes from "../actions"

const initState = {
  counter: 0
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      }
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      }
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.payload.value
      }
    case actionTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.payload.value
      }
  }
  return state
}

export default reducer