import QuestionsAdapter from "../../apis/QuestionsAdapter"

export const fetchQuestions = (id) => {
  return (dispatch) => {
    QuestionsAdapter.fetchCategoryQuestions(id)
    .then((data) => {
      dispatch({type:"FETCH_QUESTIONS", payload: data})
    })
  }
}
