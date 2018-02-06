import axios from 'axios'

import hostResolver from '../../lib/hostResolver'
import authHeader from '../../lib/authHeader'

import { addError, loadURLs } from '../actions'

const host = hostResolver()

const REMOTE_MODIFY = 'ricochet-web/activeUpdate/modify/REMOTE_MODIFY'
const REMOTE_MODIFY_COMPLETE = 'ricochet-web/activeUpdate/modify/REMOTE_MODIFY_COMPLETE'
const SELECT_MODIFYING = 'ricochet-web/activeUpdate/modify/SELECT_MODIFYING'
const CLEAR_MODIFYING = 'ricochet-web/activeUpdate/modify/CLEAR_MODIFYING'

const reducer = (state = null, action) => {
  switch (action.type) {
    case REMOTE_MODIFY:
      return Object.assign({}, state, {
        isSubmitting: true
      })

    case REMOTE_MODIFY_COMPLETE:
      return Object.assign({}, state, {
        isSubmitting: false
      })

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

  dispatch({ type: REMOTE_MODIFY, payload: id })

  axios({
    method: 'PUT',
    url: `${host}/url/${id}`,
    headers: authHeader(),
    data: { title, url }
  })
    .then(() => {
      dispatch({ type: REMOTE_MODIFY_COMPLETE })
      dispatch(loadURLs())
    })
    .catch((error) => {
      dispatch(addError(error.response.data.message))
      dispatch({ type: REMOTE_MODIFY_COMPLETE })
    })
}

export default reducer
