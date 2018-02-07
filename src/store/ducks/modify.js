import axios from 'axios'

import hostResolver from '../../lib/hostResolver'
import authHeader from '../../lib/authHeader'

import { addError, loadURLs, setFetching, clearFetching } from '../actions'

const host = hostResolver()

const SELECT_MODIFYING = 'ricochet-web/activeUpdate/modify/SELECT_MODIFYING'
const CLEAR_MODIFYING = 'ricochet-web/activeUpdate/modify/CLEAR_MODIFYING'

const reducer = (state = null, action) => {
  switch (action.type) {
    case SELECT_MODIFYING:
      return Object.assign({}, state, {
        id: action.payload
      })

    case CLEAR_MODIFYING:
      return Object.assign({}, state, {
        id: null
      })

    default:
      return state
  }
}

export const clearModifyURL = () => ({ type: CLEAR_MODIFYING })

export const setModifyURL = id => ({
  type: SELECT_MODIFYING,
  payload: id
})

export const remoteModifyURL = updatedUrl => (dispatch) => {
  const { id, title, url } = updatedUrl

  dispatch(setFetching())

  axios({
    method: 'PUT',
    url: `${host}/url/${id}`,
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
