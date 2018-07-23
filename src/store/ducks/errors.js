const ADD = 'ricochet-web/errors/ADD'
const CLEAR = 'ricochet-web/errors/CLEAR'

const reducer = (state = null, action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        {
          message: action.payload,
          index: state.length + 1,
        },
      ]
    case CLEAR:
      return state.filter(error => error.index !== action.payload)

    default:
      return state
  }
}

export const addError = error =>
  ({
    type: ADD,
    payload: error,
  })

export const clearError = index =>
  ({
    type: CLEAR,
    payload: index,
  })

export default reducer
