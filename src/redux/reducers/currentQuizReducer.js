//reducer for handling the current quiz
const defaultState = null
const defaultQuestionNumber = 1

const currentQuizReducer = (state=defaultState, action) => {
  switch(action.type){
    //create a new quiz with initialized question number
    case "CREATE_QUIZ":
      return {...action.payload, questionNumber:defaultQuestionNumber}
    //handle selecting and unselecting answers
    case "SELECT_ANSWER":
        if (state.selectedAnswer===action.payload){
          return {...state, selectedAnswer:null}
        }else{
          return {...state, selectedAnswer: action.payload}
        }
    //clear selected answer
    case "CLEAR_SELECTED_ANSWER":
      return {...state, selectedAnswer:null}
    //submit answer 
    case "SUBMIT_ANSWER":
      return action.payload
    default:
      return state
  }
}

export default currentQuizReducer
