
const defaultState = null
// const defaultState = {categoryName: "Literature",completed: true,correctQs: [{answers: ["a Napoleon", "butter", "eclair", "raisin bread"],correctAnswer: "eclair",id: 10658,prompt: "French for 'lightning', it's a custard-filled chocolate-covered pastry that can strike your waistline",value: 200}],incorrectQs: [{id: 10721, prompt: "The cheese steak sandwich is thought to have originated in this city in the 1930s", correctAnswer: "Philadelphia", value: 300},{id: 10786, prompt: "The first new variety of Eggo waffle Kellogg's made was one with this fruit in 1972", correctAnswer: "blueberries", value: 200},{id: 10798, prompt: "The topping here is this delicacy, that can come from several different creatures", correctAnswer: "caviar", value: 600},{id: 10728, prompt: "Popular in Pennsylvania, pepper pot is a peppery soup made from this stomach lining", correctAnswer: "tripe", value: 500}],questionNumber: 1,questions: [{answers:["Leaves of Grass","The Prime of Miss Jean Brodie","Pearl Buck","Rudyard Kipling"],correctAnswer: "Rudyard Kipling",id: 3734,prompt: "His 'Jungle Book' prose begins, 'It was seven o'clock of a very warm evening in the Seeonee Hills...'",value: 200}]}




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
