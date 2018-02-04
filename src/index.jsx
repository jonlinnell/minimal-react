import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'


import storeCreator from './store'
import { addError, login, logout, sessionResume, modifyURL } from './store/actions'

import App from './components/containers/App'

import './styles/main.css'

const store = storeCreator()

if (process.env.NODE_ENV === 'development') {
  window.store = store
  window.login = login
  window.logout = logout
  window.modifyURL = modifyURL
}

window.addEventListener('error', message => store.dispatch(addError(message)))

if (localStorage.getItem('token')) {
  store.dispatch(sessionResume())
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
