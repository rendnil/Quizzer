import QuestionsAdapter from "../../apis/QuestionsAdapter"
import Quiz from "../../parsers/quiz"

export const fetchQuestions = (id) => {
  return (dispatch) => {
    QuestionsAdapter.fetchCategoryQuestions(id)
    .then((data) => {
      //dispatch({type:"SELECT_CATEGORY", payload: data})
      let quiz = new Quiz(data.name, data.questions)
      dispatch({type:"CREATE_QUIZ", payload: quiz.constructQuiz()})
    })
  }
}
