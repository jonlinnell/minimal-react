import axios from 'axios'
import { combineReducers } from 'redux'

import authHeader from '../../lib/authHeader'
import hostResolver from '../../lib/hostResolver'

import { addError } from '../actions'

const host = hostResolver()

const FETCHING = 'ricochet-web/clicks/FETCHING'
const CLEAR_FETCHING = 'ricochet-web/clicks/CLEAR_FETCHING'
const UPDATE_URL_CLICK_COUNT = 'ricochet-web/clicks/UPDATE_URL_CLICK_COUNT'
const UPDATE_SPECIFIC_URL_CLICK_COUNT = 'ricochet-web/clicks/UPDATE_SPECIFIC_URL_CLICK_COUNT'

const fetching = (state = false, action) => {
  switch (action.type) {
    case FETCHING:
      return true

    case CLEAR_FETCHING:
      return false

    default:
      return state
  }
}

const count = (state = [], action) => {
  switch (action.type) {
    case UPDATE_SPECIFIC_URL_CLICK_COUNT:
      return [...state.filter(entry => entry.id !== action.payload.id), {
        id: action.payload.id, count: action.payload.count
      }]

    case UPDATE_URL_CLICK_COUNT:
      return action.payload

    default:
      return state
  }
}

export const loadClickCounts = () => (dispatch) => {
  dispatch({ type: FETCHING })

  axios({
    method: 'GET',
    headers: authHeader(),
    url: `${host}/clicks/count/groupByUrl`
  })
    .then(response => dispatch({
      type: UPDATE_URL_CLICK_COUNT,
      payload: response.data
    }))
    .catch(error => dispatch(addError(error.response.data)))

  dispatch({ type: CLEAR_FETCHING })
}

export const countClicksByUrl = id => (dispatch) => {
  dispatch({ type: FETCHING })

  axios({
    mathod: 'GET',
    headers: authHeader(),
    url: `${host}/clicks/url/count/${id}`
  })
    .then(response => dispatch({
      type: UPDATE_SPECIFIC_URL_CLICK_COUNT,
      payload: {
        id,
        count: response.data
      }
    }))
    .catch(error => dispatch(addError(error.response.data)))

  dispatch({ type: CLEAR_FETCHING })
}

export default combineReducers({ fetching, count })
