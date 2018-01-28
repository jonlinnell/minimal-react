import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import appReducer from './reducers'

import defaultInitialState from './initialState.json'

export default (initialState = defaultInitialState) =>
  applyMiddleware(thunk)(createStore)(appReducer, initialState)
