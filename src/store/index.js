import { applyMiddleware, createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk'

import defaultInitialState from './initialState.json'

import auth from './ducks/auth'
import errors from './ducks/errors'
import fetching from './ducks/fetching'
import urls from './ducks/urls'
import clicks from './ducks/clicks'

import add from './ducks/add'
import modify from './ducks/modify'
import remove from './ducks/remove'

import hamburger from './ducks/hamburger'

const appReducer = combineReducers({
  activeUpdate: combineReducers({
    add,
    modify,
    remove
  }),
  auth,
  data: combineReducers({
    clicks,
    urls
  }),
  errors,
  fetching,
  form: formReducer,
  hamburger
})

export default (initialState = defaultInitialState) =>
  applyMiddleware(thunk)(createStore)(appReducer, initialState)
