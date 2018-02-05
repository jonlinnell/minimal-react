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

export const urls = (state = null, action) => {
  switch (action.type) {
    case C.URLS_FETCHING:
      return Object.assign({}, state, {
        isFetching: true
      })

    case C.URLS_COMPLETE:
      return Object.assign({}, state, {
        isFetching: false,
        urls: action.payload
      })

    case C.URLS_CANCEL:
      return Object.assign({}, state, {
        isFetching: false
      })

    default:
      return state
  }
}

export const add = (state = null, action) => {
  switch (action.type) {
    case C.SET_CURRENTLY_ADDING:
      return true

    case C.ADDING_COMPLETE:
      return false

    default:
      return state
  }
}

export const modify = (state = null, action) => {
  switch (action.type) {
    case C.REMOTE_MODIFY_URL:
      return Object.assign({}, state, {
        isSubmitting: true
      })

    case C.REMOTE_MODIFY_URL_COMPLETE:
      return Object.assign({}, state, {
        isSubmitting: false
      })

    case C.SELECT_CURRENTLY_MODIFYING:
      return Object.assign({}, state, {
        id: action.payload
      })

    case C.CLEAR_CURRENTLY_MODIFYING:
      return Object.assign({}, state, {
        id: null
      })

    default:
      return state
  }
}

export const remove = (state = null, action) => {
  switch (action.type) {
    case C.REMOTE_DELETE_URL:
      return Object.assign({}, state, {
        isSubmitting: true
      })

    case C.REMOTE_DELETE_URL_COMPLETE:
      return Object.assign({}, state, {
        isSubmitting: false,
        id: null
      })

    case C.SELECT_CURRENTLY_DELETING:
      return Object.assign({}, state, {
        id: action.payload
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
  activeUpdate: combineReducers({
    add,
    modify,
    remove
  }),
  auth,
  data: combineReducers({
    urls
  }),
  errors,
  form: formReducer
})
