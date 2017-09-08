const initialState = { filter: 'SHOW_ALL' }
const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return {
        filter: action.filter,
        query: action.query
      }
    default:
      return state
  }
}

export default visibilityFilter
