import axios from 'axios'

import hostResolver from '../../lib/hostResolver'
import authHeader from '../../lib/authHeader'

import { addError, loadURLs, setFetching, clearFetching } from '../actions'

const host = hostResolver()

const ADDING = 'ricochet-web/activeUpdate/add/ADDING'
const COMPLETE = 'ricochet-web/activeUpdate/add/COMPLETE'

const reducer = (state = null, action) => {
  switch (action.type) {
    case ADDING:
      return true

    case COMPLETE:
      return false

    default:
      return state
  }
}

export const setAddingURL = () => ({ type: ADDING })
export const clearAddingURL = () => ({ type: COMPLETE })

export const remoteAddURL = newURL => (dispatch) => {
  const { title, url } = newURL

  dispatch(setFetching())

  axios({
    method: 'POST',
    url: `${host}/url/`,
    headers: authHeader(),
    data: { title, url }
  })
    .then(() => {
      dispatch(clearFetching())
      dispatch(loadURLs())
    })
    .catch((error) => {
      dispatch(addError(error.response.data.message))
      dispatch(clearFetching())
    })
}

export default reducer
