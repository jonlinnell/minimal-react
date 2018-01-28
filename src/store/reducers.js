import { combineReducers } from 'redux'

import C from './constants'

export const errors = (state = null, action) => {
  switch (action.type) {
    case C.ADD_ERROR:
      return [
        ...state,
        action.payload
      ]
    case C.CLEAR_ERROR:
      return state.filter((message, i) => i !== action.payload)

    default:
      return state
  }
}

export default combineReducers({
  errors
})
