//reducer for question categories 
const defaultState = []

const categoriesReducer = (state=defaultState, action) => {
  switch(action.type){
    case "FETCH_CATEGORIES":
      return action.payload
    default:
      return state
  }
}

export default categoriesReducer
