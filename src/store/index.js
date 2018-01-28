import { applyMiddleware, createStore } from 'redux'
import appReducer from './reducers'

import defaultInitialState from './initialState.json'

export default (initialState = defaultInitialState) =>
  applyMiddleware()(createStore)(appReducer, initialState)
