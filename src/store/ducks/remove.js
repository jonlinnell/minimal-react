import axios from 'axios'

import authHeader from '../../lib/authHeader'
import hostResolver from '../../lib/hostResolver'

import { addError, loadURLs } from '../actions'

const host = hostResolver()

const SELECT_DELETING = 'ricochet-web/activeUpdate/remove/SET_DELETING'
const REMOTE_DELETE = 'ricochet-web/activeUpdate/remove/REMOTE_DELETE'
const REMOTE_DELETE_COMPLETE = 'ricochet-web/activeUpdate/remove/REMOTE_DELETE_COMPLETE'

const reducer = (state = null, action) => {
  switch (action.type) {
    case REMOTE_DELETE:
      return Object.assign({}, state, {
        isSubmitting: true
      })

    case REMOTE_DELETE_COMPLETE:
      return Object.assign({}, state, {
        isSubmitting: false,
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
  dispatch({ type: REMOTE_DELETE })

  axios({
    method: 'DELETE',
    url: `${host}/url/${id}`,
    headers: authHeader()
  })
    .then(() => {
      dispatch({ type: REMOTE_DELETE_COMPLETE })
      dispatch(loadURLs())
    })
    .catch((error) => {
      dispatch(addError(error.response.data.message))
      dispatch({ type: REMOTE_DELETE_COMPLETE })
    })
}

export default reducer
