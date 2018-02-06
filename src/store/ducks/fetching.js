const START = 'ricochet-web/fetching/START'
const CLEAR = 'ricochet-web/fetching/CLEAR'

const reducer = (state = false, action) => {
  switch (action.type) {
    case START:
      return true

    case CLEAR:
      return false

    default:
      return state
  }
}

export const setFetching = () => ({ type: START })
export const clearFetching = () => ({ type: CLEAR })

export default reducer
