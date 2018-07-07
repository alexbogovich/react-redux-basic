import {ADD, DECREMENT, INCREMENT, SUBTRACT} from "./actionTypes"

export const increment = () => ({ type: INCREMENT })
export const decrement = () => ({ type: DECREMENT })

export const add = (value) => ({
    type: ADD,
    payload: {
      value: value,
    },
})

export const subtract = (value) => ({
    type: SUBTRACT,
    payload: {
      value: value,
    },
})