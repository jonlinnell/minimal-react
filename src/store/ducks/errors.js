const ADD = 'ricochet-web/errors/ADD'
const CLEAR = 'ricochet-web/errors/CLEAR'

const reducer = (state = null, action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.payload
      ]
    case CLEAR:
      return state.filter((message, i) => i !== action.payload)

    default:
      return state
  }
}

export const addError = message =>
  ({
    type: ADD,
    payload: message
  })

export const clearError = index =>
  ({
    type: CLEAR,
    payload: index
  })

export default reducer
