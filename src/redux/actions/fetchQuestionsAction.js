import QuestionsAdapter from "../../apis/QuestionsAdapter"

export const fetchQuestions = () => {
  return (dispatch) => {
    QuestionsAdapter.fetchCategoryQuestions()
    .then((data) => {
      dispatch({type:"FETCH_QUESTIONS", payload: data})
    })
  }
}
