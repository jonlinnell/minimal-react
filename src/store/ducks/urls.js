import axios from 'axios'

import authHeader from '../../lib/authHeader'
import hostResolver from '../../lib/hostResolver'

import { addError } from '../actions'

const host = hostResolver()

const FETCHING = 'ricochet-web/data/urls/URLS_FETCHING'
const CANCEL = 'ricochet-web/data/urls/URLS_CANCEL'
const COMPLETE = 'ricochet-web/data/urls/URLS_COMPLETE'

const reducer = (state = null, action) => {
  switch (action.type) {
    case FETCHING:
      return Object.assign({}, state, {
        isFetching: true
      })

    case COMPLETE:
      return Object.assign({}, state, {
        isFetching: false,
        urls: action.payload
      })

    case CANCEL:
      return Object.assign({}, state, {
        isFetching: false
      })

    default:
      return state
  }
}

export const loadURLs = () => (dispatch) => {
  dispatch({ type: FETCHING })

  axios({
    method: 'GET',
    url: `${host}/url`,
    headers: authHeader()
  })
    .then(response => dispatch({
      type: COMPLETE,
      payload: response.data
    }))
    .catch((error) => {
      dispatch(addError(error.response.data.message))
      dispatch({ type: CANCEL })
    })
}

export default reducer
