
// const defaultState = null
const defaultState = {categoryName: "Literature",completed: false,correctQs: [],incorrectQs: [],questionNumber: 1,questions: [{answers:["Leaves of Grass","The Prime of Miss Jean Brodie","Pearl Buck","Rudyard Kipling"],correctAnswer: "Rudyard Kipling",id: 3734,prompt: "His 'Jungle Book' prose begins, 'It was seven o'clock of a very warm evening in the Seeonee Hills...'",value: 200}]}
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
