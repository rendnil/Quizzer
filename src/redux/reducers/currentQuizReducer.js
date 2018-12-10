
const defaultState = {}

const currentQuizReducer = (state=defaultState, action) => {
  switch(action.type){
    case "CREATE_QUIZ":
      return action.payload

    default:
      return state
  }
}


export default currentQuizReducer
