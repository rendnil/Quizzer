//reducer for question categories
const defaultState = {
  loading: false,
  categories: []
}

const categoriesReducer = (state=defaultState, action) => {
  switch(action.type){
    case "FETCH_CATEGORIES":
      return {loading:false, categories:action.payload}
    case "LOADING":
      return {...state, loading:true}
    default:
      return state
  }
}

export default categoriesReducer
