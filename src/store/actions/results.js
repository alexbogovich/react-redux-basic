import {DELETE_RESULT, STORE_RESULT} from "./actionTypes"

export const saveResult = result => ({
  type: STORE_RESULT,
  payload: {
    result: result,
  },
})

export const storeResult = result => dispatch => {
  setTimeout(() => {
    dispatch(saveResult(result))
  }, 2000)
}

export const deleteResult = id => ({
  type: DELETE_RESULT,
  payload: {
    id: id,
  },
})