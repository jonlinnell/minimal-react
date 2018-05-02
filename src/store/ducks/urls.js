import axios from 'axios'
import { combineReducers } from 'redux'

import authHeader from '../../lib/authHeader'
import hostResolver from '../../lib/hostResolver'

import add from './url_add'
import modify from './url_modify'
import remove from './url_remove'

import { addError, setFetching, clearFetching } from '../actions'

const host = hostResolver()

const UPDATE = 'ricochet-web/data/urls/data/UPDATE_URLS'

const FILTER = 'ricochet-web/data/urls/filter/FILTER'
const CLEAR_FILTER = 'ricochet-web/data/urls/filter/CLEAR_FILTER'

export const setURLFilter = filter => ({ type: FILTER, payload: filter })

export const clearURLFilter = () => ({ type: CLEAR_FILTER })

const data = (state = null, action) => {
  switch (action.type) {
    case UPDATE:
      return action.payload

    default:
      return state
  }
}

const filter = (state = null, action) => {
  switch (action.type) {
    case FILTER:
      return action.payload

    case CLEAR_FILTER:
      return null

    default:
      return state
  }
}

export const loadURLs = () => (dispatch) => {
  dispatch(setFetching())

  axios({
    method: 'GET',
    url: `${host}/url`,
    headers: authHeader()
  })
    .then((response) => {
      dispatch({
        type: UPDATE,
        payload: response.data
      })
      dispatch(clearFetching())
    })
    .catch((error) => {
      dispatch(addError(error.response.data.message))
      dispatch(clearFetching())
    })
}

export default combineReducers({
  activeUpdate: combineReducers({
    add,
    modify,
    remove
  }),
  data,
  filter
})
