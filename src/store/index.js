import { applyMiddleware, createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk'

import defaultInitialState from './initialState.json'

import errors from './ducks/errors'
import auth from './ducks/auth'
import urls from './ducks/urls'
import fetching from './ducks/fetching'

import add from './ducks/add'
import modify from './ducks/modify'
import remove from './ducks/remove'

const appReducer = combineReducers({
  activeUpdate: combineReducers({
    add,
    modify,
    remove
  }),
  auth,
  data: combineReducers({
    urls
  }),
  errors,
  fetching,
  form: formReducer
})

export default (initialState = defaultInitialState) =>
  applyMiddleware(thunk)(createStore)(appReducer, initialState)
