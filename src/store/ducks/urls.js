import axios from 'axios'

import authHeader from '../../lib/authHeader'
import hostResolver from '../../lib/hostResolver'

import { addError, setFetching, clearFetching } from '../actions'

const host = hostResolver()

const UPDATE = 'ricochet-web/data/urls/UPDATE_URLS'

const reducer = (state = null, action) => {
  switch (action.type) {
    case UPDATE:
      return Object.assign({}, state, {
        urls: action.payload
      })

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

export default reducer
