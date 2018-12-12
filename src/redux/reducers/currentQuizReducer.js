
const defaultState = null
const defaultQuestionNumber = 1

const currentQuizReducer = (state=defaultState, action) => {
  switch(action.type){
    case "CREATE_QUIZ":
      return {...action.payload, questionNumber:defaultQuestionNumber}
    case "INCREMENT_QUESTION_NUMBER":
        return {...state, questionNumber:state.questionNumber+1}
    case "SELECT_ANSWER":
        if (state.selectedAnswer===action.payload){
          return {...state, selectedAnswer:null}
        }
        return {...state, selectedAnswer: action.payload}
    case "SUBMIT_ANSWER":
      return action.payload
    default:
      return state
  }
}


export default currentQuizReducer
