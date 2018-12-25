//reducer to handle selecting categories 
const defaultState = null

const selectCategoryReducer = (state=defaultState, action) => {
  switch(action.type){
    case "SELECT_CATEGORY":
      return action.payload
    case "RESET_CATEGORY":
      return null
    default:
      return state
  }
}

export default selectCategoryReducer
