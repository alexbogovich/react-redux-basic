import {ADD, DECREMENT, INCREMENT, SUBTRACT} from "../actions/actionTypes"

const initState = {
  counter: 0
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      }
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      }
    case ADD:
      return {
        ...state,
        counter: state.counter + action.payload.value
      }
    case SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.payload.value
      }
  }
  return state
}

export default reducer