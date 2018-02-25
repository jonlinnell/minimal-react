import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'


import storeCreator from './store'
import {
  login,
  logout,
  sessionResume,
  countClicksByUrl
} from './store/actions'

import App from './components/containers/App'

import './styles/main.css'

const store = storeCreator()

if (process.env.NODE_ENV === 'development') {
  window.store = store
  window.login = login
  window.logout = logout
  window.countClicksByUrl = countClicksByUrl
}

if (localStorage.getItem('token')) {
  store.dispatch(sessionResume())
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
