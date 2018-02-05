import axios from 'axios'

import C from './constants'

import hostResolver from '../lib/hostResolver'
import authHeader from '../lib/authHeader'

const host = hostResolver()

export const addError = message =>
  ({
    type: C.ADD_ERROR,
    payload: message
  })

export const clearError = index =>
  ({
    type: C.CLEAR_ERROR,
    payload: index
  })

export const loginRequest = user => ({
  type: C.LOGIN_REQUEST,
  user
})

export const loginSuccess = user => ({
  type: C.LOGIN_SUCCESS,
  user
})

export const loginFailure = error => ({
  type: C.LOGIN_FAILURE,
  error
})

export const logoutRequest = () => ({ type: C.LOGOUT_REQUEST })
export const logoutSuccess = () => ({ type: C.LOGOUT_SUCCESS })
export const logoutFailure = () => ({ type: C.LOGOUT_FAILURE })

export const sessionResume = () => (dispatch) => {
  dispatch({ type: C.SESSION_FETCHING })

  axios({
    mathod: 'POST',
    headers: authHeader(),
    url: `${host}/auth/me`
  })
    .then(response => dispatch(loginSuccess(response.data.username)))
    .catch(error => dispatch(loginFailure(error.response.data.message)))
}

export const login = credentials => (dispatch) => {
  dispatch(loginRequest(credentials.username))
  axios({
    method: 'POST',
    url: `${host}/auth/login`,
    data: credentials
  })
    .then((response) => {
      localStorage.setItem('token', response.data.token)
      dispatch(loginSuccess(credentials.username))
    })
    .catch(error => dispatch(loginFailure(error.response.data.message)))
}

export const logout = () => (dispatch) => {
  dispatch(logoutRequest())
  localStorage.removeItem('token')
  localStorage.getItem('token')
    ? dispatch(logoutFailure())
    : dispatch(logoutSuccess())
}

export const loadURLs = () => (dispatch) => {
  dispatch({ type: C.URLS_FETCHING })

  axios({
    method: 'GET',
    url: `${host}/url`,
    headers: authHeader()
  })
    .then(response => dispatch({
      type: C.URLS_COMPLETE,
      payload: response.data
    }))
    .catch((error) => {
      dispatch(addError(error.response.data.message))
      dispatch({ type: C.URLS_CANCEL })
    })
}

export const setModifyURL = id => ({
  type: C.SELECT_CURRENTLY_MODIFYING,
  payload: id
})

export const setAddingURL = () => ({ type: C.SET_CURRENTLY_ADDING })

export const setDeletingURL = id => ({
  type: C.SELECT_CURRENTLY_DELETING,
  payload: id
})

export const clearModifyURL = () => ({ type: C.CLEAR_CURRENTLY_MODIFYING })

export const clearActiveUpdate = () => ({ type: C.CLEAR_CURRENTLY_MODIFYING })

export const remoteAddURL = newURL => (dispatch) => {
  const { title, url } = newURL

  dispatch({ type: C.REMOTE_ADD_URL })

  axios({
    method: 'POST',
    url: `${host}/url/`,
    headers: authHeader(),
    data: { title, url }
  })
    .then(() => {
      dispatch({ type: C.ADDING_COMPLETE })
      dispatch(loadURLs())
    })
    .catch((error) => {
      dispatch(addError(error.response.data.message))
      dispatch({ type: C.ADDING_COMPLETE })
    })
}

export const remoteModifyURL = updatedUrl => (dispatch) => {
  const { id, title, url } = updatedUrl

  dispatch({ type: C.REMOTE_MODIFY_URL, payload: id })

  axios({
    method: 'PUT',
    url: `${host}/url/${id}`,
    headers: authHeader(),
    data: { title, url }
  })
    .then(() => {
      dispatch({ type: C.REMOTE_MODIFY_URL_COMPLETE })
      dispatch(loadURLs())
    })
    .catch((error) => {
      dispatch(addError(error.response.data.message))
      dispatch({ type: C.REMOTE_MODIFY_URL_COMPLETE })
    })
}

export const remoteDeleteURL = id => (dispatch) => {
  dispatch({ type: C.REMOTE_DELETE_URL })

  axios({
    method: 'DELETE',
    url: `${host}/url/${id}`,
    headers: authHeader()
  })
    .then(() => {
      dispatch({ type: C.REMOTE_DELETE_URL_COMPLETE })
      dispatch(loadURLs())
    })
    .catch((error) => {
      dispatch(addError(error.response.data.message))
      dispatch({ type: C.REMOTE_DELETE_URL_COMPLETE })
    })
}
