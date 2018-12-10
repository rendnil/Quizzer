
const defaultState = {}

const selectCategoryReducer = (state=defaultState, action) => {
  switch(action.type){
    case "SELECT_CATEGORY":
      return action.payload

    default:
      return state
  }
}


export default selectCategoryReducer
