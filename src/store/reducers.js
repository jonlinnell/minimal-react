import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import C from './constants'

export const auth = (state = {
  isFetching: false,
  isAuthenticated: localStorage.getItem('token') === false
}, action) => {
  switch (action.type) {
    case C.LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        error: null,
        user: action.user
      })

    case C.LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        user: null,
        error: action.error
      })

    case C.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        user: action.user
      })

    case C.SESSION_FETCHING:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false
      })

    case C.LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        error: null,
        user: null
      })

    default:
      return state
  }
}

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
  auth,
  errors,
  form: formReducer
})
