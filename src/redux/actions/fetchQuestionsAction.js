import QuestionsAdapter from "../../apis/QuestionsAdapter"
import Quiz from "../../parsers/quiz"


export const fetchQuestions = (id) => {
  console.log("start action");
  return (dispatch) => {
    // dispatch({type:"ABOUT TO CREATE"})
    QuestionsAdapter.fetchCategoryQuestions(id)
    .then((data) => {
      console.log("about to dispatch");
      //dispatch({type:"SELECT_CATEGORY", payload: data})
      let quiz = new Quiz(data.name, data.questions)
      dispatch({type:"CREATE_QUIZ", payload: quiz.constructQuiz()})
    })
  }
}
