import axios from 'axios'

import authHeader from '../../lib/authHeader'
import hostResolver from '../../lib/hostResolver'

import { addError, loadURLs, setFetching, clearFetching } from '../actions'

const host = hostResolver()

const SELECT_DELETING = 'ricochet-web/activeUpdate/remove/SET_DELETING'
const DELETE_COMPLETE = 'ricochet-web/activeUpdate/remove/REMOTE_DELETE_COMPLETE'

const reducer = (state = null, action) => {
  switch (action.type) {
    case DELETE_COMPLETE:
      return Object.assign({}, state, {
        id: null
      })

    case SELECT_DELETING:
      return Object.assign({}, state, {
        id: action.payload
      })

    default:
      return state
  }
}

export const setDeletingURL = id => ({
  type: SELECT_DELETING,
  payload: id
})

export const remoteDeleteURL = id => (dispatch) => {
  dispatch(setFetching())

  axios({
    method: 'DELETE',
    url: `${host}/url/${id}`,
    headers: authHeader()
  })
    .then(() => {
      dispatch({ type: DELETE_COMPLETE })
      dispatch(clearFetching())
      dispatch(loadURLs())
    })
    .catch((error) => {
      dispatch(addError(error.response.data.message))
      dispatch(clearFetching())
      dispatch({ type: DELETE_COMPLETE })
    })
}

export default reducer
