//action creator for fetching creating a quiz
import QuestionsAdapter from "../../apis/QuestionsAdapter"
import Quiz from "../../parsers/quiz"

export const fetchQuestions = (id) => {

  return (dispatch) => {
    
    QuestionsAdapter.fetchCategoryQuestions(id)
    .then((data) => {
      //create a new quiz instance
      let quiz = new Quiz(data.name, data.questions)
      //dispatch the new quiz
      dispatch({type:"CREATE_QUIZ", payload: quiz.constructQuiz()})
    })
  }
}
